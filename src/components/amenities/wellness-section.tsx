export function WellnessSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-sm tracking-widest text-accent uppercase">Holistic Wellness</span>
              <h2 className="text-4xl font-serif font-light mt-4 text-foreground">Fitness & Wellness Hub</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif font-light text-xl text-foreground mb-2">Fitness Lounge</h3>
                <p className="text-muted-foreground font-light">
                  Professional-grade fitness centre with advanced equipment and dedicated yoga and meditation studios.
                </p>
              </div>
              <div>
                <h3 className="font-serif font-light text-xl text-foreground mb-2">Boxing Arena</h3>
                <p className="text-muted-foreground font-light">
                  Dedicated boxing ring for fitness enthusiasts and training preparation in a climate-controlled
                  setting.
                </p>
              </div>
              <div>
                <h3 className="font-serif font-light text-xl text-foreground mb-2">Multi-Purpose Courts</h3>
                <p className="text-muted-foreground font-light">
                  Versatile green area courts designed for multiple sports and athletic excellence throughout the year.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="bg-amber-400 from-secondary/20 to-accent/10 rounded-2xl h-96"></div> */}
          <div>
            <img src="/images/hero/banner1.jpg" alt="" className="rounded-2xl h-96" />
          </div>
        </div>
      </div>
    </section>
  )
}
