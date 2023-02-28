// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import WPAPI from 'wpapi'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const wp = new WPAPI({
        endpoint: 'http://storylink.local/wp-json',
      });

    const { code } = req.query

    if(typeof code !== "string") return

    wp.categories().slug( code )
    .then(res => {
        var category = res[0];
        return wp.posts().categories( category.id );
    })
    .then(categoryPosts => {
        console.log( categoryPosts );
        res.status(200).json(categoryPosts)
    });
  
}