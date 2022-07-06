import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../sections/footer'
import Header from '../sections/header'

export default function Layout() {
  return (
    <>
      <Header/>
        <div className=' justify-center bg-gradient-to-r from-sky-200 to-emerald-50 dark:bg-slate-700 h-full dark:bg-gradient-to-r dark:from-slate-800 dark:to-stone-900 '>
            <Outlet/>
        </div>
      <Footer/>
    </>
  )
}
