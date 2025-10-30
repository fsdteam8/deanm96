"use client"

import { Sparkles, Shield, Truck, Award } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Handcrafted with the finest materials and attention to detail",
  },
  {
    icon: Shield,
    title: "Certified Authentic",
    description: "All pieces come with authenticity certificates and guarantees",
  },
  {
    icon: Truck,
    title: "Secure Delivery",
    description: "Insured shipping and safe packaging for your precious items",
  },
  {
    icon: Award,
    title: "Expert Consultation",
    description: "Personal guidance from our jewelry specialists",
  },
]

export default function AnimatedFeatures() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Experience luxury with confidence and expertise
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollAnimation key={index} className={`delay-${index * 100}`}>
                <div className="p-8 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-foreground/60">{feature.description}</p>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}
