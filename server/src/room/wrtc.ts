import Peer from 'simple-peer';
import { EventEmitter } from 'events';
import { z } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const wrtc = require('wrtc');

const EventRoomEnum = z.enum([
  'signal',
  'connect',
  'data',
  'stream',
  'error',
  'close',
]);

export function createPeer(client_id: string, ev: EventEmitter) {
  const peer = new Peer({ wrtc });

  ev.emit(`${client_id}/${EventRoomEnum.enum.signal}`, '');

  peer.on('signal', (data: Peer.SignalData) => {
    ev.emit(`${client_id}/${EventRoomEnum.enum.signal}`, data);
  });
  peer.on('connect', () => {
    ev.emit(`${client_id}/${EventRoomEnum.enum.connect}`);
  });
  peer.on('error', (err: Error) => {
    ev.emit(`${client_id}/${EventRoomEnum.enum.error}`, err);
  });
  peer.on('close', () => {
    ev.emit(`${client_id}/${EventRoomEnum.enum.close}`);
    peer.destroy();
  });

  return peer;
}

export function destroyPeer(peer: Peer.Instance, ev: EventEmitter) {
  //
}
