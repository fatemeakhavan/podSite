import IUser from "@/app/type";
import Link from "next/link";

export async function generateStaticParams() {
      const posts = await fetch('https://api.github.com/users').then((res) => res.json())
      return posts.map((post :IUser) => ({
        slug: post.login,
      }))
    }
export default async function userInfo({ params }: { params: { slug: string } }){
   const {slug}=params;

   const res=await fetch(`https://api.github.com/users/${slug}`,{next:{revalidate:10}});

   const data= await res.json();

   return (

    <section className="min-h-screen flex items-center justify-center">
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
       <div className="grid justify-items-center mb-3">
           <Link href="/user" className="border border-sky-500 bg-sky-600 text-white shadow-lg px-4 py-3  rounded-lg text-sm mt-2 items-center">back</Link>
       </div>
       </article>  
    </section>

    )
   }