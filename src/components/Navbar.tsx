import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <nav className='fixed flex w-screen px-16 py-5'>
        <Link href="/"><p className='text-xl'>Home</p></Link>
        <div className='p-2'></div>
        <Link href="/about"><p className='text-xl'>About</p></Link>
    </nav>
  )
}

export default Navbar