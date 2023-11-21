import RevalidateBtn from "../../component/Btn/revalidateBtn";
async function getData() {
  const res = await fetch('https://clasor-server-acl-r.sakkusb.ir/v1/', { next: { tags: ['podSite'] } })

  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function page() {
  const data = await getData()

  return (
    <section className="min-h-screen items-center flex justify-center text-center">
      <article className=" border border-sky-500 bg-sky-200 shadow-lg p-5">
        <header className="flex mt-1 mb-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-sky-500">
            <path
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
          </svg>
          <h3 className="text-lg font-medium">This is a info alert</h3>
        </header>
        <div>
          <span className="text-sky-800 text-lg font-bold">Timestamp:</span><span className="text-blue-500 text-lg text-center">{data.timestamp}</span>
        </div>
          <RevalidateBtn />
      </article>
    </section>

  )





}