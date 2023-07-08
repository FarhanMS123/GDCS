import { EventEmitter } from 'events';
import Peer from 'simple-peer';
import { createProcessor } from './processor';

export type Room = {
  code: string;
  ev: EventEmitter;
  peers: {
    stream: Peer.Instance | null;
    [code: string]: Peer.Instance | null;
  };
  processor: null | Awaited<ReturnType<typeof createProcessor>>;
  parameters: object;
  metadata: object;
};

export type Rooms = {
  [code: string]: Room;
};
export type ClientsRoom = {
  [client_id: string]: string; // room_code
};

export type SubsSchema = {
  type: 'client_id' | 'update' | 'signal' | 'signal_error';
  identifier?: unknown;
  data: unknown;
  descriptor?: unknown;
};

export type CreateProcessorSchema = {
  room: Room;
};
