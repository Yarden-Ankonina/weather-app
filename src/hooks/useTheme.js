import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export const useTheme = ()=>{
    return useContext(ThemeContext);
}
