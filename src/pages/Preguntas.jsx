
import { useState } from "react";
import Navbar from "../components/Navbar";
import "./Preguntas.css";

const WHATSAPP_NUMBER = ""; // Agrega después el número con código de país, sin + ni espacios.

const questions = [
  {
    question: "¿Qué tipo de situaciones puedo consultar?",
    answer:
      "Puedes consultarnos sobre situaciones relacionadas con activos, recursos económicos, bienes o inversiones cuya recuperación deseas explorar. Revisaremos la información que nos compartas para comprender mejor tu caso.",
  },
  {
    question: "¿Cómo comienza el proceso?",
    answer:
      "Comenzamos conociendo tu situación y los detalles generales. Después, podemos explorar las alternativas que podrían existir y explicarte los siguientes pasos.",
  },
  {
    question: "¿Qué información necesito proporcionar?",
    answer:
      "Puedes comenzar con tu nombre, un medio de contacto, el tipo de activo involucrado y una descripción general de lo ocurrido. No necesitas compartir todos tus documentos en el primer contacto.",
  },
  {
    question: "¿La recuperación de mis activos está garantizada?",
    answer:
      "No se puede garantizar la recuperación en todos los casos. Las posibilidades dependen de las circunstancias, la documentación disponible y las condiciones particulares de cada situación.",
  },
  {
    question: "¿La primera consulta tiene algún costo?",
    answer:
      "Las condiciones y los posibles costos deben confirmarse directamente con el equipo de Ruta Capital antes de iniciar cualquier servicio.",
  },
  {
    question: "¿Cuánto tiempo puede tomar el proceso?",
    answer:
      "El tiempo depende del tipo de activo, la información disponible y las circunstancias de cada caso.",
  },
  {
    question: "¿Cómo puedo comunicarme con Ruta Capital?",
    answer:
      "Puedes completar el formulario de esta página para preparar una consulta por WhatsApp cuando esté configurado el número de contacto.",
  },
];

function QuestionItem({ question, answer, isOpen, onClick }) {
  return (
    <article className={`questions-item ${isOpen ? "is-open" : ""}`}>
      <button
        className="questions-trigger"
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="questions-symbol" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && <p className="questions-answer">{answer}</p>}
    </article>
  );
}

