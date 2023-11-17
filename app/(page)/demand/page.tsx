import RevalidateBtn from "@/app/component/revalidateBtn"
async function getData() {
    const res = await fetch('https://clasor-server-acl-r.sakkusb.ir/v1/',{ next: { tags: ['podSite'] } })
    
    if (!res.ok) {
      
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()
   
    return (
        <>
            <p>Timestamp:{data.timestamp}</p>
            <RevalidateBtn/>
        </>

    ) 




 
  }