import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './common/footer'
import Header from './common/header'
import { ToastContainer} from 'react-toastify';


export default function Layout() {
  
  return (
    <>
      <Header/>
        <div className=' justify-center bg-gradient-to-tr from-white to-cyan-400 dark:bg-slate-700 h-full dark:bg-gradient-to-tr dark:from-slate-700 dark:to-stone-900 '>
        <ToastContainer />
        <Outlet/>
        </div>
      <Footer/>
    </>
  )
}
