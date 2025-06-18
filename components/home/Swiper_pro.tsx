'use client'

import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import type { Swiper as SwiperType } from 'swiper'

const menuItems = [
  { name: 'ปลาหวานแผ่น', price: '35 บาท', image: '/img/swiper_pro/ปลาหวานแผ่น.png', description: '3 ห่อ 100 บาท' },
  { name: 'ไข่กรอบ', price: '35 บาท', image: '/img/swiper_pro/ไข่กรอบ.png', description: '3 ห่อ 100 บาท' },
  { name: 'ข้าวเกรียบปลาหมึก', price: '35 บาท', image: '/img/swiper_pro/ข้าวเกรียบปลาหมึก.png', description: '3 ห่อ 100 บาท' },
  { name: 'กล้วยอบเนย', price: '35 บาท', image: '/img/swiper_pro/กล้วยอบเนย.png', description: '3 ห่อ 100 บาท' },
  { name: 'มะขามแก้ว', price: '35 บาท', image: '/img/swiper_pro/มะขามแก้ว.png', description: '3 ห่อ 100 บาท' },
]

export default function Swiper_pro() {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  useEffect(() => {
  if (
    swiperInstance &&
    prevRef.current &&
    nextRef.current &&
    typeof swiperInstance.params.navigation !== 'boolean' &&
    swiperInstance.params.navigation
  ) {
    swiperInstance.params.navigation.prevEl = prevRef.current
    swiperInstance.params.navigation.nextEl = nextRef.current

    // ตรวจว่า navigation พร้อมใช้งาน
    if (swiperInstance.navigation) {
      swiperInstance.navigation.destroy()
      swiperInstance.navigation.init()
      swiperInstance.navigation.update()
    }
  }
}, [swiperInstance])

  return (
    <div className="w-[90%] mx-auto relative overflow-visible">
      {/* Navigation Buttons */}
      <Button
        ref={prevRef}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-black shadow-lg transition-colors duration-300 hover:bg-[#d72e5e] hover:text-white focus:outline-none focus:ring-4 focus:ring-black/30 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </Button>

      <Button
        ref={nextRef}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-black shadow-lg transition-colors duration-300 hover:bg-[#d72e5e] hover:text-white focus:outline-none focus:ring-4 focus:ring-black/30 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </Button>

      {/* Swiper */}
      <Swiper
        key={windowWidth}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={20}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {menuItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[320px] w-[90%] rounded-xl bg-white shadow-lg flex flex-col justify-between items-center my-8 mx-auto p-4 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-2 text-center text-gray-800">{item.name}</h3>
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-pink-600 font-bold text-xl">{item.price}</p>
              <p className="text-lg text-gray-500 mb-2">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {menuItems.map((_, idx) => (
          <div
            key={idx}
            className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-black' : 'w-2.5 bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  )
}
