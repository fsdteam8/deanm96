import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] bg-gradient-to-b from-background via-secondary/30 to-background flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="inline-block mb-6 px-4 py-2 bg-secondary/50 rounded-full border border-border">
          <span className="text-sm font-medium text-foreground">Timeless Elegance Awaits</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight text-balance">
          Discover Your Perfect Piece
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
          Handcrafted gold and jewelry pieces designed to celebrate life's most precious moments. Explore our exclusive
          collections and find the perfect treasure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base">
            Explore Collections
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            Book Consultation
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 relative">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border overflow-hidden">
            <img
              src="/luxury-gold-jewelry-display.jpg"
              alt="Luxury jewelry collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
