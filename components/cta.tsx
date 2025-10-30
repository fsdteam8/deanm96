"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle } from "lucide-react"

export default function CTA() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Gmail integration will be added here
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "newsletter" }),
      })

      if (response.ok) {
        setEmail("")
        alert("Thank you for subscribing!")
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Find Your Perfect Piece?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Get exclusive access to new collections, special offers, and personalized recommendations
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-input text-foreground placeholder:text-muted-foreground border-border"
          />
          <Button type="submit" disabled={isLoading} className="bg-primary text-primary-foreground hover:bg-primary/90">
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={`https://wa.me/01605860143?text=Hello, I'm interested in your jewelry collection`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
