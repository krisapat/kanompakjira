'use client'

import * as motion from 'motion/react-client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { Transition } from 'motion'

export default function Reordering() {
  const [order, setOrder] = useState(initialOrder)

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 2000)
    return () => clearTimeout(timeout)
  }, [order])

  return (
    <ul className="grid gap-4 w-full max-w-screen-md px-4 mx-auto grid-cols-2 md:grid-cols-4">
      {order.map((imageUrl) => (
        <motion.li
          key={imageUrl}
          layout
          transition={spring}
          className="aspect-square relative rounded-md overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt="snack"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
            priority={false} // true ถ้าอยากโหลดภาพแรกเร็ว
          />
        </motion.li>
      ))}
    </ul>
  )
}

const initialOrder: string[] = [
  '/img/slider/1.png',
  '/img/slider/2.png',
  '/img/slider/3.png',
  '/img/slider/4.png',
]

function shuffle([...array]: string[]): string[] {
  return array.sort(() => Math.random() - 0.5)
}

const spring: Transition = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
}
