import { useContext } from "react";
import { WeatherAppContext } from "../contexts/WeatherAppContext";

export const useTemperature = ()=>{
    return useContext(WeatherAppContext);
}