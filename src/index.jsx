import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import './index.css';
import App from './App';
import { ContextProvider } from './Components/utils/global.context';

//Pages
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Details from './Routes/Details'
import Contact from './Routes/Contact'
import Error from './Routes/Error'
import Odontologo from './Routes/Odontologo';
import {AppRoutes} from './Components/utils/AppRoutes';


const router = createBrowserRouter([
  {
    path: "/*",
    element: <App/>,
    errorElement: <Error/>,
    children: AppRoutes,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
     <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
)


