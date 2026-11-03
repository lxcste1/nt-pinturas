import { ContactSection, ProductsSection, StatementSection } from "@/components/content-sections"
import { HeroSection } from "@/components/hero-section"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return <main className="min-h-screen overflow-hidden bg-[#111820] text-white"><SiteHeader /><HeroSection /><StatementSection /><ProductsSection /><ContactSection /><footer className="flex flex-col justify-between gap-4 bg-[#111820] px-6 py-7 text-[0.65rem] uppercase tracking-[0.18em] text-white/35 sm:flex-row lg:px-12"><span>NT Pinturas / Distribución industrial</span><span>Superficies que hablan.</span></footer></main>
}
