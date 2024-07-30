import React, { useEffect, useState } from 'react';
import style from './layout.module.css';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Layout() {



  return <>

    <Navbar />

    <div className="container mx-auto">

      <Outlet></Outlet>


    </div>



    <Footer />

  </>
}
