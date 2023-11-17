"use client"

import React from 'react';
import testAction from '../actions';

const RevalidateBtn = () => {
  
    const handleRevalidate = () => {
        testAction();
    }
  return (
    <button onClick={handleRevalidate}>
        CLICK ME
   </button>
  )
}

export default RevalidateBtn