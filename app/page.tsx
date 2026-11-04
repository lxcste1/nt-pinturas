import { ContactSection, ProductsSection, StatementSection } from "@/components/content-sections"
import { HeroSection } from "@/components/hero-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return <main className="min-h-screen overflow-x-clip bg-[#f4f1eb] text-[#111820]"><Header /><HeroSection /><StatementSection /><ProductsSection /><ContactSection /><Footer /></main>
}
