import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

type Data = {
  name: string
}

export async function GET(req: NextRequest) {
  let res = NextResponse<Data>;
  return res.json({name: 'John Doe'});
}