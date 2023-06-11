import { Room, rooms } from '@/services/room'
import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto';

type JoinRoomQuery = {
  code: string,
}

// ?code=
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Room>
) {
  let code = (req.query as JoinRoomQuery).code;
  let id = crypto.randomUUID();
  res.status(200).json(rooms[code])
}