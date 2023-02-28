import Link from 'next/link'
import React from 'react'

interface IProps{
    code: string,
    children: React.ReactNode
}

const CardButton = ({code, children}:IProps) => {
  return (
    <Link href={`/${code}/library`}><div className='px-2 py-1 flex justify-center items-center rounded-sm hover:scale-105 transform transition duration-250 hover:shadow-lang-card cursor-pointer'>{children}</div></Link>
  )
}

export default CardButton