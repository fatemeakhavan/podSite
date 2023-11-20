import BtnMain from "../component/btnMain/BtnMain"
async function getData() {
    const res = await fetch('https://api.github.com/users',{ next: { revalidate: 3600 } })

    if (!res.ok) {
      
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Main() {
    const data = await getData()
   
    return (
      <section className=" container mx-auto mt-8 min-w-fit max-w-6xl border border-gray-200 shadow-lg rounded-lg">
        <header>
          <p className="text-gray-700 text-center font-bold text-2xl ">POD USER</p>
        </header>
        
         
     
      </section>
    )
      
  }


 