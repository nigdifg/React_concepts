import React from 'react'
import Header from './componnets/Header/Header'
import Footer from './componnets/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        
        <Header/>
        <Outlet/>
        <Footer/>

    </>
  )
}

export default Layout