function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    asset: "",
    message: "",
  });

  const [notice, setNotice] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setNotice("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!WHATSAPP_NUMBER.trim()) {
      setNotice(
        "El formulario está listo, pero Ruta Capital todavía debe configurar su número de WhatsApp para recibir consultas. Tus datos siguen en esta página y no se han enviado."
      );
      return;
    }

    const message = [
      "Hola, quiero recibir asesoría de Ruta Capital.",
      "",
      `Nombre: ${form.name}`,
      `Correo electrónico: ${form.email}`,
      `Teléfono: ${form.phone || "No proporcionado"}`,
      `Tipo de activo: ${form.asset || "No especificado"}`,
      "",
      "Descripción de mi situación:",
      form.message,
    ].join("\n");

    const url =
      `https://wa.me/${WHATSAPP_NUMBER.trim()}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setNotice(
      "WhatsApp se ha abierto con tu consulta preparada. Revisa el mensaje y envíalo desde WhatsApp."
    );
  }

  return (
    <form className="questions-form" onSubmit={handleSubmit}>
      <div className="questions-form-heading">
        <span className="questions-eyebrow">TU CONSULTA</span>
        <h3>Cuéntanos tu situación</h3>
        <p>
          Completa los campos para preparar tu mensaje de asesoría.
        </p>
      </div>

      <div className="questions-form-grid">
        <label className="questions-field">
          <span>Nombre completo *</span>
          <input
            type="text"
            name="name"
            placeholder="¿Cómo te llamas?"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </label>

        <label className="questions-field">
          <span>Correo electrónico *</span>
          <input
            type="email"
            name="email"
            placeholder="tunombre@correo.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </label>

        <label className="questions-field">
          <span>Teléfono</span>
          <input
            type="tel"
            name="phone"
            placeholder="Tu número de contacto"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </label>

        <label className="questions-field">
          <span>Tipo de activo</span>
          <select
            name="asset"
            value={form.asset}
            onChange={handleChange}
          >
            <option value="">Selecciona una opción</option>
            <option value="Recursos económicos">Recursos económicos</option>
            <option value="Bien inmueble">Bien inmueble</option>
            <option value="Inversión">Inversión</option>
            <option value="Otro tipo de activo">Otro tipo de activo</option>
            <option value="No estoy seguro">No estoy seguro</option>
          </select>
        </label>

        <label className="questions-field questions-field-full">
          <span>Describe tu situación *</span>
          <textarea
            name="message"
            rows="5"
            placeholder="Cuéntanos brevemente qué ocurrió y qué te gustaría resolver..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <p className="questions-privacy">
        Comparte solo la información necesaria para describir tu caso. No
        incluyas contraseñas ni datos bancarios confidenciales.
      </p>

      <button className="questions-submit" type="submit">
        Recibir asesoría por WhatsApp <span>↗</span>
      </button>

      {notice && (
        <p className="questions-notice" role="status">
          {notice}
        </p>
      )}
    </form>
  );
}


function HonorariosSection() {
  return (
    <section className="honorarios-section" id="honorarios">
      <div className="questions-container">
        <div className="honorarios-heading">
          <span className="questions-eyebrow">
            <span className="honorarios-dot" />
            HONORARIOS Y TRANSPARENCIA
          </span>

          <h2>
            Qué hacemos,
            <br />
            <span>cuánto cuesta</span> y cómo trabajamos.
          </h2>

          <p>
            Queremos que comprendas el servicio, sus condiciones y
            los posibles costos antes de tomar una decisión.
          </p>
        </div>

        <div className="honorarios-grid">
          <article className="honorarios-card">
            <span className="honorarios-card-icon" aria-hidden="true">
              ◇
            </span>

            <h3>Qué hacemos</h3>

            <p>
              Somos un servicio de orientación y acompañamiento.
              Revisamos la información que nos compartas para ayudarte
              a comprender tu situación y explorar alternativas
              relacionadas con posibles fraudes o fondos no recuperados.
            </p>

            <div className="honorarios-card-note">
              Cada caso requiere una valoración particular.
            </div>
          </article>

          <article className="honorarios-card">
            <span className="honorarios-card-icon" aria-hidden="true">
              $
            </span>

            <h3>Qué cuesta</h3>

            <p>
              El costo depende del servicio que se requiera y de las
              características del caso. Antes de contratar, te
              explicaremos los honorarios aplicables, qué incluyen
              y cuáles son las condiciones de pago.
            </p>

            <div className="honorarios-card-note">
              No avances con un servicio sin conocer sus condiciones.
            </div>
          </article>

          <article className="honorarios-card">
            <span className="honorarios-card-icon" aria-hidden="true">
              ✓
            </span>

            <h3>Quién responde</h3>

            <p>
              Te explicaremos el alcance del servicio, las gestiones
              que podemos realizar y sus limitaciones. Si tu situación
              requiere atención legal o de otra entidad especializada,
              te lo comunicaremos.
            </p>

            <div className="honorarios-card-note">
              Información clara, sin promesas de resultados.
            </div>
          </article>
        </div>

        <div className="honorarios-disclaimer">
          <span aria-hidden="true">✳</span>
          <p>
            <strong>Importante:</strong> la recuperación del dinero
            no está garantizada. El resultado depende de las
            circunstancias de cada caso y de las vías disponibles.
            Desconfía de quien te asegure recuperar tus fondos.
          </p>
        </div>
      </div>
    </section>
  );
}


export default function Preguntas() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <>
      <Navbar />

      <main className="questions-page">
        <section className="questions-hero">
          <div className="questions-hero-glow" />

          <div className="questions-container questions-hero-content">
            <span className="questions-eyebrow">
              ESTAMOS AQUÍ PARA ORIENTARTE
            </span>

            <h1>
              Las respuestas
              <br />
              <span>abren caminos.</span>
            </h1>

            <p>
              Sabemos que cada situación es diferente. Encuentra aquí
              respuestas a las dudas más frecuentes y, si necesitas orientación
              adicional, cuéntanos tu caso.
            </p>

            <a
              className="questions-hero-link"
              href="#preguntas-frecuentes"
            >
              Explorar preguntas <span>↓</span>
            </a>
          </div>

    
        </section>

        <section
          className="questions-content-section"
          id="preguntas-frecuentes"
        >
          <div className="questions-container questions-content-grid">
            <aside className="questions-sidebar">
              <span className="questions-eyebrow">
                PREGUNTAS FRECUENTES
              </span>
              <h2>Información para dar el siguiente paso.</h2>
              <p>
                Reunimos algunas de las dudas que pueden surgir al explorar
                alternativas para la recuperación de activos.
              </p>

              <div className="questions-sidebar-note">
                <span>✳</span>
                <p>
                  ¿Tu pregunta es diferente? Puedes compartir tu situación en
                  nuestro formulario.
                </p>
              </div>
            </aside>

            <div className="questions-list">
              {questions.map((item, index) => (
                <QuestionItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isOpen={activeQuestion === index}
                  onClick={() =>
                    setActiveQuestion(
                      activeQuestion === index ? -1 : index
                    )
                  }
                />
              ))}
            </div>
          </div>
        </section>
       <HonorariosSection />
        <section className="questions-contact-section" id="consulta">
          <div className="questions-container questions-contact-grid">
            <div className="questions-contact-copy">
              <span className="questions-eyebrow">
                HABLEMOS DE TU CASO
              </span>
              <h2>
                ¿No encontraste
                <br />
                la respuesta que buscas?
              </h2>

              <p>
                Cada situación tiene sus particularidades. Compártenos los
                detalles generales y podremos conocer qué necesitas.
              </p>

              <div className="questions-contact-promise">
                <span className="questions-promise-icon">◇</span>
                <div>
                  <strong>Atención personalizada</strong>
                  <p>
                    Queremos comprender tu situación antes de explorar posibles
                    alternativas.
                  </p>
                </div>
              </div>
            </div>

            <ConsultationForm />
          </div>
        </section>
      </main>

      <footer className="questions-footer">
        <div className="questions-container questions-footer-inner">
          <a className="questions-footer-brand" href="/">
            <span className="questions-footer-monogram">RC</span>
            <span>
              <strong>RUTA CAPITAL</strong>
              <small>Orientación y acompañamiento</small>
            </span>
          </a>

          <nav aria-label="Navegación del pie de página">
            <a href="/">Inicio</a>
            <a href="/preguntas">Preguntas</a>
            <a href="/#servicios">Servicios</a>
            <a href="/#contacto">Contacto</a>
          </nav>

          <p>© {new Date().getFullYear()} Ruta Capital.</p>
        </div>
      </footer>
    </>
  );
}
