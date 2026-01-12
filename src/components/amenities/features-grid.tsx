import { Card } from "@/components/ui/card"

const features = [
  {
    title: "Modern Architecture",
    description:
      "Ultra-opulent façade by legendary Hafeez Contractor with contemporary lines and timeless proportions.",
  },
  {
    title: "Resort-Inspired Landscape",
    description:
      "Lush greenery curated by Site Concepts International enveloping everyday life in verdant tranquility.",
  },
  {
    title: "Triple-Height Lobby",
    description: "Region's first spectacular triple-height entrance setting an unmistakably grand tone.",
  },
  {
    title: "Skywalk Experience",
    description: "Rare privilege of a floating skywalk allowing you to wander as though walking through clouds.",
  },
  {
    title: "Podium Park",
    description: "Expansive elevated park above parking with landscaped gardens, trails, and recreational spaces.",
  },
  {
    title: "High-Speed Elevators",
    description: "Ultra-efficient elevators at 4m/s ensuring swift, silent, and luxurious vertical transit.",
  },
  {
    title: "Duplex Apartments",
    description:
      "Villa-like vertical living spanning two levels with double-height volumes and enhanced natural light.",
  },
  {
    title: "Smart Parking",
    description: "Double basement levels with dedicated guest parking ensuring stress-free vehicular flow.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm tracking-widest text-muted-foreground uppercase">Project Highlights</span>
          <h2 className="text-4xl font-serif font-light mt-2 text-foreground">Distinguished Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="p-8 bg-card border-border hover:border-accent transition-colors">
              <h3 className="text-xl font-serif font-light mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
