"use client"

import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">✨</span>
          </div>
          <span className="text-xl font-serif font-bold text-foreground">Luxe Jewelry</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition">
            About
          </a>
          <a href="#" className="text-foreground hover:text-primary transition">
            Collections
          </a>
          <a href="#" className="text-foreground hover:text-primary transition">
            Services
          </a>
          <a href="#" className="text-foreground hover:text-primary transition">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Book Appointment</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <a href="#" className="block text-foreground hover:text-primary">
              About
            </a>
            <a href="#" className="block text-foreground hover:text-primary">
              Collections
            </a>
            <a href="#" className="block text-foreground hover:text-primary">
              Services
            </a>
            <a href="#" className="block text-foreground hover:text-primary">
              Contact
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Book Appointment</Button>
          </div>
        </div>
      )}
    </header>
  )
}
