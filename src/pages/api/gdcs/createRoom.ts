import { Room, createRoom } from '@/services/room'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Room>
) {
  let room = createRoom();
  res.json(room);
}