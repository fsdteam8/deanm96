"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface StaggerAnimationProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
}

export function StaggerAnimation({ children, className = "", staggerDelay = 100 }: StaggerAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll("[data-stagger]")
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate-in")
            }, index * staggerDelay)
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [staggerDelay])

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div key={index} data-stagger className="opacity-0 -translate-y-10 transition-all duration-700">
          {child}
        </div>
      ))}
    </div>
  )
}
