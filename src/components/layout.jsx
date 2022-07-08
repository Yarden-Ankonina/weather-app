import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './common/footer'
import Header from './common/header'

export default function Layout() {
  return (
    <>
      <Header/>
        <div className=' justify-center bg-gradient-to-tr from-sky-500 to-emerald-50 dark:bg-slate-700 h-full dark:bg-gradient-to-tr dark:from-slate-700 dark:to-stone-900 '>
            {/* <video poster='image' preload="true" autoPlay loop muted playsInline className='absolute opacity-25' >
              <source type='video/mp4' src="https://storage.coverr.co/videos/cgEXo02oZWglwx1bzWK3qMd0091G029YI00k?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjU3MDY2NDc3fQ.3yfhuYQWTxhO10GzJYN4Er5Iiw4-qSRTO9_W-OoQNG0"/>
              Your browser does not support the video tag.
            </video> */}
        <Outlet/>
        </div>
      <Footer/>
    </>
  )
}
