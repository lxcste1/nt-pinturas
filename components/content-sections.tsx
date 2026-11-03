import { ArrowUpRight, Mail, Phone } from "lucide-react"

const products = [
  {
    number: "01",
    brand: "Vitospray",
    title: "Pintura líquida de secado rápido",
    text: "Pintura al solvente de fabricación nacional, orientada a trabajos de mantenimiento, renovación y protección de superficies en entornos industriales.",
    details: ["Presentaciones de 4 y 20 litros", "Aplicación con rodillo o soplete", "Secado informado: 15 a 20 minutos"],
    tone: "text-[#018D8D]",
  },
  {
    number: "02",
    brand: "Sinteplast",
    title: "Pintura en polvo electrostática",
    text: "Recubrimiento para piezas y superficies metálicas, aplicado con pistola electrostática y curado posterior en horno.",
    details: ["Presentación de 25 kg", "Colores según carta RAL", "Orientada a talleres y fábricas metalúrgicas"],
    tone: "text-[#E61537]",
  },
]

export function StatementSection() {
  return (
    <section id="nosotros" className="mx-auto grid max-w-[1440px] gap-8 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-36">
      <p className="text-[0.67rem] font-bold uppercase tracking-[0.24em] text-[#018D8D]">NT Pinturas / Nosotros</p>
      <div>
        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#111820] sm:text-6xl">
          Pinturas y recubrimientos para el trabajo industrial.
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-8 text-[#111820]/55">
          Somos una distribuidora de pinturas orientada a empresas, talleres y establecimientos productivos. Acercamos productos para distintas necesidades de mantenimiento y recubrimiento, con atención comercial personalizada.
        </p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#111820]/45">
          Atendemos principalmente a clientes de Zona Sur y Oeste del Gran Buenos Aires.
        </p>
      </div>
    </section>
  )
}

export function ProductsSection() {
  return (
    <section id="productos" className="mx-auto max-w-[1440px] px-6 pb-28 lg:px-12">
      <div className="mb-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p className="text-[0.67rem] font-bold uppercase tracking-[0.24em] text-[#018D8D]">Nuestro catálogo</p>
          <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.05em] text-[#111820] sm:text-6xl">
            Productos para <span className="font-light italic text-[#111820]/45">la industria.</span>
          </h2>
        </div>
        <p className="max-w-sm text-base leading-7 text-[#111820]/45">
          Dos líneas de productos para acompañar las necesidades de talleres, fábricas y empresas.
        </p>
      </div>
      <div className="divide-y divide-[#111820]/10 border-y border-[#111820]/10">
        {products.map((product) => (
          <article className="group grid gap-5 py-9 sm:grid-cols-[5rem_1fr_auto] sm:items-start sm:gap-8" key={product.number}>
            <span className={`pt-1 text-sm font-semibold ${product.tone}`}>{product.number}</span>
            <div>
              <p className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${product.tone}`}>{product.brand}</p>
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#111820] sm:text-3xl">{product.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#111820]/55">{product.text}</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {product.details.map((detail) => (
                  <li key={detail} className="text-xs leading-5 text-[#111820]/45">— {detail}</li>
                ))}
              </ul>
            </div>
            <a href="#contacto" className="flex size-11 items-center justify-center rounded-full border border-[#111820]/15 text-[#111820] transition-all hover:border-[#018D8D] hover:bg-[#018D8D] hover:text-white" aria-label={`Consultar por ${product.brand}`}>
              <ArrowUpRight />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[#FCAC01] px-6 py-20 text-[#111820] lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -right-20 -top-40 size-[30rem] rounded-full border-[5rem] border-[#E61537]/15" />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <div>
          <p className="text-[0.67rem] font-bold uppercase tracking-[0.24em] opacity-60">Contacto comercial</p>
          <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            Hablemos de<br /><span className="font-light italic">tu próximo proyecto.</span>
          </h2>
        </div>
        <div>
          <p className="max-w-sm text-base leading-7 opacity-70">
            Escribinos o llamanos para consultar por nuestros productos y solicitar una cotización.
          </p>
          <a href="mailto:nestoredutello@gmail.com" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#111820] px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-1">
            <Mail size={17} /> nestoredutello@gmail.com <ArrowUpRight />
          </a>
          <a href="tel:+541165118844" className="mt-5 flex items-center gap-3 text-sm font-medium">
            <Phone size={17} /> +54 11 6511-8844
          </a>
          <a href="https://wa.me/5491165118844" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#111820]/25 px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#111820] hover:text-white">
            Consultar por WhatsApp <ArrowUpRight />
          </a>
          <p className="mt-7 text-xs uppercase tracking-[0.14em] opacity-55">Atención en Zona Sur y Oeste del Gran Buenos Aires</p>
        </div>
      </div>
    </section>
  )
}
