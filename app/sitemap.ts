import type { MetadataRoute } from "next"

const siteUrl = "https://nt-pinturas.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
