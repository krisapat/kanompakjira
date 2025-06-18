'use client'
import { useState } from 'react'
import Image from 'next/image'
import FadeUpWhenVisible from '../animation/FadeUpWhenVisible'
import { X } from 'lucide-react'
import { lists } from '@/utils/list'

type SnackItem = {
  name: string
  image: string
  description: string
  price: number
  category: string[]
}

export default function List({
  search,
  categoryFilter,
  priceFilter,
}: {
  search: string
  categoryFilter: string[]
  priceFilter?: string
}) {
  const [modalSnack, setModalSnack] = useState<SnackItem | null>(null)

  const filteredSnacks = lists.filter(snack => {
    const matchesSearch = snack.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      categoryFilter.length > 0
        ? categoryFilter.every((cat) => snack.category.includes(cat))
        : true
    const matchesPrice = !priceFilter ? true : (
      priceFilter === '<50' ? snack.price < 50 :
        priceFilter === '50-100' ? snack.price >= 50 && snack.price <= 100 :
          priceFilter === '>100' ? snack.price > 100 : true
    )

    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredSnacks.map((snack) => (
          <FadeUpWhenVisible key={snack.name}>
            <div className="rounded-md shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] flex flex-col h-full bg-white dark:bg-black p-4 justify-between">
              {/* รูปภาพ */}
              <div className="relative w-full aspect-square rounded-md overflow-hidden">
                <Image
                  src={snack.image}
                  alt={snack.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* ชื่อขนม */}
              <h2 className="text-lg font-semibold text-center line-clamp-2 mt-4">
                {snack.name}
              </h2>

              <div className="mt-auto flex flex-col items-center gap-2">
                {/* ราคา */}
                <p className="text-center text-md text-[#d72e5e] font-semibold text-lg">
                  {snack.price.toLocaleString()} บาท
                </p>

                {/* ปุ่มดูรายละเอียด */}
                <button
                  onClick={() => setModalSnack(snack)}
                  className="text-sm text-white bg-[linear-gradient(180deg,#ed7f53,#d72e5e)] px-4 py-2 rounded-md shadow-md"
                >
                  ดูรายละเอียดเพิ่มเติม
                </button>
              </div>
            </div>

          </FadeUpWhenVisible>
        ))}

        {filteredSnacks.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground">
            ไม่พบขนมที่คุณค้นหา
          </div>
        )}
      </div>

      {/* Modal แสดงรายละเอียด */}
      {modalSnack && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-zinc-900 rounded-md shadow-xl w-[90%] max-w-md p-6 relative">
            <button
              onClick={() => setModalSnack(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full aspect-square rounded-md overflow-hidden mb-4">
              <Image
                src={modalSnack.image}
                alt={modalSnack.name}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <h2 className="text-2xl font-bold text-center mb-2">{modalSnack.name}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-2">{modalSnack.description}</p>
            <p className="text-center text-lg font-semibold text-[#d72e5e] mb-4">
              {modalSnack.price.toLocaleString()} บาท
            </p>

            <button
              onClick={() => setModalSnack(null)}
              className="w-full bg-[linear-gradient(180deg,#ed7f53,#d72e5e)] hover:bg-[#b4254e] text-white py-2 rounded-md"
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </>
  )
}
