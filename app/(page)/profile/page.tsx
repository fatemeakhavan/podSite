import IUser from "@/app/type";

async function getData() {
  const res = await fetch('https://api.github.com/users',{cache: 'no-store' });

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
                      <p>{item.login}</p>
                  </>  
              )
          })}
         
      </main>
  )
    
}