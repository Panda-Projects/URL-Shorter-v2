// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch("http://localhost:3001/").then(value => value.json()).then(value => res.status(200).json(value)).catch(reason => {
    res.status(500).json({message: "API down"})
  })
}
