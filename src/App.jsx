import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Outlet,Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export const App = () => {
  return (
      <div className="App">       
        <Navbar/>
        <Outlet/>        
        <Footer/>  
      </div>
  );
}

export default App;
