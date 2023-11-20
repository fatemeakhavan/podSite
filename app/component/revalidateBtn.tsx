"use client"

import React from 'react';
import testAction from '../actions';

const RevalidateBtn = () => {
  
    const handleRevalidate = () => {
        testAction();
    }
  return (
    <div className='text-center mb-3'>
      
      <button onClick={handleRevalidate} className="bg-sky-600 text-white p-3 items-center border-solid rounded-lg hover:bg-sky-700 text-center">
        CLICK ME
       </button>


    </div>

   
   
  )
}

export default RevalidateBtn