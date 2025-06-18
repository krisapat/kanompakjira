'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  { path: '/', name: 'หน้าหลัก' },
  { path: '/list', name: 'รายการสินค้า' },
  { path: '/about', name: 'เกี่ยวกับเรา' },
];

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[linear-gradient(180deg,#ed7f53,#d72e5e)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-20">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="font-bold text-3xl text-[#fff5f7]">
            ขนมภัคจิรา
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end space-x-4 text-md text-[#fff5f7]">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative px-2 py-1 transition-colors hover:text-white",
                (item.path === '/' ? pathname === '/' : pathname.startsWith(item.path))
                  ? "text-[#d72e5e] hover:text-[#d72e5e] font-bold after:absolute after:inset-x-0 after:bottom-0 after:h-full after:bg-white after:rounded-md after:-z-10 after:transition-all after:duration-300"
                  : "transition-transform hover:scale-105"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="md:hidden text-[#d72e5e]">
          <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="border-white">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={12}
              className="w-[200px] bg-white text-gray-800 rounded-lg shadow-lg py-2"
            >
              <DropdownMenuLabel className="text-center font-semibold">Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)} // ปิดเมนูเมื่อคลิก
                    className={cn(
                      "block px-4 py-2 hover:bg-[#fbe9eb] hover:text-[#d72e5e] transition-colors rounded-md",
                      (item.path === '/' ? pathname === '/' : pathname.startsWith(item.path)) &&
                      "font-semibold text-[#d72e5e] bg-[#fff2f2]"
                    )}
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default Navbar
