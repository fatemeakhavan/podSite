import ShowMore from "@/app/component/user/ShowMore";
import { getUserDataAction } from "@/app/actions";


 
export default async function User() {
  const data = await getUserDataAction()
  // console.log("render!!!");
  return (
     <ShowMore data={data}/>
  )
    
}