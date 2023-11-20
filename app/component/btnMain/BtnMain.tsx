"use client"
import { useRouter } from "next/navigation";
const BtnMain=()=>{
    const route=useRouter();
    const handelClick=()=>{
        route.push(`http://localhost:3000/demand`)
    }
    return(
    <>
      <button className="border border-sky-500 bg-sky-600 text-white shadow-lg p-1 rounded-lg text-sm mt-2" onClick={handelClick}>show More</button>
    
    </>

    )
}
export default BtnMain;