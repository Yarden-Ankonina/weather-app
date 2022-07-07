import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export function useTheme(){
    return useContext(ThemeContext);
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("dark");
    
     function ToggleTheme(){
        if(theme === "dark"){
            setTheme("light")
        }
        else {
            setTheme("dark")
        }
    }
    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={ToggleTheme}>
                <div className={`App h-full ${theme}`}>
                    {children}
                </div>
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}




