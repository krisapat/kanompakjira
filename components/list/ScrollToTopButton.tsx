import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button"; // หรือเปลี่ยน path ตามที่ใช้จริง

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-black shadow-lg transition-colors duration-300 hover:bg-[#d72e5e] hover:text-white focus:outline-none focus:ring-4 focus:ring-black/30 cursor-pointer"
          aria-label="Scroll to Top"
        >
          <ChevronUp size={28} />
        </Button>
      )}
    </>
  );
}
