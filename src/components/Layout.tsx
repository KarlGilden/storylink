import React from 'react'
import Navbar from './Navbar'

interface IProps{
    children: React.ReactNode
}

const Layout = ({children}:IProps) => {
  return (
    <>  
    <Navbar/>
    {children}
    </>

  )
}

export default Layout