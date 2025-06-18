import AnimatedText from "@/components/animation/SplitTextWrapper";
import SeachList from "@/components/list/SeachList";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ขนมภัคจิรา | รายการสินค้า",
  description: "ขนมของฝาก ขนมปี๊ป ขนมไทย ผลไม้แปรรูป ของทอดหลากชนิด สดใหม่จากแหล่งผลิต ราคาส่ง ส่งทั่วไทย เหมาะสำหรับซื้อฝากหรือขายต่อ",
};
const page = () => {
  return (
    <main>
      <div className="w-full px-2 md:px-10 py-25">
        <AnimatedText
          text="รายการสินค้า"
          className="text-5xl lg:text-6xl text-center font-bold text-gray-800 mb-4"
        />
        <SeachList />
      </div>
    </main>
  )
}
export default page