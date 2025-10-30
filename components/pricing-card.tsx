import ScrollAnimation from "./scroll-animation"

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  ctaText?: string
  ctaLink?: string
  highlighted?: boolean
}

export function PricingCard({
  name,
  price,
  description,
  features,
  ctaText = "Get Started",
  ctaLink = "/contact",
  highlighted = false,
}: PricingCardProps) {
  return (
    <ScrollAnimation>
      <div
        className={`rounded-lg p-8 transition-all duration-300 h-full flex flex-col ${
          highlighted
            ? "bg-primary text-primary-foreground shadow-2xl scale-105 hover-lift"
            : "bg-card text-foreground border border-border hover-lift hover-glow"
        }`}
      >
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className={`mb-6 ${highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{description}</p>

        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={ctaLink}
          className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors duration-300 ${
            highlighted
              ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          {ctaText}
        </a>
      </div>
    </ScrollAnimation>
  )
}
