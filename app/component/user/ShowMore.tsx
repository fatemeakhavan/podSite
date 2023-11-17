"use client"
import useSWR from "swr";

const fetcher = (url : any)=> fetch(url).then(r => r.json())
const ShowMore=()=>{
    const {data} = useSWR("https://api.github.com/users",fetcher)
    return(
        <>
        {data && data.map((item : any) =>{
                return (
                    <>
                      <p>{item.events_url}</p>
                    </>  
                )
            })}
        </>
    )
}
export default ShowMore;