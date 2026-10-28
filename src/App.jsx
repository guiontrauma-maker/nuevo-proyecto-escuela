import Navbar from "./components/Navbar";
import "./HeroMotion.css";

import { useState } from "react";
import "./App.css";

const WHATSAPP_NUMBER = ""; // Agrega después el número con código de país, sin + ni espacios.

const services = [
  {
    icon: "🔎",
    title: "Exploración de opciones",
    description:
      "Revisamos contigo la información de tu caso para identificar posibles caminos y alternativas.",
    tag: "Orientación personalizada",
  },
  {
    icon: "🧭",
    title: "Acompañamiento",
    description:
      "Te ayudamos a comprender los siguientes pasos y a organizar la información necesaria.",
    tag: "Atención cercana",
  },
  {
    icon: "🤝",
    title: "Alternativas para tus activos",
    description:
      "Analizamos contigo las posibilidades disponibles según las características de tu situación.",
    tag: "Soluciones a tu medida",
  },
];

const steps = [
  {
    icon: "💬",
    title: "Cuéntanos tu situación",
    description:
      "Comparte los detalles iniciales para que podamos comprender lo que necesitas.",
  },
  {
    icon: "🔍",
    title: "Revisamos la información",
    description:
      "Un asesor revisará los datos que nos compartas y te explicará las opciones que se puedan explorar.",
  },
  {
    icon: "🧭",
    title: "Conoce tus alternativas",
    description:
      "Recibe orientación sobre los posibles siguientes pasos, de acuerdo con tu situación.",
  },
];

function LogoPlaceholder() {
  return (
    <a className="brand" href="#inicio" aria-label="Ruta Capital, inicio">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-copy">
        <strong>RUTA CAPITAL</strong>
        <small>Orientación y acompañamiento</small>
      </span>
    </a>
  );
}

