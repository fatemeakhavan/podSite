'use server'

// ----------action for Demand-revalidate (revalidateTag)-----------
 
import { revalidateTag } from 'next/cache'
 
export default async function testAction() {
 revalidateTag('podSite')
 return {
    message: "OK"
 }
}

// -------------action for get users---------------

export const getUserDataAction = async(top=10, offset=0) =>{

   const res = await fetch(`http://localhost:3000/api/data?top=${top}&offset=${offset}`,{ next: { revalidate: 60 } });
 
   const data= await res.json();
  
   if (!res.ok) {
     
     throw new Error('Failed to fetch data')
   }
  
   return data;
 }