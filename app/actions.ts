'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function testAction() {
 revalidateTag('podSite')
 return {
    message: "OK"
 }
}