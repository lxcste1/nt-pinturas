import type { MetadataRoute } from "next"

const siteUrl = "https://nt-pinturas.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/productos/pintura-en-polvo`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/productos/pintura-liquida-industrial`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
