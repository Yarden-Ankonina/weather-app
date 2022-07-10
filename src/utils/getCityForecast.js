import { isDevMode } from "./settings";

const getCityForecastAdapter = (locationData,currentConditions,fiveDayForecastData)=>{
    if(!locationData || !currentConditions || !fiveDayForecastData) return null;
    const city = {
        id : locationData.AdministrativeArea.ID,
        cityName : locationData.AdministrativeArea.EnglishName,
        countryName : locationData.Country.EnglishName,
        key : locationData.Key,
        isCelsius : true,
        temperture :{
            celsius : currentConditions[0].Temperature.Metric.Value,
            fahrenheit : currentConditions[0].Temperature.Imperial.Value,
        },
        weatherIcon : currentConditions[0].WeatherIcon,
        weatherText : currentConditions[0].WeatherText,
        link : currentConditions[0].Link,
        fiveDayForecast : fiveDayForecastData.DailyForecasts,
    }
    return city;
}

export const getCityForecast = async ({queryKey}) => {
    const [,locationKey] = queryKey
    const baseUrl =
    isDevMode
      ? "http://localhost:3001"
      : "http://dataservice.accuweather.com";
      console.log(process.env.REACT_APP_ENVIRONMENT)
      console.log(isDevMode)
      console.log(baseUrl)
    const endPoints = {
        locationRequest : `${baseUrl}/locations/v1/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}`,
        currentConditions : `${baseUrl}/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}`,
        fiveDayForecast : `${baseUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}`,
    }

    const locationRes = await fetch(endPoints.locationRequest);
    const location = await locationRes.json();
    const currentConditionsRes = await fetch(endPoints.currentConditions);
    const currentConditions = await currentConditionsRes.json();
    const fiveDayForecastRes = await fetch(endPoints.fiveDayForecast);
    const fiveDayForecast = await fiveDayForecastRes.json();
    return getCityForecastAdapter(location,currentConditions, fiveDayForecast)
};
