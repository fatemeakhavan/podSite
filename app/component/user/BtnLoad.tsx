"use client"
import { useState } from "react";
import ShowMore from "./ShowMore";


const BtnLoad=()=>{
  const[isTrue,setIsTrue]=useState<boolean>(false);

  const handleClick = () => {
    setIsTrue(true);
  };
    return(
        <>
          {isTrue=== false ?
              <button className="btn bg-red-400 p-3 rounded-full border-solid" onClick={handleClick}>LoadMore</button>
              :
              <ShowMore/>
          }
        </>
    )
}
export default BtnLoad;