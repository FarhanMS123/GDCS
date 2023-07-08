import { router, publicProcedure } from '@/trpc';
import { EventEmitter } from 'events';
import { z } from 'zod';
import type { ClientsRoom, Rooms, SubsSchema } from './schema';
import Peer, { SignalData } from 'simple-peer';
import crypto from 'crypto';
import { observable } from '@trpc/server/observable';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/// @ts-ignore
import wrtc from 'wrtc';
import { createProcessor } from './processor';

const rooms: Rooms = {};
const clients: ClientsRoom = {};

const RoomCode = z
  .string()
  .uuid()
  .refine((arg) => typeof rooms[arg] == 'string', 'Room is not registered');
const SignalPeerSchema = z.object({
  client_id: z
    .string()
    .uuid()
    .refine(
      (arg) => typeof clients[arg] == 'string',
      'Client is not registered',
    ),
  data: z.union([z.string(), z.custom<SignalData>()]),
});
const SignalStreamSchema = z.object({
  room_code: RoomCode,
  data: z.union([z.string(), z.custom<SignalData>()]),
});

export const roomRouter = router({
  /**
   * Generate Room Code by UUID, and setting up the room,
   * include create stream peer, setup event emitter, and
   * construct OpenCV workspace for processor
   */
  create: publicProcedure.mutation(async () => {
    const code = crypto.randomUUID();
    rooms[code] = {
      code,
      ev: new EventEmitter(),
      peers: {
        stream: null,
      },
      processor: null,
      metadata: {},
      parameters: {},
    };
    rooms[code].processor = await createProcessor({ room: rooms[code] });

    const { metadata, parameters, peers } = rooms[code];
    return { code, metadata, parameters, peers: Object.keys(peers) };
  }),

  /**
   * Only return room code, metadata, parameters, and
   * a bunch of client id by peers
   */
  get: publicProcedure.input(RoomCode).query(({ input }) => {
    const { code, metadata, parameters, peers } = rooms[input];
    return { code, metadata, parameters, peers: Object.keys(peers) };
  }),

  /**
   * Request for client to join the stream by Room Code. This function
   * would generate Client ID by UUID, and attach to corresponding
   * room. The peer event would be automatically setting up so
   * if user disconnected to the peer, or user leave the subscription,
   * would automatically destroy the client entity from the room. Client
   * required to request the subscription again and receive new id. This
   * peer would be used to share processed image from processor to client
   * as live view.
   */
  subsJoin: publicProcedure.input(RoomCode).subscription(({ input }) => {
    return observable<SubsSchema>((emit) => {
      const room_code = input;
      const room = rooms[room_code];

      const client_id = crypto.randomUUID();
      clients[client_id] = room_code;

      const peer = new Peer({ wrtc });
      room.peers[client_id] = peer;

      let emit_closed = false;

      emit.next({
        type: 'client_id',
        data: client_id,
      });

      peer.on('signal', (signal) =>
        emit.next({
          type: 'signal',
          data: signal,
        }),
      );

      peer.on('error', (err) => {
        if (!emit_closed)
          emit.next({
            type: 'signal_error',
            data: err,
          });
      });

      peer.on('close', () => {
        if (!!peer.destroyed) peer.destroy();
        delete room.peers[client_id];
        delete clients[client_id];
        emit.complete();
      });

      return () => {
        if (!!peer.destroyed) peer.destroy();
        emit_closed = true;
      };
    });
  }),

  /**
   * When new there is new subscribtion, old stream would be destroyed
   * and creating new Peer instead. This peer used to share live stream
   * from clients to processor.
   */
  subsStream: publicProcedure.input(RoomCode).subscription(({ input }) => {
    const room = rooms[input];
    if (!!room.peers.stream?.destroyed) room.peers.stream?.destroy();

    const peer = new Peer({ wrtc });
    room.peers.stream = peer;

    return observable((emit) => {
      let emit_closed = false;

      peer.on('signal', (signal) =>
        emit.next({
          type: 'signal',
          data: signal,
        }),
      );

      peer.on('error', (err) => {
        if (!emit_closed)
          emit.next({
            type: 'signal_error',
            data: err,
          });
      });

      peer.on('close', () => {
        if (!!peer.destroyed) peer.destroy();
        emit.complete();
      });

      peer.on('stream', (stream) => {
        room.processor?.pushStream(stream);
      });

      return () => {
        if (!!peer.destroyed) peer.destroy();
        emit_closed = true;
      };
    });
  }),

  /**
   * send signal to receiving stream for establish
   * connection. This stream would be use to send
   * processed image from OpenCV to clients
   */
  signalPeer: publicProcedure
    .input(SignalPeerSchema)
    .mutation(({ input }) =>
      rooms[clients[input.client_id]]?.peers[input.client_id]?.signal(
        input.data,
      ),
    ),

  /**
   * send signal to stream's peer for establishing
   * image stream connection. This stream would be use
   * for client to send live video to server and then be
   * processed by OpenCV
   */
  signalStream: publicProcedure
    .input(SignalStreamSchema)
    .mutation(({ input }) =>
      rooms[input.room_code]?.peers.stream?.signal(input.data),
    ),
});
