"use client"

import { useState } from "react"
import { Mail, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#tabs" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center rounded-full border-2 border-foreground bg-card px-2 py-2 shadow-sm">
        {/* Logo */}
        <div className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-foreground mr-3">
          <span className="text-sm font-bold font-sans">{"P"}</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium font-sans text-foreground rounded-full transition-colors hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mail button */}
        <a
          href="#contact"
          className="ml-3 flex items-center justify-center w-9 h-9 rounded-full bg-foreground text-primary-foreground transition-transform hover:scale-105"
          aria-label="Contact me"
        >
          <Mail className="w-4 h-4" />
        </a>

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
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium font-sans text-foreground rounded-xl transition-colors hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
