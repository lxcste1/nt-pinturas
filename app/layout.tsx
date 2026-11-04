import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NT Pinturas | Soluciones en pintura para la industria",
  description: "Pinturas y recubrimientos industriales para empresas, talleres y fabricantes.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "NT Pinturas",
    title: "NT Pinturas | Soluciones en pintura para la industria",
    description: "Pinturas y recubrimientos industriales para empresas, talleres y fabricantes.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "NT Pinturas — Pinturas y recubrimientos industriales" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NT Pinturas | Soluciones en pintura para la industria",
    description: "Pinturas y recubrimientos industriales para empresas, talleres y fabricantes.",
    images: ["/opengraph-image"],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>
}
