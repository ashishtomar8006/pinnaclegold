import type { Metadata } from "next"
import { AmenitiesHero } from "@/components/amenities/amenities-hero"
import { AmenitiesGrid } from "@/components/amenities/amenities-grid"
import { SportsLounge } from "@/components/amenities/sports-lounge"
import { WellnessSection } from "@/components/amenities/wellness-section"

export const metadata: Metadata = {
  title: "Amenities | Pinnacle",
  description: "Explore world-class amenities and facilities at Pinnacle luxury residential community.",
}

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-background pt-8">
      <AmenitiesHero />
      <AmenitiesGrid />
      <SportsLounge />
      <WellnessSection />
    </div>
  )
}
