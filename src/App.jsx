
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const WHATSAPP_NUMBER = "5520870671";

const services = [
  {
    icon: "🔎",
    number: "01",
    title: "Análisis de tu situación",
    description:
      "Revisamos contigo lo ocurrido, cómo se realizó el movimiento de dinero y qué información tienes disponible para identificar posibles alternativas.",
    className: "service-explore",
  },
  {
    icon: "🧭",
    number: "02",
    title: "Orientación para intentar recuperar tu dinero",
    description:
      "Exploramos contigo las opciones que podrían existir para buscar la recuperación de tus recursos, de acuerdo con las características de tu caso.",
    className: "service-guide",
  },
  {
    icon: "🤝",
    number: "03",
    title: "Acompañamiento durante el proceso",
    description:
      "Te orientamos sobre los pasos que podrías considerar y te ayudamos a comprender las alternativas disponibles para tu situación.",
    className: "service-assets",
  },
];

const steps = [
  {
    number: "01",
    title: "Cuéntanos qué ocurrió",
    description:
      "Escuchamos tu experiencia y conocemos cómo sucedió la estafa, el fraude o la pérdida de tus recursos.",
  },
  {
    number: "02",
    title: "Revisamos tu información",
    description:
      "Analizamos los datos, comprobantes y documentos que tengas disponibles para comprender mejor tu situación.",
  },
  {
    number: "03",
    title: "Identificamos posibles alternativas",
    description:
      "Exploramos las opciones que podrían estar disponibles y te explicamos sus posibilidades y limitaciones.",
  },
  {
    number: "04",
    title: "Te orientamos en los siguientes pasos",
    description:
      "Te brindamos acompañamiento y orientación durante las etapas que se hayan acordado para tu caso.",
  },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".saf-home .reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function EmojiTicker() {
  const items = [
    "ORIENTACIÓN FINANCIERA",
    "ANÁLISIS DE TU SITUACIÓN",
    "ALTERNATIVAS PARA TUS RECURSOS",
    "ACOMPAÑAMIENTO PERSONALIZADO",
    "UN PASO A LA VEZ",
  ];

  return (
    <div className="emoji-ticker" aria-label="Enfoque de SAF">
      <div className="ticker-track">
        {[...items, ...items].map((item, index) => (
          <span className="ticker-item" key={`${item}-${index}`}>
            {item}
            <span className="ticker-star">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}


function Hero() {
  return (
    <section className="saf-hero" id="inicio">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />

      <div className="container hero-layout">
        <div className="hero-content">
          <div className="hero-label">
            <span className="hero-label-dot" />
            SERVICIO DE ASESORÍA FINANCIERA
          </div>

          <h1>
            Cada situación
            tiene un camino
            <br />
            <span>Exploremos el tuyo</span>
          </h1>

          <p className="hero-description">
            Te acompañamos a explorar alternativas para tus activos,
            comprender tus opciones y encontrar posibles caminos
            según tu situación.
          </p>

          <div className="hero-note">
            <span className="note-icon">✳</span>
            <span>Atención personalizada y comunicación clara.</span>
          </div>
        </div>

        {/* ÁREA DE IMAGEN DEL HERO */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="/images/inicio-hero.png"
              alt="Imagen representativa del servicio de asesoría financiera"
            />
          </div>

          <div className="hero-floating-note">
            <span>✳</span>
            <div>
              <strong>SAF</strong>
              <small>Orientación personalizada</small>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottomline container">
        <span>ATENCIÓN PERSONALIZADA</span>
        <span className="hero-bottom-symbol">✳</span>
        <a href="#enfoque">CONOCE NUESTRO ENFOQUE ↓</a>
      </div>
    </section>
  );
}


function IntroSection() {
  return (
    <section className="intro-section section-anchor" id="enfoque">
      <div className="container">
        <div className="intro-top reveal">
          <div>
            <span className="eyebrow">CUANDO ALGO NO SALE COMO ESPERABAS</span>
            <h2>
              No estás obligado
              <br />
              a tener todas las <em>respuestas.</em>
            </h2>
          </div>

          <div className="intro-top-copy">
            <span className="intro-quote">“</span>
            <p>
              Si realizaste una transferencia, invertiste en una plataforma
              o entregaste dinero y después descubriste que podría tratarse
              de una estafa, es normal que tengas dudas sobre qué hacer.
              En SAF te escuchamos y te ayudamos a explorar posibles
              alternativas.
            </p>
          </div>
        </div>

        <div className="editorial-bento">
          <article className="bento-card bento-large reveal">
            <div className="bento-large-top">
              <span>01 / COMPRENDER</span>
              <span>🔎</span>
            </div>
            <div className="bento-large-content">
              <h3>Primero queremos conocer lo que te sucedió.</h3>
              <p>
                Escuchamos tu experiencia y revisamos la información
                disponible para entender las características de tu caso.
              </p>
            </div>
            <span className="bento-decoration">SAF.</span>
          </article>

          <article className="bento-card bento-clarity reveal">
            <span className="bento-mini-label">02 / INFORMACIÓN</span>
            <span className="bento-big-emoji">📂</span>
            <h3>Revisamos lo que tienes disponible.</h3>
            <p>
              Comprobantes, movimientos, conversaciones y otros datos
              relacionados con lo ocurrido.
            </p>
          </article>

          <article className="bento-card bento-support reveal">
            <span className="bento-mini-label">03 / ALTERNATIVAS</span>
            <div className="support-illustration">
              <span>💡</span>
            </div>
            <h3>Exploramos posibles caminos para tu situación.</h3>
          </article>

          <article className="bento-card bento-statement reveal">
            <span className="bento-statement-symbol">✳</span>
            <p>
              Escuchar.
              <br />
              Analizar.
              <br />
              Orientar.
            </p>
            <span className="bento-mini-label">NUESTRO ENFOQUE</span>
          </article>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="services-section" id="servicios">
      <div className="container">
        <div className="service-showcase">
          {services.map((service) => (
            <article
              className={`service-panel ${service.className} reveal`}
              key={service.number}
            >
              <div className="service-panel-top">
                <span>{service.number} / SAF</span>
                <span className="service-panel-icon">{service.icon}</span>
              </div>

              <div className="service-panel-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#contacto">
                  Cuéntanos tu situación <span>↗</span>
                </a>
              </div>

              <span className="service-watermark">{service.number}</span>
            </article>
          ))}
        </div>

        <div className="service-disclaimer">
          <span>✳</span>
          <p>
            La posibilidad de recuperar los recursos depende de las
            circunstancias de cada situación. No podemos garantizar
            la recuperación del dinero ni un resultado determinado.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="process-section section-anchor" id="proceso">
      <div className="container">
        <div className="process-top reveal">
          <div>
            <span className="eyebrow">¿QUÉ SUCEDE DESPUÉS DE CONTACTARNOS?</span>
            <h2>
              Te acompañamos
              <br />
              <em>paso a paso.</em>
            </h2>
          </div>

          <div className="process-top-copy">
            <span className="process-big-emoji">🧩</span>
            <p>
              Conocemos tu situación, revisamos la información que tengas
              y exploramos contigo qué alternativas podrían considerarse.
            </p>
          </div>
        </div>

        <div className="process-route">
          <div className="process-route-line" />

          {steps.map((step, index) => (
            <article
              className={`process-step reveal process-step-${index + 1}`}
              key={step.number}
            >
              <div className="process-step-marker">
                <span>{step.number}</span>
              </div>

              <div className="process-step-card">
                <div className="process-step-card-top">
                  <span>{step.number} / ETAPA</span>
                  <span className="process-step-emoji">{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="process-final reveal">
          <span>🌱</span>
          <div>
            <strong>Comencemos por conocer lo que ocurrió.</strong>
            <p>Podemos conversar sobre tu situación.</p>
          </div>
          <a href="#contacto">Contactar <span>↗</span></a>
        </div>

        <p className="process-disclaimer">
          La orientación de SAF no garantiza la recuperación del dinero.
          Las alternativas dependen de las circunstancias de cada caso.
        </p>
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
      setError("Falta configurar el número de WhatsApp de SAF.");
      return;
    }

    if (!form.consentimiento) {
      setError("Por favor, autoriza el uso de los datos de tu mensaje.");
      return;
    }

    const message = [
      "Hola, SAF. Me gustaría recibir orientación sobre una situación en la que perdí dinero.",
      "",
      `Nombre: ${form.nombre}`,
      `Teléfono: ${form.telefono}`,
      `Correo: ${form.correo || "No proporcionado"}`,
      `Situación: ${form.tipoActivo}`,
      `Descripción: ${form.descripcion}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-section section-anchor" id="contacto">
      <div className="container contact-layout">
        <div className="contact-information reveal">
          <span className="eyebrow">ESTAMOS PARA ESCUCHARTE</span>
          <h2>
            Hablemos de
            <br />
            <em>lo que te sucedió.</em>
          </h2>

          <p>
            Si perdiste dinero por una estafa, un fraude o una situación
            relacionada con una inversión, cuéntanos brevemente qué ocurrió.
            Queremos conocer tu caso para orientarte sobre las posibles
            alternativas que podrías explorar.
          </p>

        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span className="eyebrow">PRIMER CONTACTO ✳</span>
            <h3>Cuéntanos qué ocurrió</h3>
            <p>
              Completa estos datos para preparar tu mensaje de WhatsApp.
            </p>
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
              <span>¿Qué tipo de situación viviste? *</span>
              <select
                name="tipoActivo"
                value={form.tipoActivo}
                onChange={updateField}
                required
              >
                <option value="">Selecciona la opción más cercana a tu caso</option>
                <option value="Transferencia bancaria por una posible estafa">
                  Realicé una transferencia por una posible estafa
                </option>
                <option value="Fraude relacionado con una inversión">
                  Perdí dinero en una inversión
                </option>
                <option value="Plataforma de inversión que no permite retirar dinero">
                  Una plataforma no me permite retirar mi dinero
                </option>
                <option value="Estafa relacionada con criptomonedas o Forex">
                  Estafa relacionada con criptomonedas o Forex
                </option>
                <option value="Fraude mediante compras o ventas por internet">
                  Fraude en una compra o venta por internet
                </option>
                <option value="Cargo o movimiento de dinero que no reconozco">
                  Tengo cargos o movimientos que no reconozco
                </option>
                <option value="Dinero entregado a una persona o empresa">
                  Entregué dinero a una persona o empresa y no obtuve lo acordado
                </option>
                <option value="Otra situación relacionada con pérdida de dinero">
                  Otra situación relacionada con pérdida de dinero
                </option>
              </select>
            </label>

            <label className="field field-full">
              <span>Cuéntanos brevemente qué sucedió *</span>
              <textarea
                name="descripcion"
                value={form.descripcion}
                onChange={updateField}
                placeholder="Por ejemplo: cómo realizaste el pago, cuándo ocurrió y qué pasó después..."
                rows="4"
                maxLength="1500"
                required
              />
              <small className="character-count">
                {form.descripcion.length}/1500 caracteres
              </small>
            </label>
          </div>


          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button className="form-submit" type="submit">
            <span>💬</span>
            Recibir orientación mediante WhatsApp
            <span className="submit-arrow">↗</span>
          </button>

          <p className="form-footnote">
            WhatsApp se abrirá para que revises el mensaje y decidas enviarlo.
            El envío no se realiza automáticamente.
          </p>
        </form>
      </div>
    </section>
  );
}

import Footer from "./components/Footer";

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />

      <main className="saf-home">
        <Hero />
        <EmojiTicker />
        <IntroSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>

    </>
  );
}
