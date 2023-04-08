import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Outlet,Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useAppContext } from './Components/utils/useAppContext';

export const App = () => {

  const {
    state: {darkMode},
  } = useAppContext();

  return (
      <div className="App">       
        <Navbar temaFondo={darkMode ? 'dark':'light'}/>
        <Outlet/>        
        <Footer/>  
      </div>
  );
}

export default App;
