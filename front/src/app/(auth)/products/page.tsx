'use client'

import { useEffect, useState } from "react";
interface Category {
  _id: string
  name: string
  position: number,
  products: [{
    _id: string
    name: string
  }]
}

export const CategoryPage = () => {

  const [categories, setCategories] = useState<Category[] | []>([])

  const fetchCategories = async () => {
    const response = await fetch('/api/categories', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

    const data = await response.json()
    setCategories(data.data.data as Category[])
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return <>
    <ul>
      {categories && categories.map((category: Category) => <li key={category._id}>{ category.name }: {category.products && category.products.map(product => product.name).join(', ')}</li>)}
    </ul>
  </>
}

export default CategoryPage