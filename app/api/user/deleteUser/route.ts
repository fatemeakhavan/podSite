export async function DELETE(request:Request){
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const res =await fetch (`https://api.github.com/users/${id}`,{
        method : 'DELETE',
    });
    const data =await res.json()

    return Response.json(data)
}





