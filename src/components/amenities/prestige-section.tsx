export function PrestigeSection() {
  return (
    <section className="py-24 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img src="/images/hero/banner2.jpg" alt="" className="rounded-2xl h-96" />
          <div className="space-y-8">
            <div>
              <span className="text-sm tracking-widest text-accent uppercase">Prestige Location</span>
              <h2 className="text-4xl font-serif font-light mt-4 text-foreground">At the Heart of Growth</h2>
            </div>
            <div className="space-y-4 text-muted-foreground font-light">
              <p>
                Set at the heart of a thriving growth corridor, surrounded by leading universities including Plaksha
                University and Amity University, regional offices, and IT campuses like Infosys.
              </p>
              <p>
                This rare blend of convenience, intellect, and opportunity creates the perfect environment for modern
                living and professional growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l border-accent pl-4">
                <div className="text-2xl font-serif font-light text-foreground">20+</div>
                <p className="text-sm text-muted-foreground">Educational Institutions</p>
              </div>
              <div className="border-l border-accent pl-4">
                <div className="text-2xl font-serif font-light text-foreground">50+</div>
                <p className="text-sm text-muted-foreground">Corporate Parks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
