export default async function userInfo({ params }: { params: { slug: string } }){

   const res=await fetch(`https://api.github.com/users/${params.slug}`,{ next: { revalidate: 60 } });

   const data= await res.json();

   return (

    <main>
      <p>{data.node_id}</p>
    </main>

    )
   
}


































// "use client"

// import useSWR from "swr";
//   const fetcher = (url : any)=> fetch(url).then(r => r.json())
//   export default function UserInfo({ params }: { params: { slug: any } }) {
//     const {data}= useSWR(`https://api.github.com/users/${params.slug}`,fetcher)

   
//     return (
//         <main>
//              {/* {data && data.map((item : any) =>{
//                 return (
//                     <>
//                       <p>{item.site_admin}</p>
//                     </>  
//                 )
//             })} */}
//            {data &&<p>  {data.events_url}</p>} 
        
           
//         </main>
//     )
      
//   }