"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  return <div className="lg:hidden"><button type="button" onClick={() => setOpen((current) => !current)} className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>{open && <nav className="absolute inset-x-0 top-full flex flex-col gap-5 border-b border-white/10 bg-[#111820] px-6 py-7 text-sm font-medium uppercase tracking-[0.14em] text-white/70" aria-label="Navegación móvil"><a onClick={() => setOpen(false)} href="#inicio">Inicio</a><a onClick={() => setOpen(false)} href="#nosotros">Nosotros</a><a onClick={() => setOpen(false)} href="#productos">Productos</a><a onClick={() => setOpen(false)} href="#contacto">Contacto</a></nav>}</div>
}
