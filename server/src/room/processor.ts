import type { Room, CreateProcessorSchema } from './schema';

export function createProcessor({ room }: CreateProcessorSchema) {
  const { peers, parameters, metadata } = room;

  function pushStream(stream: MediaStream) {
    for (const [client_id, peer] of Object.entries(peers)) {
      peer?.addStream(stream);
    }
  }

  return {
    pushStream,
    destroy: () => ({}),
  };
}
