import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"

const siteUrl = "https://nt-pinturas.vercel.app"

export const metadata: Metadata = {
  title: "Pintura líquida industrial Vitospray",
  description:
    "Conocé Vitospray, pintura líquida al solvente de fabricación nacional. Presentaciones de 4 y 20 litros, aplicación con rodillo o soplete. Consultá a NT Pinturas.",
  alternates: { canonical: "/productos/pintura-liquida-industrial" },
  openGraph: {
    title: "Pintura líquida industrial Vitospray | NT Pinturas",
    description:
      "Pintura al solvente Vitospray para mantenimiento y renovación de superficies. Consultas comerciales en Zona Sur y Oeste.",
    url: `${siteUrl}/productos/pintura-liquida-industrial`,
    type: "website",
  },
}

const facts = [
  "Pintura líquida al solvente de fabricación nacional",
  "Presentaciones de 4 y 20 litros",
  "Aplicación con rodillo o soplete",
  "Tiempo de secado informado: 15 a 20 minutos",
]

export default function PinturaLiquidaIndustrialPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#111820]">
      <header className="flex items-center justify-between border-b border-[#111820]/10 px-6 py-5 lg:px-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.2em]">NT Pinturas</Link>
        <Link href="/#contacto" className="text-xs font-semibold uppercase tracking-wider hover:text-[#018D8D]">Contacto <ArrowUpRight className="inline" size={14} /></Link>
      </header>
      <section className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        <Link href="/#productos" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#018D8D]"><ArrowLeft size={14} /> Todos los productos</Link>
        <p className="mt-12 text-xs font-bold uppercase tracking-[0.24em] text-[#018D8D]">Vitospray / Pintura líquida</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl">Pintura líquida industrial al solvente.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#111820]/65">Vitospray es una línea de pintura líquida al solvente de fabricación nacional que comercializa NT Pinturas. Está orientada a trabajos de mantenimiento y renovación de superficies en entornos de trabajo e instalaciones productivas.</p>
        <div className="mt-12 grid gap-4 border-y border-[#111820]/15 py-8 sm:grid-cols-2">
          {facts.map((fact) => <div key={fact} className="flex items-start gap-3 text-sm leading-6"><CheckCircle2 className="mt-0.5 shrink-0 text-[#018D8D]" size={18} />{fact}</div>)}
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Aplicación</h2>
            <p className="mt-4 leading-7 text-[#111820]/65">Según la información comercial disponible, Vitospray puede aplicarse con rodillo o soplete. La preparación de la superficie, la compatibilidad con el material y las condiciones de aplicación deben verificarse para cada trabajo antes de comenzar.</p>
            <h2 className="mt-10 text-2xl font-semibold tracking-tight">Presentaciones y secado</h2>
            <p className="mt-4 leading-7 text-[#111820]/65">Se comercializa en envases de 4 y 20 litros. El tiempo de secado informado es de 15 a 20 minutos; consultanos para confirmar las condiciones y el tipo de secado contemplado para el producto específico.</p>
          </div>
          <aside className="h-fit rounded-3xl bg-[#111820] p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCAC01]">Consultas comerciales</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">¿Necesitás pintura líquida?</h2>
            <p className="mt-4 text-sm leading-6 text-white/65">Escribinos para consultar presentaciones, disponibilidad y cotización.</p>
            <a href="https://wa.me/5491165118844?text=Hola%2C%20quiero%20consultar%20por%20pintura%20liquida%20Vitospray" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FCAC01] px-5 py-3 text-sm font-semibold text-[#111820]">Consultar por WhatsApp <ArrowUpRight size={16} /></a>
            <p className="mt-5 text-xs text-white/45">Atención en Zona Sur y Oeste del Gran Buenos Aires.</p>
          </aside>
        </div>
        <div className="mt-16 border-t border-[#111820]/15 pt-8">
          <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div><h3 className="font-semibold">¿En qué tamaños viene?</h3><p className="mt-2 text-sm leading-6 text-[#111820]/60">Las presentaciones informadas son de 4 y 20 litros.</p></div>
            <div><h3 className="font-semibold">¿Cómo se aplica?</h3><p className="mt-2 text-sm leading-6 text-[#111820]/60">La aplicación informada es con rodillo o soplete. Confirmá la preparación y compatibilidad según la superficie.</p></div>
          </div>
        </div>
        <p className="mt-12 text-sm text-[#111820]/55">También podés conocer nuestra línea de <Link className="font-semibold text-[#018D8D] underline" href="/productos/pintura-en-polvo">pintura en polvo electrostática Sinteplast</Link>.</p>
      </section>
      <footer className="bg-[#111820] px-6 py-8 text-xs text-white/55 lg:px-12"><Link href="/">NT Pinturas</Link> · Distribución industrial · <Link href="/#contacto" className="underline">Contacto</Link></footer>
    </main>
  )
}
