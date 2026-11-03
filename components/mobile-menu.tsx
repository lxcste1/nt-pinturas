"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  return <>
    <button className="mobile-trigger" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    {open && <div className="mobile-panel">
      <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a><a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a><a href="#productos" onClick={() => setOpen(false)}>Productos</a><a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
      <a className="quote-button" href="#contacto" onClick={() => setOpen(false)}>Solicitar cotización</a>
    </div>}
  </>
}
