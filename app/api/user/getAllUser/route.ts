export async function GET() {
  const res = await fetch('https://api.github.com/users')
  const data = await res.json()
 
  return Response.json({ data })
}