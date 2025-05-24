import './footer.css';
import { createContext , useContext, useState } from "react";
import { ThemeContext , ThemeProvider } from './themecontext.jsx';

export default function Header(){
        const { darktheme, toggleTheme } = useContext(ThemeContext);

  return(

    <div data-attr='foot' className={` ${darktheme ? "dark-theme" : "light-theme"}`}> Footer</div>

  );
};

