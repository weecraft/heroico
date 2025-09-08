import { HeroSection } from "@features/landing"
import { generateMetaTags } from "@shared/libs/shared-metadata"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generateMetaTags({
      title: "Stunning UI, UX design inspirations | Heroico",
      description:
        "Explore thousands of websites, landings, web app, mobile app, and desktop inspiration from real world creators",
    }),
  }),
  component: PageComponent,
})

function PageComponent() {
  return (
    <main className="flex flex-col gap-28">
      <HeroSection />
    </main>
  )
}
