import Reordering from "@/components/about/Reorder";
import AnimatedText from "@/components/animation/SplitTextWrapper";
import { Metadata } from "next"
import { FaFacebookF } from "react-icons/fa";
import { SiLine } from "react-icons/si";
export const metadata: Metadata = {
  title: "ขนมภัคจิรา | ช่องทางการติดต่อ",
  description: "ขนมของฝาก ขนมปี๊ป ขนมไทย ผลไม้แปรรูป ของทอดหลากชนิด สดใหม่จากแหล่งผลิต ราคาส่ง ส่งทั่วไทย เหมาะสำหรับซื้อฝากหรือขายต่อ",
};
const page = () => {
  return (
    <main>
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-10 py-25">
        <AnimatedText
          text="เกี่ยวกับเรา"
          className="text-5xl lg:text-6xl text-center font-bold text-gray-800 mb-4"
        />
        <AnimatedText
          text="ขนมภัคจิรา ศูนย์รวมขนมทานเล่นและผลไม้แปรรูปจากทั่วไทย คัดสรรคุณภาพจากโรงงานโดยตรง ในราคาส่งสุดคุ้ม มีบริการขายสินค้าราคาส่งสำหรับร้านค้าและผู้ประกอบการ ถูกจริง ส่งไว พร้อมจัดส่งทั่วประเทศ มั่นใจได้ทั้งเรื่องรสชาติและบริการ"
          className="text-gray-600 text-lg lg:text-xl text-center mb-6"
        />
        <Reordering />
      </div>
      <section id="Icon" className="w-full py-16 px-4 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="relative z-10 bg-[#fff3f5] rounded-md p-10 shadow-2xl">
            <AnimatedText
              text="หมวดหมู่ขนม"
              className="text-5xl lg:text-6xl text-center font-bold text-gray-800 mb-4"
            />            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: '🍌', title: 'ผลไม้แปรรูป', color: 'bg-yellow-100' },
                { icon: '🫙', title: 'ขนมปี๊ป', color: 'bg-blue-100' },
                { icon: '🍟', title: 'ของทอด', color: 'bg-red-100' },
                { icon: '🍭', title: 'ของหวาน', color: 'bg-purple-100' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white flex flex-col items-center justify-center rounded-md p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-4`}>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ff7194] rounded-full animate-pulse-scale"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#ff7194] rounded-full animate-bounce-gentle"></div>
        </div>
      </section>
      <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="relative z-10 bg-white rounded-md p-10 shadow-2xl">
            <AnimatedText
              text="สั่งเลยที่"
              className="text-4xl md:text-5xl text-center font-extrabold mb-10"
            />

            <div className="flex flex-col md:flex-row gap-10">
              {/* Facebook Contact */}
              <a
                href="https://www.facebook.com/kanompakjira4289"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[320px] flex items-center gap-4 bg-blue-600 hover:bg-blue-700 transition-all transform duration-200 hover:scale-105 rounded-md px-8 py-6 shadow-lg"
              >
                <FaFacebookF className="w-10 h-10 text-white" />
                <div>
                  <h3 className="text-white text-xl font-semibold">Facebook</h3>
                  <p className="text-blue-200">ขนมภัคจิรา - Kanom Pakjira</p>
                </div>
              </a>

              {/* Line Contact */}
              <a
                href="https://line.me/ti/p/~0819949699"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[320px] flex items-center gap-4 bg-green-500 hover:bg-green-600 transform transition-all duration-200 hover:scale-105 rounded-md px-8 py-6 shadow-lg"
              >
                <SiLine className="w-10 h-10 text-white" />
                <div>
                  <h3 className="text-white text-xl font-semibold">Line</h3>
                  <p className="text-green-100">ขนมภัคจิรา_4289</p>
                </div>
              </a>
            </div>
            <AnimatedText
              text="ขนมจัดส่งทุกวัน"
              className="text-xl md:text-2xl text-center font-md mt-10"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#ff7194] rounded-full animate-pulse-scale"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#ff7194] rounded-full animate-bounce-gentle"></div>
        </div>
      </section>
    </main>
  )
}
export default page