"use client"

export default function LocationMap() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Visit Our Showroom</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Experience our exquisite collection in person at our premium location. Our expert team is ready to help
              you find the perfect piece.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">123 Luxury Avenue, Premium City, PC 12345</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 10am - 6pm
                  <br />
                  Saturday: 11am - 5pm
                  <br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                <p className="text-muted-foreground">
                  Phone: +1 (555) 123-4567
                  <br />
                  Email: info@thegoldlab.com
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-border h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
