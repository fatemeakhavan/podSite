import BtnUser from "@/app/component/user/BtnBack";
import IUser from "@/app/type";

export const fallback = false;

export async function generateStaticParams() {
      const posts = await fetch('https://api.github.com/users').then((res) => res.json())
     
      return posts.map((post :IUser) => ({
        id: post.login,
      }))
    }

export default async function userInfo({ params }: { params: { id: string } }){
   const {id}=params;

   const res=await fetch(`https://api.github.com/users/${id}`,{next:{revalidate:10}});

   const data= await res.json();

   return (

    <section className="container mx-auto mt-64 grid justify-items-center">
        <article className=" bg-white border border-gray-200 rounded-lg shoadow-lg">
              <img src={data.avatar_url} alt="avatar img" className="w-96 items-center rounded-lg"/>
        <div className="mt-3 mx-3 overflow-hidden">
              <p className="text-lg font-bold text-sky-950">Lorem ipsum dolor consectetu cum!</p>
              <p className="whitespace-pre-line text-gray-500"> Lorem ipsum dolor, sit amet consectetur </p>
              <p className="whitespace-pre-line  text-gray-500"> Lorem  ipsum dolor consectetu onsectetur </p>
              <p className="whitespace-pre-line  text-gray-500"> Lorem ipsum dolor, sit amet consectetur </p>
              <span className="text-sky-700 font-bold">name:</span><span className="text-sm text-sky-400">{data.login}</span>
              <p></p>
             <span className="text-sky-700 font-bold">github:</span><span className="text-sm text-sky-400 overflow-hidden ">{data.html_url}</span>
       </div> 
         <BtnUser/>
       </article>  
    </section>

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