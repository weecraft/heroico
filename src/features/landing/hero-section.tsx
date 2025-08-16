import { Button } from "@shared/components"
import logo from "./logo.webp"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center py-28 container mx-auto">
      <img src={logo} width={75} height={75} alt="Heroico" />

      <h2 className="text-7xl font-bold leading-tight text-center mt-10">
        The world-class
        <br />
        design ideas
      </h2>

      <p className="text-foreground/60 leading-7 text-lg text-center w-5/12 mt-7">
        Discover hundreds of landing pages created by leading companies for your
        design inspiration
      </p>

      <div className="flex items-center gap-3 mt-16">
        <Button variant={"secondary"} size={"lg"}>
          Try beta now
        </Button>
      </div>
    </section>
  )
}
