import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-12 lg:pb-32 lg:pt-24">
      <div className="pointer-events-none absolute -right-32 -top-40 size-[34rem] rounded-full bg-[#00a6a6]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1440px] items-end gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-2xl">
          <p className="mb-7 flex items-center gap-3 text-[0.67rem] font-bold uppercase tracking-[0.24em] text-[#ffb400]"><span className="h-px w-9 bg-[#ffb400]" /> Distribución industrial</p>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-7xl lg:text-[6.5rem]">Color que <span className="font-light italic text-[#ffb400]">trabaja.</span></h1>
          <p className="mt-8 max-w-md text-base leading-7 text-white/55">Pinturas y soluciones para superficies que necesitan durar. Asesoramiento directo, productos confiables y una respuesta sin vueltas.</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#productos" className="inline-flex items-center gap-3 rounded-full bg-[#ffb400] px-6 py-4 text-sm font-semibold text-[#111820] transition-transform hover:-translate-y-1">Ver soluciones <ArrowUpRight data-icon="inline-end" /></a>
            <a href="#contacto" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white">Solicitar cotización <ArrowUpRight data-icon="inline-end" /></a>
          </div>
          <p className="mt-12 text-xs uppercase tracking-[0.16em] text-white/35">Zona Sur y Oeste del Gran Buenos Aires</p>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-[2.5rem] bg-[#18222b] lg:min-h-[520px]">
          <Image src="/industrial-painting-hero.png" alt="Aplicación de pintura industrial sobre una superficie metálica" fill className="object-cover opacity-80 mix-blend-screen" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between border-t border-white/20 pt-4 text-[0.65rem] uppercase tracking-[0.18em] text-white/50"><span>NT / 2024</span><span>Superficies que hablan</span></div>
        </div>
      </div>
    </section>
  )
}
