import { HeroSection } from "@features/landing"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Stunning web design inspirations | Heroico",
    description:
      "Stunning web design, websites, landing pages and micro site example from world crafter.",
  })
}

export default function HomePage() {
  return (
    <main className="flex flex-col gap-20">
      <HeroSection />
    </main>
  )
}
