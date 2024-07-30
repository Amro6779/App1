import React, { useEffect, useState } from 'react';
import style from './About.module.css';

export default function About() {



  return <>

    <div className="bg-emerald-500 text-center h-full py-48 relative top-24">
      <div>
        <h2 className='text-white font-bold text-4xl pb-5'>ABOUT COMPONENT</h2>
        <div className="flex justify-center items-center">
          <div className='line'></div>
          <i className='fas fa-star text-white mx-5'></i>
          <div className='line'></div>
        </div>
        <div className="text-white flex justify-center text-start">
          <p className='w-2/6 mx-10'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className='w-2/6 mx-10'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>

  </>
}
