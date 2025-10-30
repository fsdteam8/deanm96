import { Sparkles, Shield, Truck, Award } from "lucide-react"

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

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Experience luxury with confidence and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
