
import Navbar from "../components/Navbar";
import "./Servicios.css";

const services = [
  {
    icon: "⌕",
    category: "ANÁLISIS INICIAL",
    title: "Comprender lo que ocurrió",
    description:
      "Revisamos la información inicial de tu caso para entender cómo ocurrió la posible estafa, qué operaciones se realizaron y qué documentación podría ser relevante.",
    detail: "Cada caso requiere una evaluación individual.",
    tone: "service-card-primary",
  },
  {
    icon: "↗",
    category: "ALTERNATIVAS DE RECLAMACIÓN",
    title: "Explorar vías para recuperar tus fondos",
    description:
      "Analizamos qué alternativas podrían existir según el tipo de transferencia, la plataforma utilizada, las entidades involucradas y las circunstancias de la operación.",
    detail: "La posibilidad de recuperación depende de cada situación.",
    tone: "service-card-rose",
  },
  {
    icon: "▤",
    category: "ORGANIZACIÓN DEL CASO",
    title: "Preparar la información necesaria",
    description:
      "Te orientamos para organizar comprobantes, comunicaciones, fechas y otros documentos que podrían ayudar a explicar lo sucedido.",
    detail: "No compartas contraseñas ni claves privadas.",
    tone: "service-card-light",
  },
  {
    icon: "◇",
    category: "PREVENCIÓN Y ORIENTACIÓN",
    title: "Dar el siguiente paso con mayor claridad",
    description:
      "Te ayudamos a identificar señales de alerta, conocer opciones de actuación y reconocer posibles intentos de una segunda estafa.",
    detail: "Desconfía de quien garantice resultados o exija pagos inesperados.",
    tone: "service-card-dark",
  },
];

const tickerServices = [
  "Evaluación de casos",
  "Orientación para reclamar",
  "Análisis de operaciones",
  "Organización de documentos",
  "Prevención de nuevas estafas",
];

