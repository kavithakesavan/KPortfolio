import { createContext , useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({children}) =>{
    const [darktheme , setDarkTheme] = useState(true);
      console.log("darktheme",darktheme);
    const toggleTheme = () =>{
      
        setDarkTheme((prevTheme) => !prevTheme);
    }
    return(
        <ThemeContext.Provider value ={{darktheme , toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )

}

export {ThemeContext , ThemeProvider}