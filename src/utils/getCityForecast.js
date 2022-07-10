export const getCityForecast = (locationKey) => {
  const baseUrl =
    process.env.REACT_APP_ENVIRONMENT === "dev"
      ? "http://localhost:3001"
      : "http://dataservice.accuweather.com";
    const endPoints = {
        locationRequest : `${baseUrl}/locations/v1/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}`,
        currentConditions : `${baseUrl}/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}`,
        fiveDayForecast : `${baseUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}`,
    }
    
  if (process.env.REACT_APP_ENVIRONMENT === "dev") {
  } else {
  }
};
