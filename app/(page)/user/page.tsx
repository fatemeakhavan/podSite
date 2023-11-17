import IUser from "@/app/type";
import BtnLoad from "@/app/component/user/BtnLoad";

async function getData() {
  const res = await fetch('https://api.github.com/users',{ next: { revalidate: 60 } });

  const data= await res.json();
  // console.log('response', data)
  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }
 
  return data;
}
 
export default async function Main() {
  const data = await getData()
  // console.log("render!!!");
  return (
      <main>

           {data && data.map((item : IUser) =>{
              return (
                  <>
                      <p>{item.node_id}</p>
                  </>  
              )
          })}
           <BtnLoad/>
      
         
      </main>
  )
    
}