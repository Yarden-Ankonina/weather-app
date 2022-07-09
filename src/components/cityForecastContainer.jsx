import React from 'react'
import { useGeoPosition } from '../utils/mockServerJsonService'

import CityForecast from './cityForecast'

export default function CityForecastContainer() {
  // useGeoPosition()
  return (
    <>
      <CityForecast/>
    </>
  )
}
