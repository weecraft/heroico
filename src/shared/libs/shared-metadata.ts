import { loadEnv } from "./config"

interface GeneratedMetadataInput {
  title: string
  description: string
  image?: string
}

export function generatedMetadata({
  title,
  description,
  image,
}: GeneratedMetadataInput) {
  const env = loadEnv()

  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        "Landing Page, Inspirations, Web Design, References, Micro Site, Design, App Design, Curated, List, Stuuning Web Inspirations",
    },
    { name: "creator", content: "nyomansunima" },
    { name: "publisher", content: "weecraft" },
    { name: "application-name", content: "Heroico" },
    {
      name: "google-site-verification",
      content: env.public.GOOGLE_VERIFICATION,
    },
    { name: "category", content: "Websites" },
    { name: "generator", content: "React Router" },
    { name: "pinterest-rich-pin", content: "true" },

    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1729709107977/6dabcb40-d18e-48cf-a86b-7b423efb6605.png",
    },
    { name: "og:locale", content: "en_US" },
    { name: "og:type", content: "website" },

    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "nyomansunima" },
    { name: "twitter:creator", content: "@nyomansunima" },
    {
      name: "twitter:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1729709107977/6dabcb40-d18e-48cf-a86b-7b423efb6605.png",
    },
  ]
}
