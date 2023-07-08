import CV from '../../../opencv/define_types/typed/opencv';
import type { Room, CreateProcessorSchema } from './schema';

export async function createProcessor({ room }: CreateProcessorSchema) {
  const { peers, parameters, metadata } = room;

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const cv: CV =
    await require('../../../opencv/build_wasm_contrib/bin/opencv.js');

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
