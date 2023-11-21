"use client"

import React from 'react';
import testAction from '../../actions';
import Link from 'next/link';

const RevalidateBtn = () => {
    const handleRevalidate = () => {
        testAction();
    }
  return (
    <div className=' items-center flex justify-center text-center gap-3 mt-5'>
      <button onClick={handleRevalidate} className="bg-sky-600 text-white text-sm  border-solid rounded-lg hover:bg-sky-700 text-center  p-2">
        CLICK ME
       </button>
       <Link href="/" className="border border-sky-700 rounded-lg shadow-lg bg-white text-sky-700 text-sm p-2">
         Back
       </Link>

   </div>
  )
}
export default RevalidateBtn