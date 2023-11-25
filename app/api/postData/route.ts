import IUser from "@/app/type";

  export async function POST(newResource : IUser) {
    const res = await fetch('https://api.github.com/users', {
      method: 'POST',
      body: JSON.stringify(newResource),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }
  