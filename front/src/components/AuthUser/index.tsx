'use client'

import { useEffect, useState } from 'react'

interface User {
  _id: string
  name: string
  email: string
}

const AuthUser = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    const fetchUser = async (token: string) => {
      const response = await fetch('/api/auth/me', {
        headers: {
          authorization: token
        }
      })
      const responseJson = await response.json()

      return setUser(responseJson.data.user)
    }

    if (token) {
      fetchUser(token)
    }
  }, [])
  return <div>{user && (user.email || 'Login')}</div>
}

export default AuthUser