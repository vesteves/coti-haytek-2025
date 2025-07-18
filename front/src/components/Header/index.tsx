'use client'

import { useState, useEffect } from 'react'
import Logo from "../Logo"

interface Category {
  _id: string
  name: string
  position: number
}

export const Header = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('/api/categories')
      const responseJson = await response.json()
      setCategories(responseJson.data.data)
    }

    fetchCategories()
  }, [])


  return (
    <header>
      <nav className="flex items-center justify-between px-4">
        <div>
          <Logo />
        </div>
        <div>
          <ul className="flex gap-4 cursor-pointer">
            {categories && categories.map(category => <li key={category._id}>{category.name}</li>)}
          </ul>
        </div>
        <div>Logoff</div>
      </nav>
    </header>
  )
}

export default Header