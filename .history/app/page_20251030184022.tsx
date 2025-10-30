import Navigation from "@/components/navigation"
import { DynamicHero } from "@/components/dynamic-hero"
import AnimatedFeatures from "@/components/animated-features"
import LocationMap from "@/components/location-map"
import { PageCTA } from "@/components/page-cta"
import Footer from "@/components/footer"
import { ContentSection } from "@/components/content-section"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import ScrollAnimation from "@/components/scroll-animation"

export default function Home() {
  const testimonials = [
    {
      quote:
        "Visited The Gold Lab and was amazed by their collection and expertise. The team helped me find the perfect piece with personalized guidance. Highly recommended!",
      author: "Sarah Mitchell",
      role: "Visitor",
      image: "/assets/images/avater/sarah.jpg",
    },
    {
      quote:
        "Professional, knowledgeable, and truly passionate about jewelry. The entire team made me feel valued and understood my preferences perfectly.",
      author: "James Chen",
      role: "Client",
      image: "/assets/images/avater/james.jpg",
    },
    {
      quote:
        "My experience at The Gold Lab was exceptional. The team made the entire consultation seamless and enjoyable. From start to finish, everything was perfect.",
      author: "Emma Rodriguez",
      role: "Client",
      image: "/",
    },
    {
      quote:
        "I've visited many jewelry stores, but The Gold Lab stands out. Their commitment to quality and customer satisfaction is unparalleled.",
      author: "Michael Thompson",
      role: "Regular Visitor",
      image: "/placeholder.svg?height=48&width=48",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <DynamicHero
        title="Premium Gold & Jewelry Expertise"
        subtitle="Welcome to The Gold Lab"
        description="Discover exquisite jewelry and premium gold pieces at our physical showroom. Expert consultations, personalized service, and authentic craftsmanship."
        ctaText="Schedule Your Visit"
        ctaLink="/contact"
        backgroundVideo="/assets/videos/Premium Gold & Jewelry Expertise.mp4"
        overlayOpacity={0.4}
      />

      <ContentSection
        title="Why Visit The Gold Lab"
        description="Experience luxury jewelry and premium gold at our physical showroom with expert guidance"
        layout="three-column"
      >
        <FeatureCard
          title="Expert Consultations"
          description="Our specialists provide personalized guidance to help you find the perfect piece that matches your style and preferences."
          image="/assets/images/Expert Consultations.jpg"
        />
        <FeatureCard
          title="Premium Collections"
          description="Browse our curated selection of authentic gold, diamonds, and gemstones sourced from trusted suppliers worldwide."
          image="/assets/images/Premium Collections.jpg"
        />
        <FeatureCard
          title="Personalized Service"
          description="Every visitor receives dedicated attention and custom design consultations tailored to their unique vision and budget."
          image="/assets/images/Personalized Service.jpg"
        />
      </ContentSection>

      <AnimatedFeatures />

      {/* Testimonials Section with Carousel */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">What Our Visitors Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have experienced The Gold Lab
            </p>
          </ScrollAnimation>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <LocationMap />

      <PageCTA
        title="Ready to Explore Our Collections?"
        description="Visit our showroom for a personalized consultation with our jewelry experts and discover premium gold and jewelry pieces."
        ctaText="Schedule Your Visit"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
      />

      <Footer />
    </main>
  )
}
