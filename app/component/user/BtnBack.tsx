"use client"
import { useRouter } from "next/navigation";
const BtnBack=()=>{
    const route=useRouter();
    const handelClick=()=>{
        route.push(`http://localhost:3000/user`)
    }
    return(
    <div className="grid justify-items-center mb-3">
      <button className="border border-sky-500 bg-sky-600 text-white shadow-lg px-4 py-3  rounded-lg text-sm mt-2 items-center" onClick={handelClick}>back</button>
    
    </div>

    )
}
export default BtnBack;





