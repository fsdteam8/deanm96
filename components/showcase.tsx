const collections = [
  {
    name: "Engagement Rings",
    description: "Timeless symbols of love and commitment",
    image: "/elegant-engagement-ring-gold.jpg",
  },
  {
    name: "Necklaces",
    description: "Stunning pieces to elevate any occasion",
    image: "/luxury-gold-necklace.jpg",
  },
  {
    name: "Bracelets",
    description: "Delicate and sophisticated designs",
    image: "/gold-bracelet.png",
  },
]

export default function Showcase() {
  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Collections</h2>
          <p className="text-lg text-foreground/60">Explore our curated selection of exquisite pieces</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-gradient-to-br from-primary/10 to-accent/10 border border-border">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{collection.name}</h3>
              <p className="text-foreground/60">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
