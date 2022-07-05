import React from 'react'

export default function Footer() {

  function GithubLogo(){
    const theme = "dark";
    let gitUrl;
    if(theme === "dark"){
      gitUrl = "https://img.icons8.com/nolan/344/github.png";
    }
    else{
      gitUrl = "https://img.icons8.com/glyph-neue/344/github.png";
    }
      return <img className='w-8'src={gitUrl} alt="Github Link" />
  }

  return (
    <>
    <div className='flex justify-between items-center dark:bg-neutral-900 bg-neutral-300 h-fit p-0.5 fixed w-full bottom-0 text-slate-200 '>
      <div className='flex items-center'>
        <div className='text-xs mx-1 dark:text-slate-500 font-medium'>Made By Yarden Ankonina</div>
        <a href="https://github.com/Yarden-Ankonina/weather-app" target="_blank"><GithubLogo/></a>
      </div>
        <div className='text-xs mr-2 dark:text-slate-500 align-middle text-black'>This app uses <a className='dark:text-slate-500 italic text-blue-800 font-medium' href='https://icons8.com/'>https://icons8.com/</a></div>
      </div>
    </>
  )
}