function Hero() {
  return (
    <section className="hero section-anchor" id="inicio">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            ORIENTACIÓN PARA TUS ACTIVOS
          </div>

          <h1>
            Cada situación
            <br />
            tiene un camino.
            <br />
            <span>Exploremos el tuyo.</span>
          </h1>

          <p className="hero-description">
            Te acompañamos a explorar alternativas para tus activos,
            comprender tus opciones y encontrar posibles caminos según
            tu situación.
          </p>

          <div className="hero-note">
            <span className="note-icon">✳</span>
            <span>Atención personalizada y comunicación clara.</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Ilustración de orientación y crecimiento">
          <div className="art-orbit orbit-outer" />
          <div className="art-orbit orbit-inner" />

          <div className="art-sun">
            <span>✳</span>
          </div>

          <div className="art-path">
            <span className="path-point point-one" />
            <span className="path-point point-two" />
            <span className="path-point point-three" />
          </div>

          <div className="art-card art-card-main">
            <div className="art-card-top">
              <span className="art-mini-icon">↗</span>
              <span>RUTA DE POSIBILIDADES</span>
            </div>
            <div className="art-chart">
              <span className="chart-line chart-line-one" />
              <span className="chart-line chart-line-two" />
              <span className="chart-line chart-line-three" />
              <span className="chart-line chart-line-four" />
              <svg viewBox="0 0 320 130" role="img" aria-label="Línea ilustrativa de crecimiento">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EC9C9D" stopOpacity=".38" />
                    <stop offset="100%" stopColor="#EC9C9D" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M8 110 C40 105, 44 70, 82 83 S132 95, 157 57 S211 72, 239 35 S283 42, 312 9 L312 130 L8 130 Z"
                  fill="url(#chartFill)"
                />
                <path
                  d="M8 110 C40 105, 44 70, 82 83 S132 95, 157 57 S211 72, 239 35 S283 42, 312 9"
                  fill="none"
                  stroke="#AA7F66"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="312" cy="9" r="5" fill="#443025" />
              </svg>
            </div>
            <div className="art-card-bottom">
              <span>Explorar</span>
              <span className="art-arrow">↗</span>
            </div>
          </div>

          <div className="floating-chip chip-top">
            <span>✦</span> Nuevas posibilidades
          </div>

          <div className="floating-chip chip-bottom">
            <span className="chip-check">✓</span>
            Un paso a la vez
          </div>

          <div className="art-decoration decoration-one">✳</div>
          <div className="art-decoration decoration-two">✦</div>
        </div>
      </div>

      <a className="scroll-cue" href="#nosotros">
        <span /> Descubre cómo podemos ayudarte
      </a>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="intro-section section-anchor" id="nosotros">
      <div className="container intro-grid">
        <div className="section-heading">
          <span className="eyebrow">UN ENFOQUE DIFERENTE</span>
          <h2>
            Entender tu situación
            <br />
            es el primer paso
            <span className="heading-accent">.</span>
          </h2>
        </div>

        <div className="intro-copy">
          <p>
            Sabemos que cada situación relacionada con tus activos es
            diferente. Por eso, creemos en escuchar primero, comprender
            tus necesidades y explorar las alternativas disponibles.
          </p>
          <a className="text-link" href="#proceso">
            Conoce nuestra forma de trabajar <span>↗</span>
          </a>
        </div>
      </div>

      <div className="container values-grid">
        <article className="value-card">
          <span className="value-icon">◉</span>
          <h3>Escuchamos</h3>
          <p>Conocemos tu situación antes de hablar de posibles opciones.</p>
        </article>
        <article className="value-card">
          <span className="value-icon">✳</span>
          <h3>Explicamos</h3>
          <p>Buscamos que comprendas la información y los pasos que puedes explorar.</p>
        </article>
        <article className="value-card">
          <span className="value-icon">↗</span>
          <h3>Te acompañamos</h3>
          <p>Te orientamos durante el proceso de exploración de alternativas.</p>
        </article>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="services-section section-anchor" id="servicios">
      <div className="container">
        <div className="section-topline">
          <div className="section-heading">
            <span className="eyebrow">CÓMO PODEMOS APOYARTE</span>
            <h2>
              Opciones para avanzar
              <span className="heading-accent">.</span>
            </h2>
          </div>
          <p className="section-side-copy">
            Un acompañamiento centrado en tu situación, tus dudas y
            las alternativas que puedan estar disponibles.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-top">
                <span className="service-icon">{service.icon}</span>
                <span className="service-arrow">↗</span>
              </div>
              <span className="service-tag">{service.tag}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contacto" className="service-link">
                Consultar opciones <span>→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="section-disclaimer">
          Las alternativas dependen de la información y las características
          de cada situación. La orientación inicial no garantiza un resultado.
        </p>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="process-section section-anchor" id="proceso">
      <div className="container process-layout">
        <div className="process-intro">
          <span className="eyebrow">UN CAMINO CLARO</span>
          <h2>
            Empecemos
            <br />
            por escucharte<span className="heading-accent">.</span>
          </h2>
          <p>
            No necesitas tener todas las respuestas desde el inicio.
            Comparte lo que sabes y te orientaremos sobre cómo continuar.
          </p>
          <a className="button button-dark" href="#contacto">
            Iniciar conversación <span>↗</span>
          </a>
        </div>

        <div className="process-list">
          {steps.map((step) => (
            <article className="process-item" key={step.title}>
              <div className="process-icon">{step.icon}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <span className="process-chevron">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    tipoActivo: "",
    descripcion: "",
    consentimiento: false,
  });

  const [error, setError] = useState("");

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!WHATSAPP_NUMBER) {
      setError(
        "El formulario está listo, pero falta configurar el número de WhatsApp de Ruta Capital."
      );
      return;
    }

    if (!form.consentimiento) {
      setError("Necesitamos tu autorización para compartir estos datos mediante WhatsApp.");
      return;
    }

    const message = [
      "Hola, Ruta Capital. Me gustaría recibir orientación sobre mi situación.",
      "",
      `Nombre: ${form.nombre}`,
      `Teléfono de contacto: ${form.telefono}`,
      `Correo: ${form.correo || "No proporcionado"}`,
      `Tipo de activo: ${form.tipoActivo}`,
      `Descripción: ${form.descripcion}`,
      "",
      "Autorizo compartir estos datos mediante WhatsApp para atender mi solicitud.",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-section section-anchor" id="contacto">
      <div className="container contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">ESTAMOS PARA ESCUCHARTE</span>
          <h2>
            Tu siguiente paso
            <br />
            comienza aquí<span className="heading-accent">.</span>
          </h2>
          <p>
            Cuéntanos un poco sobre tu situación. La información nos
            ayudará a comprender tu solicitud y preparar una conversación
            más útil para ti.
          </p>

          <div className="contact-promise">
            <span className="promise-icon">✳</span>
            <div>
              <strong>Tu información importa</strong>
              <p>
                Comparte únicamente los datos necesarios para que podamos
                ponernos en contacto contigo. No incluyas contraseñas,
                claves de acceso ni datos bancarios confidenciales.
              </p>
            </div>
          </div>

          <div className="contact-decoration" aria-hidden="true">
            <span>R</span>
            <span>C</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span className="form-kicker">PRIMER CONTACTO</span>
            <h3>Cuéntanos tu caso</h3>
            <p>Completa los campos para preparar tu mensaje.</p>
          </div>

          <div className="form-grid">
            <label className="field">
              <span>Nombre completo *</span>
              <input
                name="nombre"
                value={form.nombre}
                onChange={updateField}
                placeholder="¿Cómo te llamas?"
                autoComplete="name"
                required
              />
            </label>

            <label className="field">
              <span>Teléfono de contacto *</span>
              <input
                name="telefono"
                type="tel"
                value={form.telefono}
                onChange={updateField}
                placeholder="Tu número de contacto"
                autoComplete="tel"
                required
              />
            </label>

            <label className="field field-full">
              <span>Correo electrónico (opcional)</span>
              <input
                name="correo"
                type="email"
                value={form.correo}
                onChange={updateField}
                placeholder="tunombre@correo.com"
                autoComplete="email"
              />
            </label>

            <label className="field field-full">
              <span>¿Sobre qué tipo de activo necesitas orientación? *</span>
              <select
                name="tipoActivo"
                value={form.tipoActivo}
                onChange={updateField}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Fondos o recursos">Fondos o recursos</option>
                <option value="Inversiones">Inversiones</option>
                <option value="Cuentas o saldos">Cuentas o saldos</option>
                <option value="Bienes o propiedades">Bienes o propiedades</option>
                <option value="Otro tipo de activo">Otro tipo de activo</option>
                <option value="Prefiero explicarlo">Prefiero explicarlo</option>
              </select>
            </label>

            <label className="field field-full">
              <span>Cuéntanos brevemente tu situación *</span>
              <textarea
                name="descripcion"
                value={form.descripcion}
                onChange={updateField}
                placeholder="¿Qué ocurrió y qué te gustaría explorar?"
                rows="4"
                maxLength="1500"
                required
              />
              <small className="character-count">
                {form.descripcion.length}/1500 caracteres
              </small>
            </label>
          </div>

          <label className="consent-field">
            <input
              type="checkbox"
              name="consentimiento"
              checked={form.consentimiento}
              onChange={updateField}
              required
            />
            <span>
              Autorizo que los datos anteriores se incluyan en un mensaje
              de WhatsApp para atender mi solicitud.
            </span>
          </label>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button className="button button-whatsapp" type="submit">
            <span aria-hidden="true">◉</span>
            Preparar mensaje por WhatsApp
            <span className="whatsapp-arrow">↗</span>
          </button>

          <p className="form-footnote">
            WhatsApp se abrirá para que revises el mensaje y decidas enviarlo.
            Tus datos no se envían automáticamente desde esta página.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <LogoPlaceholder />
          <p>
            Orientación cercana para explorar alternativas relacionadas
            con tus activos.
          </p>
        </div>

        <div className="footer-links">
          <strong>Explora</strong>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Cómo funciona</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-contact">
          <strong>Hablemos de tu situación</strong>
          <p>Estamos listos para conocer tu consulta.</p>
          <a href="#contacto" className="text-link">
            Contactar con un asesor <span>↗</span>
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Ruta Capital. Todos los derechos reservados.</span>
        <a href="#inicio">Volver al inicio ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
