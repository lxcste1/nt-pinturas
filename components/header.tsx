import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#111820]/10 bg-[#f4f1eb]/95 px-6 py-4 backdrop-blur-md lg:px-12">
      <a href="/#inicio" className="flex items-center gap-3" aria-label="NT Pinturas, inicio">
        <Image src="/nt-logo.png" alt="Logo NT Pinturas" width={58} height={38} className="h-10 w-auto object-contain" priority />
        <span className="text-[0.7rem] font-semibold tracking-[0.35em] text-[#111820]">PINTURAS</span>
      </a>
      <nav className="hidden items-center gap-9 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#111820]/60 lg:flex" aria-label="Navegación principal">
        <a className="text-[#111820] transition-colors hover:text-[#018D8D]" href="/#inicio">Inicio</a>
        <a className="transition-colors hover:text-[#018D8D]" href="/#nosotros">Nosotros</a>
        <a className="transition-colors hover:text-[#018D8D]" href="/#productos">Productos</a>
        <a className="transition-colors hover:text-[#018D8D]" href="/#contacto">Contacto</a>
      </nav>
      <a href="/#contacto" className="hidden items-center gap-2 rounded-full bg-[#FCAC01] px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#111820] transition-transform hover:-translate-y-0.5 lg:flex">
        Solicitar cotización <ArrowUpRight data-icon="inline-end" />
      </a>
      <MobileMenu />
    </header>
  )
}
