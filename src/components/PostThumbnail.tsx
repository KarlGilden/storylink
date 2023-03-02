import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface IProps{
    title:string,
    excerpt:string,
    id:number
}
const PostThumbnail = ({title, excerpt, id}:IProps) => {

    const router = useRouter()
    const { code } = router.query

  return (
    <Link href={`/${code}/post/${id}`}>
        <div className='p-5 m-5 h-[150px] w-full max-w-[300px] hover:scale-105 cursor-pointer transform transition duration-250 rounded-sm hover:shadow-lang-card bg-gray-500 text-white'>
        <h3>{title}</h3>
        <small>{excerpt}</small>
        </div> 
    </Link>

    )
}

export default PostThumbnail