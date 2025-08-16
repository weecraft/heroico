import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "YOUR_TITLE | YOUR_SITE",
    description: "YOUR_SITE_DESCRIPTION",
  })
}

export default function HomePage() {
  return (
    <main className="flex flex-col gap-20">
      <div className="flex flex-col text-center justify-center">
        <p className="font-mono tracking-tight">__Starter site__</p>
        <p className="mt-6 leading-relaxed text-foreground/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          repellat qui vitae laboriosam. A, quae nostrum. Ut aut dicta deleniti
          praesentium nesciunt, laboriosam, mollitia, exercitationem vitae
          asperiores reprehenderit ullam repellat.
        </p>
      </div>
    </main>
  )
}
