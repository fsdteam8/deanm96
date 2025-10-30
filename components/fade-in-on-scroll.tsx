"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface FadeInOnScrollProps {
  children: React.ReactNode
  className?: string
  threshold?: number
}

export function FadeInOnScroll({ children, className = "", threshold = 0.1 }: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100")
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref} className={`opacity-0 transition-opacity duration-1000 ${className}`}>
      {children}
    </div>
  )
}
