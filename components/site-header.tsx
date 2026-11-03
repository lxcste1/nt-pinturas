import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export function SiteHeader() {
  return (
    <header className="relative z-20 flex items-center justify-between border-b border-white/10 px-6 py-5 lg:px-12">
      <a href="#inicio" className="flex items-center gap-3" aria-label="NT Pinturas, inicio">
        <Image src="/nt-logo.png" alt="Logo NT Pinturas" width={58} height={38} className="h-10 w-auto object-contain" priority />
        <span className="text-[0.7rem] font-semibold tracking-[0.35em] text-white">PINTURAS</span>
      </a>
      <nav className="hidden items-center gap-9 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/60 lg:flex" aria-label="Navegación principal">
        <a className="text-white transition-colors hover:text-white" href="#inicio">Inicio</a>
        <a className="transition-colors hover:text-white" href="#nosotros">Nosotros</a>
        <a className="transition-colors hover:text-white" href="#productos">Productos</a>
        <a className="transition-colors hover:text-white" href="#contacto">Contacto</a>
      </nav>
      <a href="#contacto" className="hidden items-center gap-2 rounded-full bg-[#ffb400] px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#111820] transition-transform hover:-translate-y-0.5 lg:flex">
        Hablemos <ArrowUpRight data-icon="inline-end" />
      </a>
      <MobileMenu />
    </header>
  )
}
