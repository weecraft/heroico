import { generateMetaTags } from "@shared/libs/shared-metadata"
import { createFileRoute } from "@tanstack/react-router"

function App() {
  return <div className="text-center"></div>
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generateMetaTags({
      title: "YOUR TITLE | SITE NAME",
      description: "YOUR DESCRIPTION",
    }),
  }),
  component: App,
})
