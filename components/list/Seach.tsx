'use client'

import { Undo2, Filter, Tags } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
const categories = ['ผลไม้แปรรูป', 'ขนมปี๊ป', 'ของทอด', 'ของหวาน']
export default function Seach({
  search,
  setSearch,
  setCategoryFilter,
  setPriceFilter,
  categoryFilter,
  priceFilter,
}: {
  search: string
  setSearch: (val: string) => void
  setCategoryFilter: (val: string[]) => void
  setPriceFilter: (val?: string) => void
  categoryFilter: string[]
  priceFilter?: string
}) {
  return (
    <div className="sticky top-22 z-40 px-4">
      <div className="w-full max-w-4xl mx-auto flex flex-wrap gap-4 justify-center px-6 py-4 rounded-xl backdrop-blur-md bg-white/30 shadow-lg border border-white/30">
        <Input
          placeholder="ค้นหารายการขนม..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm bg-white"
        />

        <Button asChild variant="outline" className="hidden md:flex">
          <Link href="/">
            <Undo2 className="w-4 h-4 mr-2" /> กลับหน้าแรก
          </Link>
        </Button>

        {/* Dropdown หมวดหมู่ */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Tags className="w-4 h-4 mr-2" /> หมวดหมู่
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>เลือกหมวดหมู่</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categories.map((category) => (
              <DropdownMenuCheckboxItem
                key={category}
                checked={categoryFilter.includes(category)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setCategoryFilter([...categoryFilter, category])
                  } else {
                    setCategoryFilter(categoryFilter.filter((c) => c !== category))
                  }
                }}
              >
                {category}
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={categoryFilter.length === 0}
              onCheckedChange={() => setCategoryFilter([])}
            >
              ทั้งหมด
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Dropdown ราคา */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" /> กรองราคา
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>เลือกราคาสินค้า</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {[
              { label: 'ต่ำกว่า 50 บาท', value: '<50' },
              { label: '50 - 100 บาท', value: '50-100' },
              { label: 'มากกว่า 100 บาท', value: '>100' }
            ].map((item) => (
              <DropdownMenuItem
                key={item.value}
                onClick={() => setPriceFilter(item.value)}
                className={priceFilter === item.value ? 'font-semibold text-[#d72e5e] bg-[#fff2f2]' : ''}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem
              onClick={() => setPriceFilter(undefined)}
              className={!priceFilter ? 'font-semibold text-[#d72e5e] bg-[#fff2f2]' : ''}
            >
              ทั้งหมด
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>

  )
}
