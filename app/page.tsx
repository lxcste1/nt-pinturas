import { ArrowRight, Menu, Phone, X } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="NT Pinturas, inicio">
          <span className="brand-mark"><span>NT</span></span>
          <span className="brand-name">PINTURAS</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a className="active" href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="quote-button desktop-quote" href="#contacto">Solicitar cotización <ArrowRight size={16} aria-hidden="true" /></a>
        <MobileMenu />
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> DISTRIBUCIÓN INDUSTRIAL</div>
          <h1 id="hero-title">Soluciones en pintura <em>para la industria.</em></h1>
          <p>Comercializamos pinturas y recubrimientos industriales para empresas, talleres y fabricantes. Acercamos productos especializados para cada necesidad.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#productos">Consultar productos <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="text-button" href="#contacto">Solicitar cotización <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="hero-note"><span className="note-dot" /> Zona Sur y Oeste del Gran Buenos Aires</div>
        </div>
        <div className="hero-media" role="img" aria-label="Proceso de pintura industrial sobre una estructura metálica" />
        <div className="hero-index" aria-hidden="true"><span>01</span><span className="index-rule" /><span>02</span></div>
      </section>

      <section className="products-intro" id="productos" aria-labelledby="products-title">
        <div><div className="section-kicker">LO QUE HACEMOS</div><h2 id="products-title">Productos que acompañan<br /><span>cada proyecto.</span></h2></div>
        <p>Una selección especializada de pinturas y recubrimientos para responder a las exigencias de la industria.</p>
      </section>
      <div id="nosotros" className="anchor-target" /><div id="contacto" className="anchor-target" />
    </main>
  )
}
