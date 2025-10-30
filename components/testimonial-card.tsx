import ScrollAnimation from "./scroll-animation"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image?: string
}

export function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <ScrollAnimation>
      <div className="bg-card rounded-lg p-8 border border-border hover-lift hover-glow h-full flex flex-col">
        <div className="mb-4 text-primary text-2xl flex-shrink-0">"</div>

        <p className="text-foreground mb-6 leading-relaxed italic flex-grow">{quote}</p>

        <div className="flex items-center gap-4 flex-shrink-0">
          {image && (
            <img src={image || "/placeholder.svg"} alt={author} className="w-12 h-12 rounded-full object-cover" />
          )}

          <div>
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}
