import ScrollAnimation from "./scroll-animation"

interface PageCTAProps {
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export function PageCTA({
  title,
  description,
  ctaText = "Book Consultation",
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink,
}: PageCTAProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <ScrollAnimation>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{title}</h2>

          <p className="text-lg text-muted-foreground mb-8">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ctaLink}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 hover-lift"
            >
              {ctaText}
            </a>

            {secondaryCtaText && secondaryCtaLink && (
              <a
                href={secondaryCtaLink}
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors duration-300 hover-lift"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}
