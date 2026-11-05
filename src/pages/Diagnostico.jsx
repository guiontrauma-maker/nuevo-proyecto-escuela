
import { useState } from "react";
import Navbar from "../components/Navbar";
import "./Diagnostico.css";

const situations = [
  "Transferencia o depósito a un posible estafador",
  "Transferencia SPEI que no reconozco",
  "Cargo no reconocido en mi tarjeta",
  "Acceso no autorizado a mi cuenta o aplicación",
  "Una plataforma no me permite retirar mi dinero",
  "Inversión en Forex o criptomonedas que dejó de pagar",
  "Terreno o preventa que no me entregaron",
  "Otra situación",
];

const timeOptions = [
  "Menos de 7 días",
  "Entre 1 y 4 semanas",
  "Entre 1 y 6 meses",
  "Hace más de 6 meses",
];

const claimOptions = [
  "Sí, ya lo reporté",
  "No, todavía no",
  "Lo intenté, pero no obtuve respuesta",
];

const amountOptions = [
  "Menos de $5,000 MXN",
  "$5,000 a $20,000 MXN",
  "$20,001 a $100,000 MXN",
  "Más de $100,000 MXN",
  "Prefiero precisarlo después",
];

const initialData = {
  situation: "",
  time: "",
  claim: "",
  amount: "",
  name: "",
  phone: "",
  email: "",
  details: "",
};

const steps = [
  "Tu situación",
  "Cuándo ocurrió",
  "Reporte del caso",
  "Monto involucrado",
  "Tus datos",
];

const stepDescriptions = [
  "Identifica qué sucedió.",
  "Ubica el tiempo transcurrido.",
  "Cuéntanos si ya lo reportaste.",
  "Indica el monto aproximado.",
  "Comparte cómo contactarte.",
];

function StepNavigation({ step }) {
  return (
    <aside className="diagnostic-journey">
      <div className="diagnostic-journey-heading">
        <span className="diagnostic-journey-kicker">TU RECORRIDO</span>
        <h3>Conozcamos los detalles.</h3>
        <p>Completa cada etapa para organizar la información de tu caso.</p>
      </div>

      <div className="diagnostic-journey-list">
        {steps.map((item, index) => {
          const completed = step > index;
          const active = step === index;

          return (
            <div
              className={`diagnostic-journey-item ${
                active ? "is-active" : ""
              } ${completed ? "is-complete" : ""}`}
              key={item}
            >
              <span className="diagnostic-journey-number">
                {completed ? "✓" : `0${index + 1}`}
              </span>

              <span className="diagnostic-journey-copy">
                <strong>{item}</strong>
                <small>{stepDescriptions[index]}</small>
              </span>

              {active && <span className="diagnostic-journey-dot" />}
            </div>
          );
        })}
      </div>

      <div className="diagnostic-journey-foot">
        <span className="diagnostic-journey-foot-icon">✳</span>
        <p>
          Cada situación es distinta. La información nos ayudará a comprender
          mejor lo ocurrido.
        </p>
      </div>
    </aside>
  );
}

