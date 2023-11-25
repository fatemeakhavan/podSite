export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const res = await fetch(`https://api.github.com/users/${id}`)
    const user= await res.json()
   
    return Response.json(user)
  }