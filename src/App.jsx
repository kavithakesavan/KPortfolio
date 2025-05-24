import {createContext, useContext, useState } from 'react';
import { ThemeContext , ThemeProvider } from './components/themecontext.jsx';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Main from './components/main.jsx';
import AboutMe from './components/aboutme.jsx';



export default function App() {

  return (
    <div class="h-screen bg-gradient-to-b from-green-200 to-green-500">
    <ThemeProvider>
    <Header/>
    <AboutMe/>
    <Main/>
    <Footer/>
    </ThemeProvider>
</div>
  )
}


