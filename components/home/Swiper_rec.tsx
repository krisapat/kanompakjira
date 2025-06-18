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
  { name: 'กล้วยกวน', price: '35 บาท', image: '/img/swiper_rec/กล้วยกวน.png' },
  { name: 'กล้วยอบม้วน', price: '35 บาท', image: '/img/swiper_rec/กล้วยอบม้วน.png' },
  { name: 'ขนมไข่กรอบ', price: '35 บาท', image: '/img/swiper_rec/ขนมไข่กรอบ.png' },
  { name: '3 ขนุนอบกรอบ', price: '35 บาท', image: '/img/swiper_rec/ขนุนอบกรอบ.png' },
  { name: 'ข้าวเกรียบปลาหมึก', price: '35 บาท', image: '/img/swiper_rec/ข้าวเกรียบปลาหมึก.png' },
  { name: 'คุกกี้สิงคโปร์', price: '35 บาท', image: '/img/swiper_rec/คุกกี้สิงคโปร์.png' },
  { name: 'เค้กไต้หวัน', price: '35 บาท', image: '/img/swiper_rec/เค้กไต้หวัน.png' },
  { name: 'ปลาหวานแผ่น', price: '35 บาท', image: '/img/swiper_rec/ปลาหวานแผ่น.png' },
  { name: 'ปลาหวานเส้น', price: '35 บาท', image: '/img/swiper_rec/ปลาหวานเส้น.png' },
  { name: 'ผัดหมี่โคราช', price: '35 บาท', image: '/img/swiper_rec/ผัดหมี่โคราช.png' },
  { name: 'เวเฟอร์สติ๊ก(โอโจ้)', price: '35 บาท', image: '/img/swiper_rec/เวเฟอร์สติ๊ก(โอโจ้).png' },
  { name: 'อินทผลัม', price: '35 บาท', image: '/img/swiper_rec/อินทผลัม.png' },
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
