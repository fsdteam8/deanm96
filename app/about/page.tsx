import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { DynamicHero } from "@/components/dynamic-hero"
import { ContentSection } from "@/components/content-section"
import { FeatureCard } from "@/components/feature-card"
import { PageCTA } from "@/components/page-cta"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "About The Gold Lab - Our Story & Values",
  description:
    "Learn about The Gold Lab's commitment to premium jewelry craftsmanship, ethical sourcing, and customer satisfaction.",
  openGraph: {
    title: "About The Gold Lab - Our Story & Values",
    description: "Learn about The Gold Lab's commitment to premium jewelry craftsmanship.",
    url: "https://thegoldlab.com/about",
  },
}

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <DynamicHero
        title="Our Story"
        subtitle="About The Gold Lab"
        description="Decades of expertise in luxury jewelry craftsmanship, dedicated to creating timeless pieces that celebrate life's precious moments."
        ctaText="Schedule Consultation"
        ctaLink="/contact"
        backgroundVideo="/assets/videos/About The Gold Lab.mp4"
        overlayOpacity={0.5}
      />

      <ContentSection
        title="Our Journey"
        description="From humble beginnings to becoming a trusted name in luxury jewelry"
      >
        <ScrollAnimation className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The Gold Lab was founded with a simple vision: to create exceptional jewelry that tells stories and
            celebrates life's most precious moments. What started as a small workshop has grown into a premier
            destination for luxury jewelry and personalized services.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With decades of combined expertise, our master jewelers bring unparalleled craftsmanship to every piece. We
            believe that true luxury is not just about materials—it's about the passion, precision, and personal touch
            that goes into creating something truly extraordinary.
          </p>
        </ScrollAnimation>
      </ContentSection>

      {/* Mission & Values */}
      <ContentSection title="Our Mission & Values" description="What drives us every single day" layout="two-column">
        <ScrollAnimation>
          <div className="bg-card rounded-lg p-8 border border-border hover-lift">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To provide exceptional jewelry and services that exceed expectations, combining traditional craftsmanship
              with modern design sensibilities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to creating pieces that not only look beautiful but also stand the test of time, becoming
              cherished heirlooms passed down through generations.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="bg-card rounded-lg p-8 border border-border hover-lift">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Core Values</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-foreground">Premium Quality</p>
                  <p className="text-sm text-muted-foreground">Only the finest materials sourced ethically</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-foreground">Expert Craftsmanship</p>
                  <p className="text-sm text-muted-foreground">Master jewelers with decades of experience</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-foreground">Customer First</p>
                  <p className="text-sm text-muted-foreground">Your satisfaction is our top priority</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <p className="font-semibold text-foreground">Ethical Sourcing</p>
                  <p className="text-sm text-muted-foreground">Responsible and transparent practices</p>
                </div>
              </li>
            </ul>
          </div>
        </ScrollAnimation>
      </ContentSection>

      {/* Why Choose Us */}
      <ContentSection
        title="Why Choose The Gold Lab"
        description="What sets us apart from the rest"
        layout="three-column"
      >
        <FeatureCard
          title="25+ Years Experience"
          description="Our master jewelers bring decades of expertise and passion to every creation, ensuring exceptional quality."
        />
        <FeatureCard
          title="Ethical Sourcing"
          description="We source only conflict-free diamonds and precious metals from trusted suppliers worldwide."
        />
        <FeatureCard
          title="Custom Design"
          description="Work with our experts to create a one-of-a-kind piece that perfectly reflects your vision."
        />
        <FeatureCard
          title="Lifetime Warranty"
          description="Every piece comes with our comprehensive warranty and lifetime maintenance guarantee."
        />
        <FeatureCard
          title="Personal Service"
          description="Dedicated consultants who understand your needs and guide you through every step."
        />
        <FeatureCard
          title="Certification"
          description="All diamonds and gemstones come with official certifications and documentation."
        />
      </ContentSection>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate experts dedicated to creating your perfect piece
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus Sterling",
                role: "Master Jeweler & Founder",
                bio: "With 30+ years in fine jewelry, Marcus leads our design and craftsmanship vision.",
              },
              {
                name: "Elena Rossi",
                role: "Design Director",
                bio: "Elena brings contemporary aesthetics to traditional craftsmanship, creating timeless pieces.",
              },
              {
                name: "David Chen",
                role: "Gemologist & Consultant",
                bio: "David ensures every stone meets our exacting standards for quality and authenticity.",
              },
            ].map((member, idx) => (
              <ScrollAnimation key={member.name} delay={idx * 100}>
                <div className="bg-card rounded-lg p-8 text-center border border-border hover-lift">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-primary">✨</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <ContentSection
        title="Trusted by Thousands"
        description="Industry recognition and customer satisfaction"
        layout="three-column"
      >
        <div className="bg-card rounded-lg p-8 text-center border border-border hover-lift">
          <div className="text-4xl mb-4">⭐</div>
          <p className="text-2xl font-bold text-foreground mb-2">4.9/5 Stars</p>
          <p className="text-muted-foreground">Based on 500+ verified reviews</p>
        </div>
        <div className="bg-card rounded-lg p-8 text-center border border-border hover-lift">
          <div className="text-4xl mb-4">👥</div>
          <p className="text-2xl font-bold text-foreground mb-2">5,000+</p>
          <p className="text-muted-foreground">Happy customers worldwide</p>
        </div>
        <div className="bg-card rounded-lg p-8 text-center border border-border hover-lift">
          <div className="text-4xl mb-4">🏆</div>
          <p className="text-2xl font-bold text-foreground mb-2">Award Winning</p>
          <p className="text-muted-foreground">Recognized for excellence</p>
        </div>
      </ContentSection>

      <PageCTA
        title="Ready to Experience The Gold Lab?"
        description="Schedule a personalized consultation with our jewelry experts and discover why thousands trust us with their most precious moments."
        ctaText="Book Your Consultation"
        ctaLink="/contact"
        secondaryCtaText="View Our Collections"
        secondaryCtaLink="/products"
      />

      <Footer />
    </main>
  )
}
