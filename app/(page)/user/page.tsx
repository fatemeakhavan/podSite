import LoadMore from "@/app/component/Btn/loadMoreBtn";
import { getUserDataAction } from "@/app/actions";

export default async function User() {
  const data = await getUserDataAction()
  // console.log("render!!!");
  return (
     <LoadMore data={data}/>
  )
    
}