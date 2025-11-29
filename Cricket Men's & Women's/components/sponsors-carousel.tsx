"use client"

const sponsors = ["Hyundai", "Jio", "Dream11", "Paytm", "Byju's", "MPL", "MRF", "Unacademy"]

export function SponsorsCarousel() {
  return (
    <section className="py-12 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 text-foreground">Official Partners</h2>

        <div className="relative overflow-hidden bg-background rounded-lg py-6">
          <div className="flex gap-8 animate-marquee">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-primary/10 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <span className="text-foreground/70 font-semibold whitespace-nowrap">{sponsor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
