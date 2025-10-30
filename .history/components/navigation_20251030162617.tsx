"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Services" },
    { href: "/pricing", label: "Price List" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <svg viewBox="0 0 200 200" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="95" fill="none" stroke="#d4af37" strokeWidth="2" />
              <circle cx="100" cy="100" r="85" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
              <rect x="70" y="60" width="60" height="40" rx="4" fill="#d4af37" opacity="0.9" />
              <rect x="72" y="62" width="56" height="8" rx="2" fill="#f4d957" opacity="0.6" />
              <polygon points="100,35 115,55 100,65 85,55" fill="#d4af37" />
              <path
                d="M 75 100 L 80 140 Q 80 145 85 145 L 115 145 Q 120 145 120 140 L 125 100"
                fill="none"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M 82 130 Q 82 135 85 135 L 115 135 Q 118 135 118 130 Z" fill="#d4af37" opacity="0.3" />
            </svg>
            <span className="font-bold text-lg text-foreground hidden sm:inline">The Gold Lab</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Schedule Visit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 mt-4 bg-primary text-primary-foreground font-semibold rounded-lg text-center hover:bg-primary/90 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Schedule Visit
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
