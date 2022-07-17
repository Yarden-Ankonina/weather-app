import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Footer from './common/footer'
import Header from './common/header'
import { ToastContainer} from 'react-toastify';
import { WeatherAppContext } from '../contexts/weatherAppContext';


export default function Layout() {
  const {status} = useContext(WeatherAppContext);
  const location = useLocation();
  return (
    <>
      <Header/>
        <div id="layout" className=' justify-center bg-gradient-to-tr from-white to-cyan-400 dark:bg-slate-700 h-full dark:bg-gradient-to-tr dark:from-slate-700 dark:to-stone-900 '>
        <ToastContainer />
        {status === "error" && location.pathname !== "/loadProblem" ?
        <Navigate to="/loadProblem" replace={true} />
        :<Outlet/>
        }
        </div>
      <Footer/>
    </>
  )
}
