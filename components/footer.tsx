import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">GL</span>
              </div>
              <span className="text-xl font-serif font-bold">The Gold Lab</span>
            </div>
            <p className="text-secondary-foreground/70">Crafting timeless pieces for life's most precious moments.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li>
                <a href="#engagement" className="hover:text-primary transition">
                  Engagement Rings
                </a>
              </li>
              <li>
                <a href="#necklaces" className="hover:text-primary transition">
                  Necklaces
                </a>
              </li>
              <li>
                <a href="#bracelets" className="hover:text-primary transition">
                  Bracelets
                </a>
              </li>
              <li>
                <a href="#earrings" className="hover:text-primary transition">
                  Earrings
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+15551234567" className="hover:text-primary transition">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@thegoldlab.com" className="hover:text-primary transition">
                  info@thegoldlab.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Luxury Avenue, Premium City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2025 The Gold Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
