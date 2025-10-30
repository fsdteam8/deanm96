import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { DynamicHero } from "@/components/dynamic-hero"
import { ContentSection } from "@/components/content-section"
import { PageCTA } from "@/components/page-cta"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "Products & Services - The Gold Lab",
  description:
    "Explore our comprehensive collection of luxury jewelry including engagement rings, necklaces, bracelets, earrings, custom design, and repair services.",
  openGraph: {
    title: "Products & Services - The Gold Lab",
    description: "Explore our comprehensive collection of luxury jewelry and professional services.",
    url: "https://thegoldlab.com/products",
  },
}

export default function Products() {
  const products = [
    {
      title: "Engagement Rings",
      description:
        "Exquisite engagement rings crafted with precision and elegance. Each ring is custom-designed to capture your unique love story with premium diamonds and precious metals.",
      benefits: ["Custom design options", "Certified diamonds", "Lifetime warranty", "Expert consultation"],
      image: "/assets/images/Engagement Rings.jpg",
    },
    {
      title: "Necklaces & Pendants",
      description:
        "Stunning necklaces featuring premium materials and unique designs. From classic to contemporary, find the perfect piece to express your style.",
      benefits: ["Diverse styles", "Premium materials", "Personalization available", "Gift packaging"],
      image: "/asse",
    },
    {
      title: "Bracelets",
      description:
        "Elegant bracelets that complement any occasion. Our collection ranges from delicate everyday pieces to statement-making designs.",
      benefits: ["Various styles", "Adjustable sizing", "Hypoallergenic options", "Professional polishing"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Earrings",
      description:
        "Sophisticated earrings in various styles and materials. Whether you prefer studs, drops, or hoops, we have the perfect pair for you.",
      benefits: ["Diverse designs", "Secure closures", "Matching sets available", "Sensitive ear friendly"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Custom Design",
      description:
        "Personalized jewelry design tailored to your vision. Work with our master jewelers to create a one-of-a-kind piece that tells your story.",
      benefits: ["Personal consultation", "Design sketches", "Multiple revisions", "Expert guidance"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Jewelry Repair",
      description:
        "Professional restoration and repair services for all types of jewelry. From cleaning to resizing, we handle every detail with care.",
      benefits: ["Expert restoration", "Quick turnaround", "Fair pricing", "Quality guarantee"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <DynamicHero
        title="Our Collections"
        subtitle="Products & Services"
        description="Discover our comprehensive range of luxury jewelry and professional services, each crafted with precision and passion."
        ctaText="Explore Collections"
        ctaLink="#products"
        backgroundVideo="/assets/videos/Our Collections.mp4"
        overlayOpacity={0.5}
      />

      {/* Products Grid */}
      <ContentSection
        title="Our Products & Services"
        description="Handcrafted luxury jewelry and professional services designed for every occasion"
        layout="three-column"
      >
        {products.map((product, idx) => (
          <ScrollAnimation key={idx} delay={idx * 50}>
            <div className="bg-card rounded-lg p-8 border border-border hover-lift hover-glow h-full flex flex-col">
              {product.image && (
                <div className="mb-6 h-48 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-3">{product.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{product.description}</p>

              <div className="space-y-2 mb-6">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 mt-auto"
              >
                Learn More
              </a>
            </div>
          </ScrollAnimation>
        ))}
      </ContentSection>

      {/* Why Our Products */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose Our Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every piece is a testament to our commitment to excellence
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Premium Materials",
                description: "Only the finest gold, diamonds, and gemstones sourced ethically",
              },
              {
                title: "Expert Craftsmanship",
                description: "Master jewelers with decades of experience and precision",
              },
              {
                title: "Certification",
                description: "All diamonds and gemstones come with official certifications",
              },
              {
                title: "Lifetime Support",
                description: "Comprehensive warranty and lifetime maintenance included",
              },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} delay={idx * 100}>
                <div className="bg-card rounded-lg p-6 border border-border text-center hover-lift">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ContentSection
        title="Our Process"
        description="From consultation to creation, we guide you every step of the way"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Meet with our experts to discuss your vision, preferences, and budget.",
              },
              {
                step: "2",
                title: "Design & Selection",
                description: "Browse our collections or work with us to create a custom design.",
              },
              {
                step: "3",
                title: "Craftsmanship",
                description: "Our master jewelers bring your vision to life with precision and care.",
              },
              {
                step: "4",
                title: "Quality Check",
                description: "Every piece undergoes rigorous quality inspection before delivery.",
              },
              {
                step: "5",
                title: "Delivery & Support",
                description: "Receive your piece with certification and lifetime support included.",
              },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} delay={idx * 100}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ContentSection>

      <PageCTA
        title="Ready to Find Your Perfect Piece?"
        description="Schedule a personalized consultation with our jewelry experts and discover the perfect piece for your special moment."
        ctaText="Book Consultation"
        ctaLink="/contact"
        secondaryCtaText="View Pricing"
        secondaryCtaLink="/pricing"
      />

      <Footer />
    </main>
  )
}
