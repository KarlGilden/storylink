import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Post = () => {

    const router = useRouter()
    const { code, id } = router.query

    const [post, setPost] = useState()

    useEffect(() => {
        getPost()
    }, [code, id])

    const getPost = async () => {
        if(!code || !id) return 
        await fetch(`/api/${code}/post/${id}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setPost(data)
        })
    }

  return (
    <div className='p-16'>
        <h1>{id}</h1>
    </div>
  )
}

export default Post