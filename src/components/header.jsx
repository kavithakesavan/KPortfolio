import "./header.css";

import dark from "../assets/dark.png";
import light from "../assets/light.png";

import { createContext, useContext, useRef, useState } from "react";
import { ThemeContext, ThemeProvider } from "./themecontext.jsx";

export default function Header({ currenttheme, currentclick, forwardred }) {
  // const { darktheme, toggleTheme } = useContext(ThemeContext)  ;
  console.log(forwardred);
  const handleshow = (section) => {
    let ref = React.createRef();
    ref[section].current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    // <div className="stickyheader">Hello HEader</div>
    // <div class="sticky top-0  z-10">
    //   <div class="flex-auto pe-18"> &lt;KK/&gt; </div>
    //   <div class="flex-auto"> TechStack </div>
    //   <div class="flex-auto"> Projects </div>
    //   <div class="flex-auto"> Contact </div>
    //   <div class="flex-auto"> Resume </div>
    //   <img
    //     class="f  lex-auto cursor-pointer h-5 w-5 overflow-visible "
    //     src={currenttheme == "bg-gray-800 text-white/60" ? dark : light}
    //     alt="darktheme"
    //     onClick={currentclick}
    //   />
    // </div>
    <div class="sthead">
      <div class="overflow-hidden max-w-screen flex justify-between items-center p-4 px-8 lg:px-24">
        <div class="flex justify-center items-center gap-2 cursor-pointer">
          <div class=" text-xl text-amber-600 font-bold">Kavitha Kesavan</div>
        </div>
        <div class=" hidden md:flex justify-center items-center list-none gap-10 ">
          <li class="hover:text-cyan-400 text-xl font-semibold duration-500 cursor-pointer">
            <a href="techstack">TechStack</a>
          </li>
          <li class="hover:text-cyan-400 text-xl font-semibold duration-500 cursor-pointer">
            <a href="main">Projects</a>
          </li>
          <li class="hover:text-cyan-400 text-xl font-semibold duration-500 cursor-pointer">
            <a>Contact</a>
          </li>
        </div>
        <img
          class="cursor-pointer h-10 w-10 overflow-hidden "
          src={currenttheme == "bg-gray-800 text-white/60" ? dark : light}
          alt="darktheme"
          onClick={currentclick}
        />
      </div>
    </div>
  );
}
//day <a href="https://www.flaticon.com/free-icons/themes" title="themes icons">Themes icons created by Awicon - Flaticon</a>
//night <a href="https://www.flaticon.com/free-icons/theme" title="theme icons">Theme icons created by dickprayuda - Flaticon</a>
