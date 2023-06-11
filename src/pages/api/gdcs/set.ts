import { Room, rooms } from '@/services/room'
import type { NextApiRequest, NextApiResponse } from 'next'

type JoinRoomQuery = {
  code: string,
}

// ?code=&id=
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Room>
) {
  let code = (req.query as JoinRoomQuery).code;
  res.status(200).json(rooms[code])
}