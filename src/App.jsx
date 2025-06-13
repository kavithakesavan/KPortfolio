import { createContext, useContext, useState, useEffect, useRef } from "react";
import { ThemeContext, ThemeProvider } from "./components/themecontext.jsx";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Main from "./components/main.jsx";
import AboutMe from "./components/aboutme.jsx";
import TechStack from "./components/techstack.jsx";
import NavBar from "./components/navbar.jsx";
import ErrorBoundary from "./ErrorBoundary.js";
import Project from "./components/project.jsx";
import WorkHistory from "./components/workhistory.jsx";
import Responsiblities from "./components/responsiblities.jsx";
import Contact from "./components/contact.jsx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { PiMoonFill } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import dark from "../src/assets/dark.png";
import light from "../src/assets/light.png";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [modeClass, setmodeclass] = useState("bg-gray-800 text-white/60");
  const refaboutme = useRef(null);
  const reftechstack = useRef(null);
  const refprojects = useRef(null);
  const refcontact = useRef(null);

  const handlescroll = (event) => {
    console.log(event);
    reftechstack.current?.scrollIntoView({
      block: "start",
      behaviour: "smooth",
    });
  };
  // const themeToggle= ()=>{
  //   console.log("theme",theme);
  //   debugger;
  //     if(theme == "light"){
  //       setTheme("dark");
  //       setmodeclass("bg-gray-800 text-white/60");
  //       console.log("if",modeClass);
  //     }
  //     else{
  //       setTheme("light");
  //       setmodeclass("bg-white-800 text-gray/60");
  //               console.log("else",modeClass);

  //     }
  //     console.log("mode",modeClass);
  // }
  const themechange = () => {
    if (modeClass == "bg-gray-800 text-white/60") {
      setmodeclass("bg-white-800 text-gray/60");
    } else {
      setmodeclass("bg-gray-800 text-white/60");
    }
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    // <ErrorBoundary fallback={"gg"}>
    //   <BrowserRouter>
    //     <NavBar />
    //     <Routes>
    //       <Route path="/aboutme" element={<AboutMe />}></Route>
    //       {/* <Route path="/techstack" element={<TechStack />}></Route> */}
    //     </Routes>
    //   </BrowserRouter>
    //       </ErrorBoundary>

    <div
      class={
        theme == "dark"
          ? "bg-gray-950 text-white/60"
          : "bg-white-500 text-gray/60"
      }
    >
      <div
        class={`sticky top-0 text-cyan-600 z-100  p-6 ${
          theme == "dark" ? "bg-gray-950" : "bg-white-500"
        }`}
      >
        <div class="overflow-hidden max-w-screen flex justify-between items-center p-4 px-8 lg:px-24">
          <div className="flex items-center space-x-2 py-4 md:py-1 drop-shadow-lg bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
            <p>&lt;</p>
            <p className="text-5xl" id="custom-logo">
              K.K
            </p>
            <p>/&gt;</p>
          </div>

          <div class="flex justify-center items-center gap-2 cursor-pointer">
            <div class=" text-xl text-amber-600 font-bold">Kavitha Kesavan</div>
          </div>
          <div class=" hidden md:flex justify-center items-center list-none gap-10 ml-50">
            <li class="hover:text-cyan-400 text-xl font-semibold duration-500 cursor-pointer">
              <a onClick={handlescroll}>TechStack</a>
            </li>
            <li class="hover:text-cyan-400 text-xl font-semibold duration-500 cursor-pointer">
              <a onClick={handlescroll}>Highlights</a>
            </li>
            <li class="hover:text-cyan-400 text-xl font-semibold duration-500 cursor-pointer">
              <a href="main">Projects</a>
            </li>
            <li class="hover:text-cyan-400 text-xl font-semibold duration-500 cursor-pointer">
              <a>Contact</a>
            </li>
            <li class="hover:text-cyan-400 text-xl font-semibold duration-500 cursor-pointer">
              <a
                href="https://docs.google.com/spreadsheets/d/1zLDgglsezHXlcpR2ooDkyzTjymd1TCsFEx1l1dGFXgQ/edit?usp=drive_link"
                target="_blank"
              >
                Resume
                {/* <button className="block px-6 py-2 transition duration-300 ease-in-out bg-transparent border shadow-sm border-button-color shadow-button-color text-button-color hover:bg-button-color hover:text-white hover:dark:text-slate-300 focus:bg-button-color focus:text-white active:bg-button-color active:text-white">
                  Resume
                </button> */}
              </a>
            </li>
            <li class="cursor-pointer" onClick={handleThemeSwitch}>
              {theme === "light" ? (
                <IoSunny className="h-7 w-7 text-slate-300 hover:text-[#4305ba]" />
              ) : (
                <PiMoonFill className="h-7 w-7 text-slate-300 hover:text-[#4305ba]" />
              )}
            </li>
          </div>
          {/* <button className="block py-2 " onClick={handleThemeSwitch}>
            {theme === "light" ? (
              <IoSunny className="h-7 w-7 text-slate-300 hover:text-[#4305ba]" />
            ) : (
              <PiMoonFill className="h-7 w-7 text-slate-300 hover:text-[#4305ba]" />
            )}
          </button> */}
        </div>
      </div>
      {/* <Header
        currenttheme={modeClass}
        currentclick={themechange}
        forwardred={refsection}
      /> */}
      <div class="block">
        <div className="relative flex-initial order-2 col-span-1 mx-auto md:mx-0 md:order-none">
          <ul className="flex items-center space-x-8 md:fixed md:bottom-0 mb-7 md:flex-col md:space-y-4 md:space-x-0">
            <li className="transition-all duration-500 translate-y-0 motion-reduce:transition-none opacity-1">
              <a href="https://github.com/Bharat-bhandari" target="_blank">
                <FaGithub className="w-8 h-8 text-black transition duration-300 ease-out svg-inline--fa fa-linkedin md:h-12 md:w-12 hover:-translate-y-1 motion-reduce:hover:translate-y-0 dark:text-slate-300" />
              </a>
            </li>
            <li className="transition-all duration-500 translate-y-0 motion-reduce:transition-none opacity-1">
              <a
                href="https://www.linkedin.com/in/bharat-bhandari-ba99bb19a/"
                target="_blank"
              >
                <FaLinkedin className="w-8 h-8 text-black transition duration-300 ease-out svg-inline--fa fa-linkedin md:h-12 md:w-12 hover:-translate-y-1 motion-reduce:hover:translate-y-0 dark:text-slate-300" />
              </a>
            </li>
            <li className="transition-all duration-500 translate-y-0 motion-reduce:transition-none opacity-1">
              <a
                href="https://www.linkedin.com/in/bharat-bhandari-ba99bb19a/"
                target="_blank"
              >
                <FaXTwitter className="w-8 h-8 text-black transition duration-300 ease-out svg-inline--fa fa-linkedin md:h-12 md:w-12 hover:-translate-y-1 motion-reduce:hover:translate-y-0 dark:text-slate-300" />
              </a>
            </li>
            <li className="transition-all duration-500 translate-y-0 motion-reduce:transition-none opacity-1">
              <a href="mailto:bharatbhandari1024@gmail.com" target="_blank">
                <SiGmail className="w-8 h-8 text-black transition duration-300 ease-out svg-inline--fa fa-linkedin md:h-12 md:w-12 hover:-translate-y-1 motion-reduce:hover:translate-y-0 dark:text-slate-300" />
              </a>
            </li>
          </ul>
        </div>
        <AboutMe ref="refaboutme" />
        <TechStack />
        <Responsiblities ref="refResponsiblities" />
        {/* <WorkHistory ref="refworkhistory" /> */}
        <Project ref="refproject" />
        <Contact />
        <footer className="order-last block mb-5 text-sm text-center">
          <a
            href="https://github.com/Bharat-bhandari"
            className="hover:text-link-color"
            target="_blank"
          >
            Code available on Github 👾
          </a>
        </footer>{" "}
      </div>
    </div>
  );
}
