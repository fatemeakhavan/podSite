import IUser from "@/app/type";

export async function PUT(request:Request,updatedResource : IUser){
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    console.log(id)
    const res = await fetch(`https://api.github.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedResource),
      });
      const data = await res.json();

      return Response.json(data)

}
