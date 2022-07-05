import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../sections/footer'
import Header from '../sections/header'

export default function Layout() {
  return (
    <>
      <Header/>
       <div className=' justify-center bg-slate-50 dark:bg-slate-600 h-5/6'>
            
            <Outlet/>
        </div>
      <Footer/>
    </>
  )
}
