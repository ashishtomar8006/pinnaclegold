const sports = [
  { name: "Virtual Golf", description: "Championship courses brought to life" },
  { name: "Bowling Alley", description: "Entertainment-rich bowling experience" },
  { name: "Indoor Badminton", description: "Professional courts with perfect lighting" },
  { name: "Indoor Basketball", description: "Regulation-size regulation court" },
  { name: "Indoor Squash", description: "International standard courts" },
  { name: "Snooker & Pool", description: "Finely crafted gaming spaces" },
  { name: "Table Tennis", description: "Dynamic zone for all ages" },
  { name: "Air Hockey", description: "Thrilling fast-paced competition" },
  { name: "Foosball", description: "Classic gameplay for bonding" },
  { name: "Cricket Practice", description: "Green area pitch for training" },
]

export function SportsLounge() {
  return (
    <section className="py-24 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm tracking-widest text-muted-foreground uppercase">Active Living</span>
          <h2 className="text-4xl font-serif font-light mt-2 text-foreground">Sports & Recreation Lounge</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport, idx) => (
            <div
              key={idx}
              className="bg-background p-6 rounded-lg border border-border hover:border-accent transition-colors"
            >
              <h3 className="font-serif font-light text-lg text-foreground mb-2">{sport.name}</h3>
              <p className="text-sm text-muted-foreground">{sport.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
