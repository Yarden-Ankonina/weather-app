import React from 'react'

import { useTheme } from '../../utils/themeProvider';

export default function Footer() {

  const darkGitLogo = "https://img.icons8.com/nolan/344/github.png";
  const lightGitLogo = "https://img.icons8.com/glyph-neue/344/github.png";

  const theme = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <>
    <div className='flex justify-between items-center dark:bg-neutral-900 bg-slate-100 border-t border-slate-400 dark:border-none h-fit p-0.5 fixed w-full bottom-0 text-slate-200 '>
      <div className='flex items-center'>
        <div className='text-xs mx-1 dark:text-slate-500 text-slate-900 font-medium'>Made By Yarden Ankonina</div>
          <a href="https://github.com/Yarden-Ankonina/weather-app" rel="noreferrer" target="_blank">
            {isDarkMode 
              ? <img className='w-8'src={darkGitLogo} alt="Github Link" />
              : <img className='w-8'src={lightGitLogo} alt="Github Link" />
            }
          </a>
        </div>
      <div className='text-xs mr-2 dark:text-slate-500 align-middle text-black'>This app uses <a className=' italic' rel="noreferrer" target="_blank" href='https://icons8.com/'>https://icons8.com/</a></div>
    </div>
    </>
  )
}
