import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if(req.method === 'POST') {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch("http://localhost:3001/user/create", {body: JSON.stringify(req.body), method: 'POST', headers: myHeaders})
            .then(value => value.json()).then(value => res.status(200).json(value)).catch(reason => {
            res.status(500).json({message: "API down"})
        })
    }
}
