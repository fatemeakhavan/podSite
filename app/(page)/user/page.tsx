import BtnLoad from "@/app/component/user/BtnLoad";
import BtnMain from "@/app/component/btnMain/BtnMain";
import Link from "next/link";
import ShowMore from "@/app/component/user/ShowMore";

async function getData() {

  const res = await fetch("http://localhost:3000/api/data?top=10&offset=0",{ next: { revalidate: 60 } });

  const data= await res.json();
  // console.log('response', data)
  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }
 
  return data;
}
 
export default async function User() {
  const data = await getData()
  // console.log("render!!!");
  return (
    <>
     
     <ShowMore data={data}/>
         
    </>
   
  )
    
}