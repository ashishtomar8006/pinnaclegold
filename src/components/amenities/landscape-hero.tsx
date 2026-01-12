export function LandscapeHero() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-accent/5 via-background to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-sm tracking-widest text-accent uppercase">Natural Sanctuaries</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-light text-foreground text-balance">
            Landscape Amenities
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
            Immerse yourself in meticulously curated gardens, tranquil retreats, and verdant spaces designed for
            peaceful living.
          </p>
        </div>
      </div>
    </section>
  )
}
