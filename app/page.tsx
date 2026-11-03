import { ArrowUpRight, Menu, Phone } from "lucide-react"
import Image from "next/image"
import { MobileMenu } from "@/components/mobile-menu"

const products = [
  { number: "01", title: "Pinturas industriales", text: "Sistemas de protección y terminación para estructuras, máquinas y superficies exigentes.", tone: "yellow" },
  { number: "02", title: "Recubrimientos", text: "Soluciones técnicas para extender la vida útil de cada proyecto y trabajar con confianza.", tone: "teal" },
  { number: "03", title: "Asesoramiento", text: "Te ayudamos a encontrar el producto indicado para tu aplicación y presupuesto.", tone: "red" },
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="NT Pinturas, inicio">
          <Image src="/nt-logo.png" alt="Logo NT Pinturas" width={76} height={48} className="brand-logo" priority />
          <span className="brand-name">PINTURAS</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a className="active" href="#inicio">Inicio</a><a href="#nosotros">Nosotros</a><a href="#productos">Productos</a><a href="#contacto">Contacto</a>
        </nav>
        <a className="quote-button desktop-quote" href="#contacto">Hablemos <ArrowUpRight size={16} aria-hidden="true" /></a>
        <MobileMenu />
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> DISTRIBUCIÓN INDUSTRIAL</div>
          <h1 id="hero-title">Color que <em>protege.</em><br />Calidad que <em>dura.</em></h1>
          <p>Comercializamos pinturas y recubrimientos industriales para quienes hacen que las cosas pasen.</p>
          <div className="hero-actions"><a className="primary-button" href="#productos">Ver soluciones <ArrowUpRight size={18} aria-hidden="true" /></a><a className="text-button" href="#contacto">Solicitar cotización <ArrowUpRight size={16} aria-hidden="true" /></a></div>
          <div className="hero-note"><span className="note-dot" /> Zona Sur y Oeste del Gran Buenos Aires</div>
        </div>
        <div className="hero-media"><div className="media-caption"><span>NT / 2024</span><span>Superficies que hablan</span></div></div>
        <div className="hero-index" aria-hidden="true"><span>01</span><span className="index-rule" /><span>03</span></div>
      </section>

      <section className="statement" id="nosotros"><div className="section-kicker">NUESTRA FORMA DE TRABAJAR</div><h2>Más que pintura.<br /><span>Una respuesta precisa.</span></h2><p>Entendemos el trabajo detrás de cada superficie. Por eso combinamos productos confiables, criterio técnico y una atención cercana.</p></section>

      <section className="products" id="productos" aria-labelledby="products-title">
        <div className="products-heading"><div><div className="section-kicker">NUESTRO CATÁLOGO</div><h2 id="products-title">Soluciones<br /><span>sin vueltas.</span></h2></div><p>Lo que necesitás para que tu próximo proyecto tenga un mejor acabado desde el primer día.</p></div>
        <div className="product-list">{products.map((product) => <article className={`product-row ${product.tone}`} key={product.number}><span className="product-number">{product.number}</span><h3>{product.title}</h3><p>{product.text}</p><a href="#contacto" aria-label={`Consultar por ${product.title}`}><ArrowUpRight size={22} /></a></article>)}</div>
      </section>

      <section className="contact-band" id="contacto"><div><div className="section-kicker">¿TENÉS UN PROYECTO?</div><h2>Hablemos de<br /><em>lo que viene.</em></h2></div><div className="contact-side"><p>Contanos qué necesitás y te ayudamos a encontrar la mejor solución.</p><a className="light-button" href="mailto:info@ntpinturas.com">info@ntpinturas.com <ArrowUpRight size={17} /></a><a className="phone-link" href="tel:+541145678900"><Phone size={15} /> +54 11 4567 8900</a></div></section>
      <footer><span>NT PINTURAS</span><span>Recubrimientos para la industria</span><span>© 2024</span></footer>
    </main>
  )
}
