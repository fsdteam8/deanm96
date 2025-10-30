"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import AppointmentForm from "@/components/appointment-form"
import { DynamicHero } from "@/components/dynamic-hero"
import { PageCTA } from "@/components/page-cta"
import { MessageCircle, Clock } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"contact" | "appointment">("appointment")

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <DynamicHero
        title="Get in Touch"
        subtitle="Contact & Appointments"
        description="Schedule your personalized consultation or send us a message. We're here to help you find your perfect piece."
        ctaText="Book Now"
        ctaLink="#booking"
        backgroundVideo="/assets/videos/contact-hero.mp4"
        overlayOpacity={0.5}
      />

      {/* Quick Contact Info */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "📞", title: "Phone", text: "+1 (555) 123-4567" },
              { icon: "✉️", title: "Email", text: "info@thegoldlab.com" },
              { icon: "📍", title: "Location", text: "123 Luxury Avenue, Premium City" },
              { icon: "⏰", title: "Hours", text: "Mon-Fri: 10AM-6PM" },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} delay={idx * 100}>
                <div className="bg-card p-6 rounded-lg border border-border text-center hover-lift">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="booking" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Forms Section */}
            <ScrollAnimation>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Connect With Us</h2>

                  {/* Tab Navigation */}
                  <div className="flex gap-2 border-b border-border mb-8">
                    <button
                      onClick={() => setActiveTab("appointment")}
                      className={`px-6 py-3 font-semibold transition-all duration-300 ${
                        activeTab === "appointment"
                          ? "text-primary border-b-2 border-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Book Appointment
                    </button>
                    <button
                      onClick={() => setActiveTab("contact")}
                      className={`px-6 py-3 font-semibold transition-all duration-300 ${
                        activeTab === "contact"
                          ? "text-primary border-b-2 border-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Send Message
                    </button>
                  </div>
                </div>

                {activeTab === "appointment" && <AppointmentForm />}
                {activeTab === "contact" && <ContactForm />}
              </div>
            </ScrollAnimation>

            {/* Info & WhatsApp Section */}
            <div className="space-y-8">
              {/* Business Hours */}
              <ScrollAnimation>
                <div className="bg-card rounded-lg p-8 border border-border hover-lift">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Business Hours</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Monday - Friday</p>
                        <p className="text-muted-foreground">10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Saturday</p>
                        <p className="text-muted-foreground">11:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Sunday</p>
                        <p className="text-muted-foreground">Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* WhatsApp Quick Contact */}
              <ScrollAnimation delay={100}>
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary rounded-lg p-8 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <MessageCircle className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Quick Inquiry?</h3>
                      <p className="text-muted-foreground mb-4">
                        Chat with us on WhatsApp for immediate assistance with your jewelry questions.
                      </p>
                      <a
                        href="https://wa.me/1555123456?text=Hello, I'm interested in The Gold Lab services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold hover-lift"
                      >
                        <MessageCircle size={20} />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Trust Signals */}
              <ScrollAnimation delay={200}>
                <div className="bg-card rounded-lg p-8 border border-border hover-lift">
                  <h3 className="text-lg font-bold text-foreground mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">Expert consultation from master jewelers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">Personalized service tailored to your needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">Fast response time - typically within 2 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">Flexible scheduling for your convenience</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Visit Our Showroom</h2>
            <p className="text-lg text-muted-foreground">Experience our collections in person</p>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="bg-card rounded-lg overflow-hidden border border-border h-96 hover-lift">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Final CTA */}
      <PageCTA
        title="Ready to Start Your Journey?"
        description="Whether you're looking for the perfect engagement ring, custom design, or professional repair services, our team is ready to help."
        ctaText="Book Your Consultation"
        ctaLink="#booking"
        secondaryCtaText="View Collections"
        secondaryCtaLink="/products"
      />

      <Footer />
    </main>
  )
}
