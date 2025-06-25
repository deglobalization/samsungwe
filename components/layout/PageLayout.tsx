"use client"

import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

interface PageLayoutProps {
  children: ReactNode
  showScrollTop?: boolean
}

export default function PageLayout({ children, showScrollTop = true }: PageLayoutProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg z-40 transition-all duration-300 hover:scale-110"
          onClick={scrollToTop}
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}
