import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NT Pinturas | Soluciones en pintura para la industria",
  description: "Pinturas y recubrimientos industriales para empresas, talleres y fabricantes.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>
}
