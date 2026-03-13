"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Menu, X, MessageCircle } from "lucide-react"
import { WeChatDialog } from "@/components/wechat-dialog"

const navLinks = [
  { label: "首页", href: "/#hero" },
  { label: "关于我", href: "/#who-am-i" },
  { label: "我的经历", href: "/#roadmap" },
  { label: "作品集", href: "/#portfolio" },
  { label: "联系我", href: "/#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false)
      }
    }
    window.addEventListener("keydown", handleEsc)

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link, handle smooth scrolling manually
    if (href.startsWith("/#")) {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "auto" })
      } else {
        // Fallback for cross-page navigation if needed, though we're mostly SPA
        window.location.href = href
      }
      setMobileOpen(false)
    }
  }

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center rounded-full border-[3px] border-foreground bg-card px-2 py-2 shadow-[0_0_0_0_rgba(0,0,0,0),0_0_0_0_rgba(0,0,0,0),0_0_0_0_rgba(0,0,0,0),0_4px_12px_0_rgba(0,0,0,0.15),0_4px_0_0_rgba(0,0,0,0.7)]">
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 text-sm font-medium font-sans text-foreground rounded-full transition-colors hover:bg-secondary focus:bg-secondary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* WeChat button */}
        <WeChatDialog>
          <button
            className="ml-3 flex items-center justify-center w-9 h-9 rounded-full bg-foreground text-primary-foreground transition-transform hover:scale-105 cursor-pointer"
            aria-label="WeChat"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </WeChatDialog>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-2 flex md:hidden items-center justify-center w-9 h-9 rounded-full hover:bg-secondary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 flex flex-col rounded-2xl border-2 border-foreground bg-card p-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-3 text-sm font-medium font-sans text-foreground rounded-xl transition-colors hover:bg-secondary focus:bg-secondary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
