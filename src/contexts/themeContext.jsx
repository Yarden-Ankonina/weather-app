import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {

    const [theme, setTheme] = useState("dark");
    
     function toggleTheme(){
        if(theme === "dark"){
            setTheme("light")
        }
        else {
            setTheme("dark")
        }
    }
    const isDarkMode = ()=>{
        return theme === "dark"
    }

    const value = {
        theme,
        toggleTheme,
        isDarkMode,
    }

    return (
        <ThemeContext.Provider value={value}>
            <div className={`App h-full ${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}




