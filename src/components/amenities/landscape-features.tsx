import { Card } from "@/components/ui/card"

const landscapes = [
  {
    title: "Accent Water Feature",
    description: "Signature centrepiece with gentle movement and reflective surfaces creating a calming atmosphere.",
    category: "Water Features",
  },
  {
    title: "Aroma Garden",
    description: "Fragrant botanicals and seasonal blooms offering a sensory retreat with therapeutic ambience.",
    category: "Gardens",
  },
  {
    title: "Cascading Waterfall",
    description: "Beautifully engineered waterfall adding dynamic interplay of sound and movement.",
    category: "Water Features",
  },
  {
    title: "Iconic Super Tree",
    description: "Landmark structure providing shade and visual drama in an artistic fusion of nature and design.",
    category: "Architectural",
  },
  {
    title: "Vibrant Flower Garden",
    description: "Lush colourful blooms in artistic patterns creating a picturesque sanctuary for peaceful strolls.",
    category: "Gardens",
  },
  {
    title: "Timber Deck",
    description: "Refined premium deck serving as a multifunctional relaxation platform for sun lounging.",
    category: "Gathering Spaces",
  },
  {
    title: "Mini Forest",
    description: "Dense pocket of greenery bringing nature's wilderness into the community.",
    category: "Nature",
  },
  {
    title: "Reading Corner",
    description: "Quiet, contemplative space nestled within lush landscaping for peaceful moments.",
    category: "Gathering Spaces",
  },
]

export function LandscapeFeatures() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm tracking-widest text-muted-foreground uppercase">Outdoor Living</span>
          <h2 className="text-4xl font-serif font-light mt-2 text-foreground">Curated Natural Spaces</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {landscapes.map((landscape, idx) => (
            <Card key={idx} className="p-6 bg-card border-border hover:shadow-md transition-shadow">
              <p className="text-xs tracking-widest text-accent uppercase mb-3">{landscape.category}</p>
              <h3 className="font-serif font-light text-lg text-foreground mb-2">{landscape.title}</h3>
              <p className="text-sm text-muted-foreground font-light">{landscape.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
