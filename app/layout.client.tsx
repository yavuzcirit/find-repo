'use client'
import React from 'react'
import Header from './components/ui/Header'


const Layout = ({children}: {
    children: React.ReactNode
  }) => {
  return (
    <>
        <body>
            <Header auth={false} onSignIn={()=>console.log('')} onSignOut={()=>console.log('')} />
            {children}
        </body>      
    </>
  )
}

export default Layout