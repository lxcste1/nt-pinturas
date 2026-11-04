import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const siteUrl = "https://nt-pinturas.vercel.app"

export const metadata: Metadata = {
  title: "Pintura en polvo electrostática para metal",
  description:
    "Sinteplast: pintura en polvo electrostática para piezas metálicas. Presentación de 25 kg y colores según carta RAL. Consultá a NT Pinturas por disponibilidad y cotización en Zona Sur y Oeste.",
  alternates: { canonical: "/productos/pintura-en-polvo" },
  openGraph: {
    title: "Pintura en polvo electrostática | NT Pinturas",
    description:
      "Recubrimientos en polvo Sinteplast para talleres y fabricantes metalúrgicos de Zona Sur y Oeste.",
    url: `${siteUrl}/productos/pintura-en-polvo`,
    type: "website",
  },
}

const facts = [
  "Presentación comercial de 25 kg",
  "Colores disponibles según carta RAL",
  "Aplicación mediante pistola electrostática",
  "Curado posterior en horno",
]

export default function PinturaEnPolvoPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#111820]">
      <Header />
      <section className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        <Link href="/#productos" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#018D8D]"><ArrowLeft size={14} /> Todos los productos</Link>
        <p className="mt-12 text-xs font-bold uppercase tracking-[0.24em] text-[#E61537]">Sinteplast / Recubrimiento industrial</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl">Pintura en polvo electrostática para superficies metálicas.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#111820]/65">En NT Pinturas comercializamos pintura en polvo Sinteplast para talleres y fabricantes que trabajan con piezas y estructuras metálicas. Es un sistema de recubrimiento que se aplica con pistola electrostática y requiere un proceso posterior de curado en horno.</p>
        <div className="mt-12 grid gap-4 border-y border-[#111820]/15 py-8 sm:grid-cols-2">
          {facts.map((fact) => <div key={fact} className="flex items-start gap-3 text-sm leading-6"><CheckCircle2 className="mt-0.5 shrink-0 text-[#018D8D]" size={18} />{fact}</div>)}
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">¿Para qué tipo de trabajo se utiliza?</h2>
            <p className="mt-4 leading-7 text-[#111820]/65">La pintura en polvo electrostática está orientada al recubrimiento de piezas metálicas. Puede ser una alternativa para procesos productivos de talleres y fábricas metalúrgicas que cuentan con el equipamiento de aplicación y curado correspondiente.</p>
            <h2 className="mt-10 text-2xl font-semibold tracking-tight">Preparación y aplicación</h2>
            <p className="mt-4 leading-7 text-[#111820]/65">El proceso informado contempla la limpieza y preparación del metal con fosfato, la aplicación con pistola electrostática y el curado posterior en horno. Los parámetros concretos —incluidos temperatura y tiempo— deben confirmarse según el producto y la ficha técnica vigente.</p>
          </div>
          <aside className="h-fit rounded-3xl bg-[#111820] p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCAC01]">Consultas comerciales</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">¿Buscás pintura en polvo?</h2>
            <p className="mt-4 text-sm leading-6 text-white/65">Consultanos por colores, disponibilidad y cotización para tu taller o fábrica.</p>
            <a href="https://wa.me/5491165118844?text=Hola%2C%20quiero%20consultar%20por%20pintura%20en%20polvo%20Sinteplast" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FCAC01] px-5 py-3 text-sm font-semibold text-[#111820]">Consultar por WhatsApp <ArrowUpRight size={16} /></a>
            <p className="mt-5 text-xs text-white/45">Atención en Zona Sur y Oeste del Gran Buenos Aires.</p>
          </aside>
        </div>
        <div className="mt-16 border-t border-[#111820]/15 pt-8">
          <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div><h3 className="font-semibold">¿En qué presentación se comercializa?</h3><p className="mt-2 text-sm leading-6 text-[#111820]/60">La presentación informada es de 25 kg. Consultá disponibilidad y colores.</p></div>
            <div><h3 className="font-semibold">¿Se aplica directamente con rodillo?</h3><p className="mt-2 text-sm leading-6 text-[#111820]/60">No. El sistema descripto requiere pistola electrostática y curado posterior en horno.</p></div>
          </div>
        </div>
        <p className="mt-12 text-sm text-[#111820]/55">También podés conocer nuestra línea de <Link className="font-semibold text-[#018D8D] underline" href="/productos/pintura-liquida-industrial">pintura líquida Vitospray</Link>.</p>
      </section>
      <Footer />
    </main>
  )
}
