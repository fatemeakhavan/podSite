import Link from "next/link"

async function getData() {
  const res = await fetch('https://api.github.com/users', { next: { revalidate: 3600 } })

  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Main() {
  const data = await getData()

  return (
    <section className="min-h-screen flex items-center justify-center  ">
      <article className="border border-gray-300 shadow-lg rounded-lg w-1/2">
        <header >
          <h2 className="text-2xl text-sky-300 font-bold text-center mt-4">Welcome to our website</h2>
        </header>
        <main>
          <div className=" flex flex-col items-center gap-4 mb-2">
            <p className="text-gray-700 text-center font-bold text-xl mt-4">PODSITE USER</p>
            <h3 className="text-xl  mt-3">Login In With</h3>
            <div className="flex   items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 text-white transition cursor-pointer hover:bg-blue-200 hover:text-blue-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 15 15" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.9773 1.46694C14.964 1.26637 14.8319 1.09326 14.642 1.02752C14.452 0.961775 14.2412 1.01618 14.1067 1.16562C13.7611 1.54977 13.3243 1.81009 12.881 1.92878C12.2644 1.35315 11.436 1.00002 10.5256 1.00002C8.57181 1.00002 6.98923 2.58615 6.98923 4.54112V4.98092C3.99799 4.74976 2.39838 2.47748 1.96675 1.3247C1.89698 1.13836 1.72337 1.01112 1.52468 1.00071C1.32598 0.990288 1.14002 1.09867 1.05114 1.27669C0.00441813 3.37338 -0.156858 5.40696 0.603899 7.13863C1.27032 8.65556 2.61055 9.86392 4.51008 10.6645C3.64679 11.2763 2.19379 12 0.500039 12C0.279771 12 0.0854497 12.1442 0.0215445 12.355C-0.0423608 12.5658 0.0392055 12.7935 0.222392 12.9158C1.8465 14.0003 3.54865 14.0001 5.13184 14L5.1803 14C10.041 14 13.98 10.0538 13.98 5.18751V4.70922C14.3434 4.33984 14.6264 3.96173 14.7998 3.4729C14.9932 2.92746 15.0322 2.295 14.9773 1.46694Z"
                    fill="current" />
                </svg>
              </div>
              <div className="flex items-center justify-center  w-12 h-12 rounded-full  bg-blue-500 text-white transition hover:text-blue-400 hover:bg-blue-100 ">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 15 15" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.4741 11.909 14.7263 8 14.9836V9H10V8H8V6.5C8 5.67157 8.67157 5 9.5 5H10V4H9.5C8.11929 4 7 5.11929 7 6.5V8H5V9H7V14.9836C3.09098 14.7263 0 11.4741 0 7.5Z"
                    fill="current" />
                </svg>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full transition text-white bg-red-500 hover:bg-red-200 hover:text-red-500  ">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 15 15" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0 7.5C0 3.35786 3.35786 0 7.5 0C9.59849 0 11.4964 0.862501 12.8571 2.25107L12.1429 2.95097C10.9625 1.74643 9.31889 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14C10.9216 14 13.7257 11.3562 13.9811 8H8V7H15V7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5Z"
                    fill="current" />
                </svg>
              </div>
            </div>
          </div>
          <div className="fmin-h-screen flex items-center justify-center gap-2 mt-5 mb-4">
            <Link href="http://localhost:3000/user" className="border boder-sky-200 bg-sky-500 shadow-lg p-2 rounded-lg text-white">User</Link>
            <Link href="http://localhost:3000/profile" className="border border-red-200 bg-red-400 p-2 rounded-lg shadow-lg text-white">Profile</Link>
            <Link href="http://localhost:3000/demand" className="border border-green-200 bg-green-400  p-2 rounded-lg shadow-lg text-white">Demand</Link>
          </div>
        </main>
      </article>
    </section>
  )

}


