import './header.css';
import  darkmodeimage from '../assets/dark-theme.png';
import  lightmodeimage from '../assets/light-theme.png';
import  darkmodeimagesvg from '../assets/dark-mode.svg';
import  dark from '../assets/dark.png';
import  light from '../assets/light.png';

import { createContext , useContext, useState } from "react";
import { ThemeContext , ThemeProvider } from './themecontext.jsx';


export default function Header(){

      const { darktheme, toggleTheme } = useContext(ThemeContext);
      console.log("header",darktheme);
  return(
    <div data-attr="headwrapper" className={` ${darktheme ? "dark-theme" : "light-theme"}`}> 
    {/* <div>KK</div> */}
    <div class="shortname"> &lt;KK/&gt; </div>
    <div class="secondwrapper">
    <div class="col-2"> TechStack </div>
    <div class="col-2"> Projects </div>
    <div class="col-2"> Contact </div>
    <div class="col-2">  Resume </div>
    <img class="themeimage" src={darktheme ? dark : light} height="30px" width="30px"   alt="darktheme" onClick={toggleTheme}/>

    </div>
    </div>
    // {/* <button onClick={toggleTheme} className='theme'>Switch Theme</button> */}
   
  );    
};
//day <a href="https://www.flaticon.com/free-icons/themes" title="themes icons">Themes icons created by Awicon - Flaticon</a>
//night <a href="https://www.flaticon.com/free-icons/theme" title="theme icons">Theme icons created by dickprayuda - Flaticon</a>

