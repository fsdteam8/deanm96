"use client"

import { useEffect, useRef } from "react"

interface DynamicHeroProps {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  backgroundVideo?: string
  overlayOpacity?: number
}

export function DynamicHero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundVideo = "/hero-video.mp4",
  overlayOpacity = 0.4,
}: DynamicHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Video autoplay failed, continue without error
      })
    }
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {subtitle && (
          <p className="text-primary text-sm sm:text-base font-semibold tracking-widest uppercase mb-4">{subtitle}</p>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">{title}</h1>

        {description && <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">{description}</p>}

        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  )
}
