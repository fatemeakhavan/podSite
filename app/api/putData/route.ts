import IUser from "@/app/type";

export async function PUT(id : number, updatedResource : IUser){
    const res = await fetch(`https://api.github.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedResource),
      });
      const data = await res.json();

      return Response.json(data)

}
