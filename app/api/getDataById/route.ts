import IUser from "@/app/type";
export async function GET(id:number){
    const res = await fetch(`https://api.github.com/users/${id}`)
    const data: IUser[] = await res.json()
    return Response.json(data)


}
