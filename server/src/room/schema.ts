import { EventEmitter } from 'events';
import Peer from 'simple-peer';

export type Room = {
  code: string;
  ev: EventEmitter;
  peers: {
    stream: Peer.Instance | null;
    [code: string]: Peer.Instance | null;
  };
  processor: unknown;
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
