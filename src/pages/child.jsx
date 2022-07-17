import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import CityForecastContainer from '../components/cityForecastContainer';
import { WeatherAppContext } from '../contexts/weatherAppContext';

export default function Child() {
    let {id} = useParams();
    const {SetLocationKey} = useContext(WeatherAppContext);

    useEffect(()=>{
        SetLocationKey(id);
    },[id,SetLocationKey])
    
  return (
    <>
        <div className='h-5/6 flex justify-center items-center' >
            <CityForecastContainer />
        </div>
    </>
  )
}
