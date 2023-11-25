export async function DELETE(id:number){
    const res =await fetch (`https://api.github.com/users/${id}`,{
        method : 'DELETE',
    });
    const data =await res.json()

    return Response.json(data)
}





