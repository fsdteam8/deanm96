import type React from "react"

interface FeatureCardProps {
  icon?: React.ReactNode
  title: string
  description: string
  image?: string
}

export function FeatureCard({ icon, title, description, image }: FeatureCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 sm:p-8 border border-border hover-lift hover-glow h-full flex flex-col">
      {image && (
        <div className="mb-6 h-48 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {icon && <div className="mb-4 text-primary text-4xl flex-shrink-0">{icon}</div>}

      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{title}</h3>

      <p className="text-muted-foreground leading-relaxed flex-grow">{description}</p>
    </div>
  )
}
