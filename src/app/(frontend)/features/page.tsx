import type { Metadata } from "next"
import { FeaturesHero } from "@/components/amenities/features-hero"
import { FeaturesGrid } from "@/components/amenities/features-grid"
import { PrestigeSection } from "@/components/amenities/prestige-section"

export const metadata: Metadata = {
  title: "Features | Pinnacle",
  description: "Discover the architectural excellence and premium features of Pinnacle luxury residential project.",
}

export default function FeaturesPage() {
  return (
    <div className="bg-background ">
      <FeaturesHero />
      <FeaturesGrid />
      <PrestigeSection />
    </div>
  )
}
