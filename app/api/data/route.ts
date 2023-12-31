import IUser from "@/app/type"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const offset = +searchParams.get('offset')!
    const top = +searchParams.get('top')!
    const res = await fetch('https://api.github.com/users')
    const data: IUser[] = await res.json()

    const list = data.slice(offset, offset + top)
    const totalPage = data.length;
   
    return Response.json({
      list,
      totalPage
    })
  }