function OptionList({ options, value, onChange }) {
  return (
    <div className="diagnostic-options">
      {options.map((item, index) => (
        <button
          type="button"
          key={item}
          className={`diagnostic-option ${
            value === item ? "is-selected" : ""
          }`}
          onClick={() => onChange(item)}
          aria-pressed={value === item}
        >
          <span className="diagnostic-option-index">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="diagnostic-option-text">{item}</span>

          <span className="diagnostic-option-check">
            {value === item ? "✓" : "↗"}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function Diagnostico() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState("");

  const update = (field, value) => {
    setData((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const next = () => {
    const fields = ["situation", "time", "claim", "amount", "name"];
    const field = fields[step];

    if (!data[field]?.trim()) {
      setError("Selecciona una opción o completa el campo para continuar.");
      return;
    }

    if (step === 4 && !data.phone.trim() && !data.email.trim()) {
      setError("Indica al menos un medio de contacto: teléfono o correo.");
      return;
    }

    setError("");
    setStep((current) => Math.min(current + 1, 5));
  };

  const back = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
  };

  const buildMessage = () =>
    [
      "Hola, quiero solicitar orientación sobre mi caso.",
      "",
      `Situación: ${data.situation}`,
      `Cuándo ocurrió: ${data.time}`,
      `¿Lo reporté?: ${data.claim}`,
      `Monto aproximado: ${data.amount}`,
      `Nombre: ${data.name}`,
      `Teléfono: ${data.phone || "No proporcionado"}`,
      `Correo: ${data.email || "No proporcionado"}`,
      `Detalles: ${data.details || "No proporcionados"}`,
      "",
      "Entiendo que este diagnóstico es preliminar y no garantiza la recuperación del dinero.",
    ].join("\n");

  const submit = () => {
    const whatsappNumber = "5520870671";

    if (!whatsappNumber) {
      setError(
        "El formulario está listo, pero falta configurar el número oficial de WhatsApp de SAF."
      );
      return;
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      buildMessage()
    )}`;

    window.location.href = url;
  };

  const progress = step === 5 ? 100 : (step / 5) * 100;

  return (
    <div className="diagnostic-page">
      <Navbar />

      <main>
        <section className="diagnostic-hero">
          <div className="diagnostic-hero-pattern" />

          <div className="diagnostic-hero-inner">
            <span className="diagnostic-eyebrow">SAF / DIAGNÓSTICO</span>

            <h1>
              Entender tu caso
              <br />
              es el primer paso
              <br />
              <span>para avanzar.</span>
            </h1>

            <p>
              Cada situación es distinta. Cuéntanos qué ocurrió para
              organizar la información y explorar qué alternativas
              podrían ser adecuadas para tu caso.
            </p>

            <a href="#evaluacion" className="diagnostic-hero-button">
              Comenzar diagnóstico
              <span aria-hidden="true">↗</span>
            </a>

            <div className="diagnostic-note">
              Una evaluación preliminar no garantiza la recuperación del dinero.
            </div>
          </div>

          <div className="diagnostic-hero-art">
            <div className="diagnostic-art-orbit diagnostic-art-orbit-one" />
            <div className="diagnostic-art-orbit diagnostic-art-orbit-two" />

            <div className="diagnostic-art-caption">
              <span>SAF</span>
              <span>ORIENTACIÓN INICIAL</span>
            </div>

            <div className="diagnostic-art-main">
              <span className="diagnostic-art-symbol">✳</span>
              <span className="diagnostic-art-overline">
                ANÁLISIS DE TU SITUACIÓN
              </span>
              <h2>
                Primero,
                <br />
                escuchar.
                <br />
                <em>Después, evaluar.</em>
              </h2>

              <div className="diagnostic-art-bottom">
                <div className="diagnostic-art-bars">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <span>Una revisión individual</span>
              </div>
            </div>

            <div className="diagnostic-art-stamp">
              <span>SAF</span>
              <small>ORIENTACIÓN</small>
            </div>
          </div>

          <div className="diagnostic-hero-index">
            <span>01</span>
            <span>CONOCER · COMPRENDER · EXPLORAR</span>
          </div>
        </section>

        <section className="diagnostic-form-section" id="evaluacion">
          <div className="diagnostic-section-heading">
            <span className="diagnostic-eyebrow">
              DIAGNÓSTICO PRELIMINAR
            </span>

            <h2>Empecemos por entender tu situación.</h2>

            <p>
              Responde paso a paso. No necesitas compartir contraseñas,
              NIP, códigos de verificación ni datos de acceso bancario.
            </p>
          </div>

          <div className="diagnostic-workspace">
            <StepNavigation step={step} />

            <div className="diagnostic-main">
              <div className="diagnostic-card">
                <div className="diagnostic-card-top">
                  <div>
                    <span className="diagnostic-card-label">
                      {step < 5 ? "EVALUACIÓN EN CURSO" : "ETAPA COMPLETADA"}
                    </span>
                    <span className="diagnostic-card-step">
                      {step < 5 ? steps[step] : "Información preparada"}
                    </span>
                  </div>

                  <div className="diagnostic-card-count">
                    <strong>{String(Math.min(step + 1, 5)).padStart(2, "0")}</strong>
                    <span>/ 05</span>
                  </div>
                </div>

                <div
                  className="diagnostic-progress-track"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                  aria-label="Progreso del diagnóstico"
                >
                  <span style={{ width: `${progress}%` }} />
                </div>

                {step === 0 && (
                  <div className="diagnostic-step" key="situation">
                    <span className="diagnostic-step-kicker">
                      VAMOS A COMENZAR
                    </span>
                    <h3>¿Qué ocurrió con tu dinero?</h3>
                    <p>
                      Selecciona la opción que más se aproxime a tu situación.
                    </p>

                    <OptionList
                      options={situations}
                      value={data.situation}
                      onChange={(value) => update("situation", value)}
                    />
                  </div>
                )}

                {step === 1 && (
                  <div className="diagnostic-step" key="time">
                    <span className="diagnostic-step-kicker">
                      TIEMPO TRANSCURRIDO
                    </span>
                    <h3>¿Cuándo ocurrió?</h3>
                    <p>
                      El tiempo transcurrido puede ser relevante para analizar
                      los siguientes pasos.
                    </p>

                    <OptionList
                      options={timeOptions}
                      value={data.time}
                      onChange={(value) => update("time", value)}
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="diagnostic-step" key="claim">
                    <span className="diagnostic-step-kicker">
                      SEGUIMIENTO
                    </span>
                    <h3>¿Ya reportaste lo sucedido?</h3>
                    <p>
                      Por ejemplo, ante tu banco, la plataforma o la institución
                      correspondiente.
                    </p>

                    <OptionList
                      options={claimOptions}
                      value={data.claim}
                      onChange={(value) => update("claim", value)}
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="diagnostic-step" key="amount">
                    <span className="diagnostic-step-kicker">
                      MONTO INVOLUCRADO
                    </span>
                    <h3>¿Cuál es el monto aproximado?</h3>
                    <p>
                      Esta información nos ayuda a entender el alcance económico
                      de la situación.
                    </p>

                    <OptionList
                      options={amountOptions}
                      value={data.amount}
                      onChange={(value) => update("amount", value)}
                    />
                  </div>
                )}

                {step === 4 && (
                  <div className="diagnostic-step" key="contact">
                    <span className="diagnostic-step-kicker">
                      ÚLTIMA ETAPA
                    </span>
                    <h3>¿Cómo podemos contactarte?</h3>
                    <p>
                      Comparte los datos que quieras utilizar para dar
                      seguimiento a tu consulta.
                    </p>

                    <div className="diagnostic-fields">
                      <label>
                        Nombre
                        <input
                          type="text"
                          autoComplete="name"
                          value={data.name}
                          onChange={(event) => update("name", event.target.value)}
                          placeholder="Tu nombre"
                        />
                      </label>

                      <label>
                        Teléfono o WhatsApp
                        <input
                          type="tel"
                          autoComplete="tel"
                          value={data.phone}
                          onChange={(event) => update("phone", event.target.value)}
                          placeholder="Tu número de contacto"
                        />
                      </label>

                      <label>
                        Correo electrónico
                        <input
                          type="email"
                          autoComplete="email"
                          value={data.email}
                          onChange={(event) => update("email", event.target.value)}
                          placeholder="tucorreo@ejemplo.com"
                        />
                      </label>

                      <label>
                        Cuéntanos brevemente qué pasó (opcional)
                        <textarea
                          rows={4}
                          value={data.details}
                          onChange={(event) => update("details", event.target.value)}
                          placeholder="Puedes describir lo sucedido sin incluir contraseñas ni datos bancarios sensibles."
                        />
                      </label>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="diagnostic-complete" key="complete">
                    <div className="diagnostic-complete-heading">
                      <span className="diagnostic-complete-icon">✓</span>
                      <div>
                        <span className="diagnostic-step-kicker">
                          INFORMACIÓN ORGANIZADA
                        </span>
                        <h3>Ya tenemos la información inicial.</h3>
                      </div>
                    </div>

                    <p>
                      Revisa que los datos sean correctos. Al continuar,
                      podrás abrir WhatsApp con un mensaje preparado para que
                      decidas si deseas enviarlo.
                    </p>

                    <div className="diagnostic-summary">
                      <div className="diagnostic-summary-heading">
                        <span>RESUMEN DE TU CONSULTA</span>
                        <span>SAF</span>
                      </div>

                      <div className="diagnostic-summary-grid">
                        <div>
                          <small>Situación</small>
                          <p>{data.situation}</p>
                        </div>

                        <div>
                          <small>Fecha aproximada</small>
                          <p>{data.time}</p>
                        </div>

                        <div>
                          <small>Reporte</small>
                          <p>{data.claim}</p>
                        </div>

                        <div>
                          <small>Monto</small>
                          <p>{data.amount}</p>
                        </div>

                        <div>
                          <small>Nombre</small>
                          <p>{data.name}</p>
                        </div>

                        {data.phone && (
                          <div>
                            <small>Teléfono</small>
                            <p>{data.phone}</p>
                          </div>
                        )}

                        {data.email && (
                          <div>
                            <small>Correo</small>
                            <p>{data.email}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="diagnostic-disclaimer">
                      Este formulario organiza la información inicial; no constituye
                      una determinación legal ni asegura que sea posible recuperar el dinero.
                    </p>
                  </div>
                )}

                {error && (
                  <p className="diagnostic-error" role="alert">
                    {error}
                  </p>
                )}

                <div className="diagnostic-actions">
                  {step > 0 && (
                    <button
                      type="button"
                      className="diagnostic-back"
                      onClick={back}
                    >
                      <span aria-hidden="true">←</span> Anterior
                    </button>
                  )}

                  {step < 4 && (
                    <button
                      type="button"
                      className="diagnostic-next"
                      onClick={next}
                    >
                      Continuar <span aria-hidden="true">→</span>
                    </button>
                  )}

                  {step === 4 && (
                    <button
                      type="button"
                      className="diagnostic-next"
                      onClick={next}
                    >
                      Revisar respuestas <span aria-hidden="true">→</span>
                    </button>
                  )}

                  {step === 5 && (
                    <>
                      <button
                        type="button"
                        className="diagnostic-back"
                        onClick={() => {
                          setError("");
                          setStep(4);
                        }}
                      >
                        Editar respuestas
                      </button>

                      <button
                        type="button"
                        className="diagnostic-next diagnostic-whatsapp"
                        onClick={submit}
                      >
                        Continuar a WhatsApp
                        <span aria-hidden="true">↗</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              <p className="diagnostic-privacy-note">
                Tu mensaje no se envía automáticamente. No incluyas contraseñas,
                NIP, tokens ni códigos de seguridad.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
