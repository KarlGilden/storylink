import PostThumbnail from '@/components/PostThumbnail';
import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function Library() {    
    
    // state
    const [posts, setPosts] = useState([])

    // path props
    const router = useRouter()
    const { code } = router.query

    useEffect(()=>{
        getPosts()
    },[code])

    const getPosts = async () => {
        if(!code) return 
        fetch(`/api/${code}/posts`)
        .then(res => res.json())
        .then(data =>{
            setPosts(data)
        })
    }

  return (
    <>
        <Head>
            <title>Library</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='p-16'>
            <div className='py-5'>
                <h1 className='text-5xl'>Library</h1>
            </div>
            <div className=''>
                <h2 className='text-2xl'>Short stories</h2>
                <div className='flex'>
                    {posts.map((value:any)=>{
                    return (
                        <PostThumbnail key={value.id} id={value.id} title={value.title.rendered} excerpt={value.excerpt.rendered.substr(3,50) + "..."}/>
                    )
                    })}
                </div>
            </div>
        </main>
    </>

  )
}

export default Library