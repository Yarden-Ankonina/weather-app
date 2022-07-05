import React from "react";

export const themes = {
    light:{
        logo : "https://img.icons8.com/dusk/344/summer.png"
    },
    dark:{
        logo : "https://img.icons8.com/dusk/344/partly-cloudy-night--v1.png"
    }
}

export const ThemeContext = React.createContext(themes.dark);