'use client'

import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

const menuItems = [
  { name: 'ปลาหวานแผ่น', price: '35 บาท', image: '/img/swiper_pro/ปลาหวานแผ่น.png', description: '3 ห่อ 100 บาท' },
  { name: 'ไข่กรอบ', price: '35 บาท', image: '/img/swiper_pro/ไข่กรอบ.png', description: '3 ห่อ 100 บาท' },
  { name: 'ข้าวเกรียบปลาหมึก', price: '35 บาท', image: '/img/swiper_pro/ข้าวเกรียบปลาหมึก.png', description: '3 ห่อ 100 บาท' },
  { name: 'กล้วยอบเนย', price: '35 บาท', image: '/img/swiper_pro/กล้วยอบเนย.png', description: '3 ห่อ 100 บาท' },
  { name: 'มะขามแก้ว', price: '35 บาท', image: '/img/swiper_pro/มะขามแก้ว.png', description: '3 ห่อ 100 บาท' },
]

export default function Swiper_pro() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<any>(null)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current
      swiperInstance.params.navigation.nextEl = nextRef.current
      swiperInstance.navigation.destroy()
      swiperInstance.navigation.init()
      swiperInstance.navigation.update()
    }
  }, [swiperInstance, prevRef.current, nextRef.current])

  return (
    <div className="w-[90%] mx-auto relative overflow-visible">
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
      <Swiper
        key={windowWidth}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {menuItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[320px] w-[90%] rounded-md bg-white shadow-lg flex flex-col justify-between items-center my-8 mx-auto p-4 transform transition-transform duration-200 hover:scale-105">

              {/* ชื่อสินค้า */}
              <h3 className="text-2xl font-semibold mb-2 text-center text-gray-800">
                {item.name}
              </h3>

              {/* รูปภาพ */}
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              {/* ราคา */}
              <p className="text-pink-600 font-bold text-xl">{item.price}</p>
              <p className="text-lg text-gray-500 mb-2">
                {item.description}
              </p>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
      <div className="flex justify-center gap-2">
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
