import IUser from "@/app/type";
import Link from "next/link";

async function getData() {
  const res = await fetch('https://api.github.com/users', { cache: 'no-store' });

  const data = await res.json();
  console.log('response', data)
  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return data;
}

export default async function Main() {
  const data = await getData()
  console.log("render!!!");
  return (
    <main className="min-h-screen flex items-center justify-center flex-wrap">

      {data && data.map((item: IUser) => {
        return (
          <>
            <section className="w-80 ml-3 my-3">
              <article className=" bg-white border border-gray-200 rounded-lg shoadow-lg">
                <img src={item.avatar_url} alt="avatar img" className="w-96 items-center rounded-lg" />
                <div className="mt-3 mx-3 overflow-hidden">
                  <p className="text-lg font-bold text-sky-950">Lorem ipsum dolor consectetu cum!</p>
                  <p className="whitespace-pre-line text-gray-500"> Lorem ipsum dolor, sit amet consectetur </p>
                  <p className="whitespace-pre-line  text-gray-500"> Lorem ipsum dolor, sit amet consectetur </p>
                  <span className="text-sky-700 font-bold">name:</span><span className="text-sm text-sky-400">{item.login}</span>
                  <p></p>
                  <span className="text-sky-700 font-bold">github:</span><span className="text-sm text-sky-400 overflow-hidden ">{item.html_url}</span>
                  <div className="border border-sky-500 bg-sky-600 text-white shadow-lg  rounded-lg text-sm mt-2  mb-2 w-1/4 text-center">
                    <Link href={`http://localhost:3000/user/${item.login}`}>
                      Click Me
                    </Link>
                  </div>
                </div>
              </article>
            </section>

          </>
        )
      })}

    </main>
  )

}