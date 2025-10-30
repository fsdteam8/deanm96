"use client"

import { useState } from "react"

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors duration-300"
      >
        <h3 className="text-lg font-semibold text-foreground">{question}</h3>
        <span className={`text-primary text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>

      {isOpen && <div className="pb-6 text-muted-foreground leading-relaxed">{answer}</div>}
    </div>
  )
}
