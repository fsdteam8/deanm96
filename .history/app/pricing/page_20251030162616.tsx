import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { DynamicHero } from "@/components/dynamic-hero"
import { ContentSection } from "@/components/content-section"
import { PricingCard } from "@/components/pricing-card"
import { PageCTA } from "@/components/page-cta"
import { FAQItem } from "@/components/faq-item"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "Price List - The Gold Lab",
  description:
    "Transparent pricing for all our jewelry products and services. From engagement rings to custom designs and repairs.",
  openGraph: {
    title: "Price List - The Gold Lab",
    description: "Transparent pricing for all our jewelry products and services.",
    url: "https://thegoldlab.com/pricing",
  },
}

export default function Pricing() {
  const packages = [
    {
      name: "Essential",
      price: "Starting at $500",
      description: "Perfect for everyday elegance",
      features: [
        "Premium materials",
        "Expert craftsmanship",
        "Professional packaging",
        "30-day return policy",
        "Basic warranty",
      ],
      ctaText: "Explore",
      ctaLink: "/contact",
    },
    {
      name: "Premium",
      price: "Starting at $2,000",
      description: "For special occasions",
      features: [
        "All Essential features",
        "Certified gemstones",
        "Custom design consultation",
        "Lifetime warranty",
        "Free maintenance",
        "Priority service",
      ],
      ctaText: "Book Consultation",
      ctaLink: "/contact",
      highlighted: true,
    },
    {
      name: "Luxury",
      price: "Starting at $5,000",
      description: "Bespoke masterpieces",
      features: [
        "All Premium features",
        "Exclusive designs",
        "Personal jeweler assigned",
        "Lifetime support",
        "Insurance documentation",
        "VIP access to new collections",
      ],
      ctaText: "Schedule Meeting",
      ctaLink: "/contact",
    },
  ]

  const priceList = [
    {
      category: "Engagement Rings",
      startPrice: "$2,000",
      description: "Custom designs with certified diamonds",
      details: "Prices vary based on diamond quality, carat weight, and metal choice",
    },
    {
      category: "Necklaces & Pendants",
      startPrice: "$500",
      description: "Various materials and styles",
      details: "From delicate chains to statement pieces in gold, silver, and platinum",
    },
    {
      category: "Bracelets",
      startPrice: "$400",
      description: "Gold, silver, and gemstone options",
      details: "Includes tennis bracelets, bangles, and charm bracelets",
    },
    {
      category: "Earrings",
      startPrice: "$300",
      description: "Studs, hoops, and drops",
      details: "Hypoallergenic options available for sensitive ears",
    },
    {
      category: "Custom Design",
      startPrice: "$1,500",
      description: "Personalized consultation included",
      details: "Work with our master jewelers to create your unique piece",
    },
    {
      category: "Jewelry Repair",
      startPrice: "$50",
      description: "Cleaning, resizing, restoration",
      details: "Professional restoration for all types of jewelry",
    },
  ]

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and offer flexible payment plans for purchases over $5,000. Contact us for financing options.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide with full insurance. International orders typically arrive within 7-10 business days.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all items in original condition. Custom pieces are non-returnable but can be modified.",
    },
    {
      question: "Are your diamonds certified?",
      answer:
        "Yes, all diamonds over 0.5 carats come with official GIA certification. Smaller diamonds are certified upon request.",
    },
    {
      question: "Do you offer warranty coverage?",
      answer:
        "All pieces come with a lifetime warranty covering manufacturing defects. Premium and Luxury packages include lifetime maintenance.",
    },
    {
      question: "Can I customize existing designs?",
      answer:
        "We can modify any design from our collection. Schedule a consultation to discuss your customization ideas.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <DynamicHero
        title="Transparent Pricing"
        subtitle="Price List"
        description="Quality jewelry at fair prices. No hidden fees, just honest pricing for exceptional pieces."
        ctaText="Get a Quote"
        ctaLink="/contact"
        backgroundVideo="/hero-video.mp4"
        overlayOpacity={0.5}
      />

      {/* Pricing Packages */}
      <ContentSection
        title="Our Pricing Packages"
        description="Choose the perfect package for your needs"
        layout="three-column"
      >
        {packages.map((pkg, idx) => (
          <PricingCard
            key={idx}
            name={pkg.name}
            price={pkg.price}
            description={pkg.description}
            features={pkg.features}
            ctaText={pkg.ctaText}
            ctaLink={pkg.ctaLink}
            highlighted={pkg.highlighted}
          />
        ))}
      </ContentSection>

      {/* Detailed Price List */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Detailed Price List</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for all our products and services
            </p>
          </ScrollAnimation>

          <div className="space-y-4">
            {priceList.map((item, idx) => (
              <ScrollAnimation key={idx} delay={idx * 50}>
                <div className="bg-card p-6 rounded-lg border border-border hover-lift hover-glow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{item.category}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                    <span className="text-primary font-bold text-lg whitespace-nowrap ml-4">{item.startPrice}+</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.details}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Pricing */}
      <ContentSection
        title="Why Our Pricing is Fair"
        description="We believe in transparency and value"
        layout="three-column"
      >
        <ScrollAnimation>
          <div className="bg-card rounded-lg p-8 border border-border text-center hover-lift">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-lg font-bold text-foreground mb-2">Premium Quality</h3>
            <p className="text-muted-foreground text-sm">
              We use only the finest materials, which is reflected in our pricing
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <div className="bg-card rounded-lg p-8 border border-border text-center hover-lift">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-lg font-bold text-foreground mb-2">Expert Craftsmanship</h3>
            <p className="text-muted-foreground text-sm">
              Master jewelers with decades of experience ensure exceptional quality
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <div className="bg-card rounded-lg p-8 border border-border text-center hover-lift">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-lg font-bold text-foreground mb-2">No Hidden Fees</h3>
            <p className="text-muted-foreground text-sm">
              What you see is what you pay. Complete transparency in all pricing
            </p>
          </div>
        </ScrollAnimation>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection title="Frequently Asked Questions" description="Common questions about our pricing and services">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <ScrollAnimation key={idx} delay={idx * 50}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </ScrollAnimation>
          ))}
        </div>
      </ContentSection>

      <PageCTA
        title="Ready to Get Started?"
        description="Contact us for a personalized quote or to discuss your jewelry needs. We're here to help you find the perfect piece within your budget."
        ctaText="Request Quote"
        ctaLink="/contact"
        secondaryCtaText="Schedule Consultation"
        secondaryCtaLink="/contact"
      />

      <Footer />
    </main>
  )
}
