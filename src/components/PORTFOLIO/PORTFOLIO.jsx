import React, { useEffect, useState } from 'react';
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';

export default function PORTFOLIO() {



  return <>

    <div className="text-center h-full py-48 relative">

      <div className="title">
        <div className="title-text">
          <h2 className='text-4xl font-bold'>PORTFOLIO COMPONENT</h2>
        </div>
        <div className="flex justify-center items-center mt-3">
          <div className='black-line'></div>
          <i className='fas fa-star mx-5'></i>
          <div className='black-line'></div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="flex justify-around">
          <div className="img relative">
            <img src={img1} className='my-3 rounded-2xl' width={400} alt="" />
            <div className="layer bg-emerald-500 absolute top-3 left-0 right-0 bottom-3 flex justify-center items-center opacity-80 rounded-2xl hidden">
              <i className='fa-solid fa-plus fa-6x text-white'></i>
            </div>
          </div>
          <div className="img relative">
            <img src={img2} className='my-3 rounded-2xl' width={400} alt="" />
            <div className="layer bg-emerald-500 absolute top-3 left-0 right-0 bottom-3 flex justify-center items-center opacity-80 rounded-2xl hidden">
              <i className='fa-solid fa-plus fa-6x text-white'></i>
            </div>
          </div>
          <div className="img relative">
            <img src={img3} className='my-3 rounded-2xl' width={400} alt="" />
            <div className="layer bg-emerald-500 absolute top-3 left-0 right-0 bottom-3 flex justify-center items-center opacity-80 rounded-2xl hidden">
              <i className='fa-solid fa-plus fa-6x text-white'></i>
            </div>
          </div>
        </div>
        <div className="flex justify-around relative">
        <div className="img relative">
            <img src={img1} className='my-3 rounded-2xl' width={400} alt="" />
            <div className="layer bg-emerald-500 absolute top-3 left-0 right-0 bottom-3 flex justify-center items-center opacity-80 rounded-2xl hidden">
              <i className='fa-solid fa-plus fa-6x text-white'></i>
            </div>
          </div>
          <div className="img relative">
            <img src={img2} className='my-3 rounded-2xl' width={400} alt="" />
            <div className="layer bg-emerald-500 absolute top-3 left-0 right-0 bottom-3 flex justify-center items-center opacity-80 rounded-2xl hidden">
              <i className='fa-solid fa-plus fa-6x text-white'></i>
            </div>
          </div>
          <div className="img relative">
            <img src={img3} className='my-3 rounded-2xl' width={400} alt="" />
            <div className="layer bg-emerald-500 absolute top-3 left-0 right-0 bottom-3 flex justify-center items-center opacity-80 rounded-2xl hidden">
              <i className='fa-solid fa-plus fa-6x text-white'></i>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div id='lightboxcontainer' className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-blue-800 opacity-70 z-50 hidden">

      <div id="lightbox">

        <img src={img1} width={500}  className='opacity-100' alt="" />
        
      </div>

    </div>


  </>
}
