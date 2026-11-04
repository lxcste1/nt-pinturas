"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  return <div className="lg:hidden"><button type="button" onClick={() => setOpen((current) => !current)} className="flex size-10 items-center justify-center rounded-full border border-[#111820]/15 text-[#111820] transition-colors hover:border-[#E61537] hover:text-[#E61537]" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>{open && <nav className="absolute inset-x-0 top-full flex flex-col gap-5 border-b border-[#111820]/10 bg-[#f4f1eb] px-6 py-7 text-sm font-medium uppercase tracking-[0.14em] text-[#111820]/70 shadow-[0_18px_40px_-28px_rgba(17,24,32,0.45)]" aria-label="Navegación móvil"><a className="transition-colors hover:text-[#E61537]" onClick={() => setOpen(false)} href="/#inicio">Inicio</a><a className="transition-colors hover:text-[#E61537]" onClick={() => setOpen(false)} href="/#nosotros">Nosotros</a><a className="transition-colors hover:text-[#E61537]" onClick={() => setOpen(false)} href="/#productos">Productos</a><a className="transition-colors hover:text-[#E61537]" onClick={() => setOpen(false)} href="/#contacto">Contacto</a></nav>}</div>
}
