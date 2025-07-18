import { headers } from 'next/headers'

export async function GET() {
  const headersList = await headers()
  const token = headersList.get('authorization')

  const res = await fetch('http://localhost:8000/auth/me',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token || ''
      }
    }
  )
  const data = await res.json()

  return Response.json({ data })
}
