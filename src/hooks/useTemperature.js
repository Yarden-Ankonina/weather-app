import { useContext } from "react";
import { TemperatureContext } from "../contexts/temperatureContext";

export const useTemperature = ()=>{
    return useContext(TemperatureContext);
}