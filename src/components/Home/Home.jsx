import React, { useEffect, useState } from 'react';
import avatar from '../../assets/avataaars.svg';

export default function Home() {

  return <>

    <div className="bg-emerald-500 text-center h-full py-28 relative top-24">
      <div>
        <img className='mx-auto mb-10' src={avatar} width={250} alt="" />
        <h2 className='text-white font-bold text-4xl pb-5'>START FRAMEWORK</h2>
        <div className="flex justify-center items-center">
          <div className='line'></div>
          <i className='fas fa-star text-white mx-5'></i>
          <div className='line'></div>
        </div>
        <div className='text-white pt-5'>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>

  </>
}
