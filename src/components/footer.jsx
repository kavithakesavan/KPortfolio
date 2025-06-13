import "./footer.css";
import gitsvg from "../assets/git.svg";
import linkedinsvg from "../assets/linkedin.svg";
import xsvg from "../assets/x.svg";
import gmailsvg from "../assets/gmail.svg";
import { createContext, useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "./themecontext.jsx";

export default function Header() {
  // const { darktheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div class="bottom-0 left-0 w-full z-11">
      Hello Footer
      {/* <img src = {gitsvg} alt="My Happy SVG"/>  
      <img src = {linkedinsvg} alt="My Happy SVG"/>  
        <img src = {xsvg} alt="My Happy SVG"/>  
     <img src = {gmailsvg} alt="My Happy SVG"/>   */}
    </div>
  );
}