function ServiceTicker() {
  return (
    <div
      className="services-ticker"
      aria-label="Servicios de Ruta Capital"
    >
      <div className="services-ticker-track">
        {[0, 1].map((copy) => (
          <div
            className="services-ticker-group"
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {tickerServices.map((service) => (
              <span className="ticker-item" key={service}>
                <span className="ticker-star" aria-hidden="true">
                  ✳
                </span>
                {service}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-orbit services-hero-orbit-one" />
      <div className="services-hero-orbit services-hero-orbit-two" />

      <div className="services-container services-hero-grid">
        <div className="services-hero-copy">
          <span className="services-eyebrow">
            <span className="services-eyebrow-dot" />
            SERVICIOS DE RUTA CAPITAL
          </span>

          <h1>
            Cuando algo sale mal,
            <br />
            <span>mereces claridad.</span>
          </h1>

          <p>
            Si perdiste dinero en una posible estafa financiera,
            te ayudamos a comprender tu situación, revisar la
            información disponible y explorar qué alternativas
            podrían existir.
          </p>

          <div className="services-hero-actions">
            <a className="services-button" href="/#contacto">
              Revisar mi situación <span>↗</span>
            </a>

            <span className="services-hero-note">
              Sin promesas de recuperación garantizada.
            </span>
          </div>
        </div>

        <div className="services-hero-visual" aria-hidden="true">
          <div className="hero-visual-halo" />

          <div className="hero-document hero-document-back">
            <span className="document-line document-line-short" />
            <span className="document-line" />
            <span className="document-line" />
            <span className="document-line document-line-medium" />
          </div>

          <div className="hero-document hero-document-front">
            <div className="document-heading">
              <span className="document-symbol">R</span>
              <span>RUTA CAPITAL</span>
            </div>

            <div className="document-status">
              <span className="document-status-dot" />
              REVISIÓN INICIAL
            </div>

            <div className="document-lines">
              <span />
              <span />
              <span />
            </div>

            <div className="document-bottom">
              <span>Analizar</span>
              <span>↗</span>
            </div>
          </div>

          <div className="hero-floating-note hero-floating-note-top">
            <span>✳</span>
            Cada caso es diferente
          </div>

          <div className="hero-floating-note hero-floating-note-bottom">
            <span>✓</span>
            Información clara
          </div>

          <span className="hero-decorative-star">✳</span>
        </div>
      </div>

      <a className="services-scroll-cue" href="#nuestro-enfoque">
        Conoce cómo podemos orientarte <span>↓</span>
      </a>
    </section>
  );
}

function ServicesIntro() {
  return (
    <section
      className="services-intro"
      id="nuestro-enfoque"
    >
      <div className="services-container services-intro-grid">
        <div>
          <span className="services-eyebrow">
            UN PRIMER PASO, CON LOS PIES EN LA TIERRA
          </span>

          <h2>
            No prometemos
            <br />
            resultados. <span>Buscamos claridad.</span>
          </h2>
        </div>

        <div className="services-intro-copy">
          <p>
            Sabemos que perder dinero por una estafa puede generar
            incertidumbre y preocupación. Nuestro enfoque comienza
            por escuchar tu experiencia, entender la información
            disponible y explicar con transparencia las opciones
            que podrían ser pertinentes.
          </p>

          <p>
            La recuperación no siempre es posible. Por eso, antes
            de hablar de alternativas, es importante conocer los
            detalles de cada caso.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceCards() {
  return (
    <section className="services-cards-section" id="servicios-disponibles">
      <div className="services-container">
        <div className="services-section-heading">
          <div>
            <span className="services-eyebrow">
              EN QUÉ PODEMOS ORIENTARTE
            </span>

            <h2>
              Un caso a la vez<span>.</span>
            </h2>
          </div>

          <p>
            Un proceso de orientación para comprender lo ocurrido
            y evaluar posibles siguientes pasos.
          </p>
        </div>

        <div className="services-cards-grid">
          {services.map((service) => (
            <article
              className={`services-detail-card ${service.tone}`}
              key={service.title}
            >
              <div className="services-card-top">
                <span className="services-card-icon" aria-hidden="true">
                  {service.icon}
                </span>

                <span className="services-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <span className="services-card-category">
                {service.category}
              </span>

              <h3>{service.title}</h3>

              <p className="services-card-description">
                {service.description}
              </p>

              <div className="services-card-detail">
                <span aria-hidden="true">✳</span>
                {service.detail}
              </div>

              <a className="services-card-link" href="/#contacto">
                Consultar mi situación <span>→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="services-legal-note">
          La orientación inicial no garantiza la recuperación de
          fondos ni sustituye la asesoría legal, financiera o de
          inversión que pudiera requerir cada caso. Las alternativas
          disponibles dependen de las circunstancias y de las
          entidades involucradas.
        </p>
      </div>
    </section>
  );
}

function ServicesClosing() {
  return (
    <section className="services-closing">
      <div className="services-container services-closing-inner">
        <div>
          <span className="services-eyebrow">
            EMPECEMOS POR COMPRENDER TU CASO
          </span>

          <h2>
            No tienes que tener
            <br />
            todas las respuestas hoy.
          </h2>

          <p>
            Comparte la información inicial y conoce qué opciones
            podrían explorarse en tu situación.
          </p>
        </div>

        <a className="services-button services-button-light" href="/#contacto">
          Hablar sobre mi caso <span>↗</span>
        </a>
      </div>
    </section>
  );
}


const caseScenarios = [
  {
    icon: "↔",
    title: "Transferí dinero a un estafador",
    description:
      "Enviaste dinero y después descubriste indicios de fraude.",
  },
  {
    icon: "⇄",
    title: "Transferencia que no reconozco",
    description:
      "Detectaste una operación que no recuerdas haber autorizado.",
  },
  {
    icon: "▤",
    title: "Cargo sospechoso en mi tarjeta",
    description:
      "Aparecieron cargos que no reconoces o que podrían estar relacionados con un engaño.",
  },
  {
    icon: "⌑",
    title: "Entraron a mi cuenta",
    description:
      "Alguien pudo acceder a tu cuenta, aplicación o información financiera.",
  },
  {
    icon: "⌁",
    title: "Plataforma que no me deja retirar",
    description:
      "Una plataforma retiene tus fondos o te pone obstáculos para retirarlos.",
  },
  {
    icon: "↗",
    title: "Inversión que dejó de pagar",
    description:
      "Dejaste de recibir pagos o no puedes recuperar el dinero invertido.",
  },
  {
    icon: "⌂",
    title: "Fraude con una propiedad",
    description:
      "Tuviste problemas con una preventa, terreno o propiedad posiblemente fraudulenta.",
  },
  {
    icon: "＋",
    title: "Otra situación",
    description:
      "Tu caso es diferente o no sabes cómo identificar lo que ocurrió.",
  },
];

function CaseScenarios() {
  return (
    <section className="case-scenarios" id="casos-que-atendemos">
      <div className="services-container">
        <div className="case-scenarios-heading">
          <span className="services-eyebrow">
            <span className="services-eyebrow-dot" />
            CASOS QUE ATENDEMOS
          </span>

          <h2>
            ¿Te pasó alguna
            <br />
            de estas <span>situaciones?</span>
          </h2>

          <p>
            Cada situación es diferente. Identifica la que más se
            acerque a tu caso y conversemos sobre las alternativas
            que podrían explorarse.
          </p>
        </div>

        <div className="case-scenarios-grid">
          {caseScenarios.map((item, index) => (
            <a
              className="case-scenario-card"
              href="/#contacto"
              key={item.title}
              style={{ "--case-index": index }}
            >
              <span className="case-scenario-icon" aria-hidden="true">
                {item.icon}
              </span>

              <span className="case-scenario-title">
                {item.title}
              </span>

              <span className="case-scenario-description">
                {item.description}
              </span>

              <span className="case-scenario-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>

        <div className="case-scenarios-cta">
          <div>
            <h3>¿Reconoces tu caso?</h3>
            <p>
              Cuéntanos qué ocurrió. El primer paso es comprender
              tu situación.
            </p>
          </div>

          <a className="case-scenarios-button" href="/#contacto">
            Consultar mi situación <span>↗</span>
          </a>
        </div>

        <p className="case-scenarios-disclaimer">
          La revisión inicial no garantiza la recuperación de fondos.
          Las alternativas dependen de las circunstancias de cada caso.
        </p>
      </div>
    </section>
  );
}


export default function Servicios() {
  return (
    <>
      <Navbar />

      <main className="services-page">
        <ServicesHero />
<ServiceTicker />
<CaseScenarios />
<ServicesIntro />
<ServiceCards />
<ServicesClosing />
      </main>
    </>
  );
}
