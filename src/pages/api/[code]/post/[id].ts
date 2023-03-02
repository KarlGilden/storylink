// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import WPAPI from 'wpapi'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  getPost(req, res)
}

const getPost = (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const wp = new WPAPI({
    endpoint: 'http://storylink.local/wp-json',
  });

  const { id } = req.query

  if(typeof id !== "string") return

  wp.posts().id( parseInt(id) )
  .then(res => {
    return res
  })
  .then(post => {
      console.log( post );
      res.status(200).json(post)
  });
}