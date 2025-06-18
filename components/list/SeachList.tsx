// page.tsx หรือ SnackPage.tsx
'use client'

import { useState } from 'react'
import Seach from './Seach'
import List from './List'


export default function SnackPage() {
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string[]>([])
  const [priceFilter, setPriceFilter] = useState<string | undefined>(undefined)

  return (
    <div className='w-full space-y-4'>
      <Seach
        search={search}
        setSearch={setSearch}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      />

      <List
        search={search}
        categoryFilter={categoryFilter}
        priceFilter={priceFilter}
      />

    </div>
  )
}
