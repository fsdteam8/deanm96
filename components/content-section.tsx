import React from "react"
import type { ReactNode } from "react"
import ScrollAnimation from "./scroll-animation"

interface ContentSectionProps {
  title: string
  description?: string
  children?: ReactNode
  layout?: "default" | "two-column" | "three-column"
  className?: string
}

export function ContentSection({
  title,
  description,
  children,
  layout = "default",
  className = "",
}: ContentSectionProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollAnimation className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" id="/product#products">{title}</h2>
          {description && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}
        </ScrollAnimation>

        {/* Content Grid */}
        <div
          className={
            layout === "two-column"
              ? "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
              : layout === "three-column"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : ""
          }
        >
          {React.Children.map(children, (child, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              {child}
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
