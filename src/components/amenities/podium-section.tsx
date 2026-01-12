import { Card } from "@/components/ui/card"

const podiumAreas = [
  {
    title: "Viewing Deck",
    description: "Expansive panoramic vistas capturing breathtaking cityscape and natural horizons.",
    icon: "🌅",
  },
  {
    title: "Plumeria Garden",
    description: "Fragrant frangipani trees releasing sweet tropical aromas in an enchanting garden.",
    icon: "🌸",
  },
  {
    title: "Relaxation Deck",
    description: "Tranquil escape with comfortable seating and shaded lounging areas.",
    icon: "🪑",
  },
  {
    title: "Observation Deck",
    description: "Unobstructed 360-degree views for marvelling at urban tapestry below.",
    icon: "🔭",
  },
  {
    title: "Contemplation Garden",
    description: "Serene minimalist setting with water elements and secluded seating for meditation.",
    icon: "🧘",
  },
  {
    title: "Viewing Cocoon",
    description: "Architectural pavilion offering both privacy and connection to surrounding landscape.",
    icon: "🏛️",
  },
]

export function PodiumSection() {
  return (
    <section className="py-24 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm tracking-widest text-muted-foreground uppercase">Elevated Living</span>
          <h2 className="text-4xl font-serif font-light mt-2 text-foreground">Podium-Level Paradise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podiumAreas.map((area, idx) => (
            <Card key={idx} className="p-8 bg-background border-0 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="font-serif font-light text-lg text-foreground mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground font-light">{area.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
