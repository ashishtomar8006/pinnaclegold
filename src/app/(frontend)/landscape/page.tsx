import type { Metadata } from "next"
import { LandscapeHero } from "@/components/amenities/landscape-hero"
import { LandscapeFeatures } from "@/components/amenities/landscape-features"
import { PodiumSection } from "@/components/amenities/podium-section"
import { KidsSection } from "@/components/amenities/kids-section"

export const metadata: Metadata = {
  title: "Landscape | Pinnacle",
  description:
    "Explore the beautiful landscape amenities and natural sanctuaries at Pinnacle luxury residential community.",
}

export default function LandscapePage() {
  return (
    <div className="min-h-screen bg-background pt-8">
      <LandscapeHero />
      <LandscapeFeatures />
      <PodiumSection />
      <KidsSection />
    </div>
  )
}
