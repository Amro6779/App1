import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import PORTFOLIO from './components/PORTFOLIO/PORTFOLIO';
import CONTACT from './components/CONTACT/CONTACT';
import Notfound from './components/Notfound/Notfound';
import Layout from './components/Layout/Layout'


let routers = createBrowserRouter([
 
  {path:'',element:<Layout/> , children : [
    {index:true , element : <Home/>},
    {path:'About' , element : <About/>},
    {path:'PORTFOLIO' , element : <PORTFOLIO/>},
    {path:'CONTACT' , element : <CONTACT/>},
    {path:'*' , element : <Notfound/>},
  ]}

]);


function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}

export default App
