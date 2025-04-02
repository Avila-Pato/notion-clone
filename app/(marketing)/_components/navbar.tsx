"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils"

const Navbar = () => {
const scrolled = useScrollTop()

  return (
    <div className={cn(
      "z-50 bg-background fixed top-0 flex items-center w-full",
      scrolled ? "border-b shadow-2xl" : ""
    )}>
      Navbar
    </div>
  )
}

export default Navbar