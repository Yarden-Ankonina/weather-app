import React, { createContext, useState } from 'react'

export const TemperatureContext = createContext();

export default function TemperatureProvider({children}) {
  const [isCelsius, setIsCelsius] = useState(true)

  const toggleTemperatureScale = ()=>{
    isCelsius ? setIsCelsius(false) : setIsCelsius(true)
  }
 
  const value ={
    isCelsius,
    toggleTemperatureScale
  }

  return (
    <TemperatureContext.Provider value={value}>
        {children}
    </TemperatureContext.Provider>
  )
}
