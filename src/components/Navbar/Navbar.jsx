import React, { useEffect, useState } from 'react';
import style from './navbar.module.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {

    

  return <>
  
   <nav>
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center capitalize py-9 bg-gray-700 text-white fixed z-50">
      <div className="title font-bold font text-3xl ms-20"><Link to="">START FRAMEWORK</Link></div>
      <div className="links font-bold me-20">
        <ul className='flex flex-col lg:flex-row'>
          <li className='mx-5'><NavLink to="About">About</NavLink></li>
          <li className='mx-5'><NavLink to="PORTFOLIO">PORTFOLIO</NavLink></li>
          <li className='mx-5'><NavLink to="CONTACT">CONTACT</NavLink></li>
        </ul>
      </div>
    </div>
   </nav>
  
  </>
}
