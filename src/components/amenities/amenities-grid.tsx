import { Card } from "@/components/ui/card"

const amenities = [
  {
    title: "Grand Clubhouse",
    subtitle: "1,00,000+ sq. ft.",
    description:
      "A magnificent world-class social and recreational haven offering expansive leisure, wellness, and hospitality experiences.",
    icon: "🏛️",
  },
  {
    title: "Restaurant & Bar",
    subtitle: "Fine Dining",
    description:
      "Thoughtfully curated dining spaces with gourmet flavours, refined ambiance, and premium beverages for memorable experiences.",
    icon: "🍽️",
  },
  {
    title: "Banquet Hall",
    subtitle: "Event Spaces",
    description:
      "Sophisticated arena designed for grand celebrations and milestone events with elegant decor and seamless hosting.",
    icon: "🎭",
  },
  {
    title: "Luxury Spa",
    subtitle: "Wellness",
    description: "A serene sanctuary where expert therapies and tranquil design rejuvenate the mind, body, and senses.",
    icon: "🧘",
  },
  {
    title: "Premium Salon",
    subtitle: "Beauty & Styling",
    description: "Professional grooming facilities offering premium styling services in a luxurious environment.",
    icon: "💇",
  },
  {
    title: "All-Weather Pool",
    subtitle: "Temperature Controlled",
    description: "Year-round swimming with kids' pool and poolside bar for relaxed social indulgence.",
    icon: "🏊",
  },
]

export function AmenitiesGrid() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, idx) => (
            <Card key={idx} className="p-8 bg-card hover:shadow-lg transition-shadow duration-300 border-0">
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-serif font-light mb-1 text-foreground">{amenity.title}</h3>
              <p className="text-sm text-accent mb-4 uppercase tracking-widest">{amenity.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{amenity.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
