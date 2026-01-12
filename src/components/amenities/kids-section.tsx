export function KidsSection() {
  return (
    <section className="py-24 px-6 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif font-light text-2xl text-foreground">Kids Play Area</h3>
            <p className="text-muted-foreground font-light">
              Safe, engaging, and creatively designed play installations encouraging exploration and active outdoor fun.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif font-light text-2xl text-foreground">Crèche Facility</h3>
            <p className="text-muted-foreground font-light">
              Vibrant interiors with trained caregivers providing supervised play, learning activities, and secure
              environment.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif font-light text-2xl text-foreground">Barbecue Pavilion</h3>
            <p className="text-muted-foreground font-light">
              Well-designed pavilion for intimate gatherings and lively weekend cookouts amidst nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
