import React, { useEffect, useState } from 'react';
import style from './footer.module.css';

export default function Footer() {



  return <>

    <div className="bg-gray-700 text-white h-full py-28 relative top-14 flex justify-between items-center text-center ps-64">
      <div>
        <h3 className='text-3xl font-semibold'>LOCATION</h3>
        <p className='my-3'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div>
        <h3 className='text-3xl font-semibold'>AROUND THE WEB</h3>
        <div className="icons space-x-4 mt-3 flex justify-center">
          <div className='p-2 border border-white px-3 rounded-full'><i className='fa-brands fa-facebook'></i></div>
          <div className='p-2 border border-white px-3 rounded-full'><i className='fa-brands fa-twitter'></i></div>
          <div className='p-2 border border-white px-3 rounded-full'><i className='fa-brands fa-linkedin-in'></i></div>
          <div className='p-2 border border-white px-3 rounded-full'><i className='fa-solid fa-globe'></i></div>
        </div>
      </div>
      <div>
        <h3 className='text-3xl font-semibold'>ABOUT FREELANCER</h3>
        <p className='w-4/5 mx-auto mt-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
    <div className="bg-slate-900 text-white text-center py-8 relative top-11 flex justify-center items-center">
      <p className=''>Copyright © Your Website 2021</p>
    </div>

  </>
}
