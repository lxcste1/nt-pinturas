import type { Metadata } from "next"
import "./globals.css"

const siteUrl = "https://nt-pinturas.vercel.app"
const socialImage = "/nt-pinturas-opengraph.jpg"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NT Pinturas | Pinturas y recubrimientos industriales",
    template: "%s | NT Pinturas",
  },
  description:
    "Distribuidora de pinturas y recubrimientos industriales. Vitospray y Sinteplast para empresas, talleres y fabricantes de Zona Sur y Oeste del Gran Buenos Aires.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "NT Pinturas",
    url: siteUrl,
    title: "NT Pinturas | Pinturas y recubrimientos industriales",
    description:
      "Distribuidora de pinturas y recubrimientos industriales. Vitospray y Sinteplast para empresas, talleres y fabricantes de Zona Sur y Oeste del Gran Buenos Aires.",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "NT Pinturas — Pinturas y recubrimientos industriales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NT Pinturas | Pinturas y recubrimientos industriales",
    description:
      "Distribuidora de pinturas y recubrimientos industriales para empresas, talleres y fabricantes.",
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NT Pinturas",
  url: siteUrl,
  logo: `${siteUrl}/nt-logo.png`,
  image: `${siteUrl}${socialImage}`,
  description:
    "Distribuidora de pinturas y recubrimientos industriales para empresas, talleres y fabricantes.",
  email: "nestoredutello@gmail.com",
  telephone: "+541165118844",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Zona Sur del Gran Buenos Aires",
    },
    {
      "@type": "AdministrativeArea",
      name: "Zona Oeste del Gran Buenos Aires",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+541165118844",
    email: "nestoredutello@gmail.com",
    contactType: "sales",
    availableLanguage: ["Spanish"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pinturas y recubrimientos industriales",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Vitospray — pintura líquida al solvente",
      },
      {
        "@type": "OfferCatalog",
        name: "Sinteplast — pintura en polvo electrostática",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  )
}
