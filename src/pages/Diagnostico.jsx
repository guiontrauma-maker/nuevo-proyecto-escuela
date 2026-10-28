
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

export default function Diagnostico() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState("");

  const update = (field, value) => {
    setData((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const steps = [
    "Tu situación",
    "Cuándo ocurrió",
    "Reporte del caso",
    "Monto involucrado",
    "Tus datos",
  ];

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
    const whatsappNumber = "";

    if (!whatsappNumber) {
      setError(
        "El formulario está listo, pero falta configurar el número oficial de WhatsApp de Ruta Capital."
      );
      return;
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildMessage())}`;
    window.location.href = url;
  };

  return (
    <div className="diagnostic-page">
      <Navbar />

      <main>
        

<section className="diagnostic-hero">
  <div className="diagnostic-hero-inner">
    <span className="diagnostic-eyebrow">
      RUTA CAPITAL / DIAGNÓSTICO
    </span>

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
      Comenzar diagnóstico <span aria-hidden="true">↗</span>
    </a>

    <div className="diagnostic-note">
      Una evaluación preliminar no garantiza la recuperación del dinero.
    </div>
  </div>

  <div className="diagnostic-visual">
    <div className="diagnostic-visual-top">
      <span>RUTA CAPITAL</span>
      <span>Orientación inicial</span>
    </div>

    <div className="diagnostic-visual-line" />

    <span className="diagnostic-visual-label">
      ANÁLISIS DE TU SITUACIÓN
    </span>

    <h2>Primero, escuchar.<br />Después, evaluar.</h2>

    <div className="diagnostic-visual-items">
      <div>
        <span className="diagnostic-visual-icon">↗</span>
        <span>Qué sucedió</span>
      </div>
      <div>
        <span className="diagnostic-visual-icon">⌁</span>
        <span>Información disponible</span>
      </div>
      <div>
        <span className="diagnostic-visual-icon">◇</span>
        <span>Posibles alternativas</span>
      </div>
    </div>

    <div className="diagnostic-visual-bottom">
      Cada caso requiere una revisión individual.
    </div>
  </div>
</section>


        <section className="diagnostic-form-section" id="evaluacion">
          <div className="diagnostic-section-heading">
            <span className="diagnostic-eyebrow">DIAGNÓSTICO PRELIMINAR</span>
            <h2>Empecemos por entender tu situación.</h2>
            <p>
              Responde paso a paso. No necesitas compartir contraseñas,
              NIP, códigos de verificación ni datos de acceso bancario.
            </p>
          </div>

          <div className="diagnostic-card">
            <div className="diagnostic-progress-header">
              <span>
                {step < 5 ? steps[step] : "Información preparada"}
              </span>
              <span>{step < 5 ? `Paso ${step + 1} de 5` : "Finalizado"}</span>
            </div>

            <div
              className="diagnostic-progress-track"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={5}
              aria-valuenow={step}
              aria-label="Progreso del diagnóstico"
            >
              <span
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>

            {step === 0 && (
              <div className="diagnostic-step">
                <h3>¿Qué ocurrió con tu dinero?</h3>
                <p>Selecciona la opción que más se aproxime a tu situación.</p>

                <div className="diagnostic-options">
                  {situations.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={`diagnostic-option ${
                        data.situation === item ? "is-selected" : ""
                      }`}
                      onClick={() => update("situation", item)}
                    >
                      <span className="diagnostic-option-radio" />
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="diagnostic-step">
                <h3>¿Cuándo ocurrió?</h3>
                <p>El tiempo transcurrido puede ser relevante para analizar los siguientes pasos.</p>

                <div className="diagnostic-options">
                  {timeOptions.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={`diagnostic-option ${
                        data.time === item ? "is-selected" : ""
                      }`}
                      onClick={() => update("time", item)}
                    >
                      <span className="diagnostic-option-radio" />
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="diagnostic-step">
                <h3>¿Ya reportaste lo sucedido?</h3>
                <p>Por ejemplo, ante tu banco, la plataforma o la institución correspondiente.</p>

                <div className="diagnostic-options">
                  {claimOptions.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={`diagnostic-option ${
                        data.claim === item ? "is-selected" : ""
                      }`}
                      onClick={() => update("claim", item)}
                    >
                      <span className="diagnostic-option-radio" />
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="diagnostic-step">
                <h3>¿Cuál es el monto aproximado?</h3>
                <p>Esta información nos ayuda a entender el alcance económico de la situación.</p>

                <div className="diagnostic-options">
                  {amountOptions.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={`diagnostic-option ${
                        data.amount === item ? "is-selected" : ""
                      }`}
                      onClick={() => update("amount", item)}
                    >
                      <span className="diagnostic-option-radio" />
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="diagnostic-step">
                <h3>¿Cómo podemos contactarte?</h3>
                <p>Comparte los datos que quieras utilizar para dar seguimiento a tu consulta.</p>

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
              <div className="diagnostic-complete">
                <span className="diagnostic-complete-icon">✓</span>
                <h3>Ya tenemos la información inicial.</h3>
                <p>
                  Revisa que los datos sean correctos. Al continuar, podrás
                  abrir WhatsApp con un mensaje preparado para que decidas
                  si deseas enviarlo.
                </p>

                <div className="diagnostic-summary">
                  <p><strong>Situación:</strong> {data.situation}</p>
                  <p><strong>Fecha aproximada:</strong> {data.time}</p>
                  <p><strong>Reporte:</strong> {data.claim}</p>
                  <p><strong>Monto:</strong> {data.amount}</p>
                  <p><strong>Nombre:</strong> {data.name}</p>
                  {data.phone && <p><strong>Teléfono:</strong> {data.phone}</p>}
                  {data.email && <p><strong>Correo:</strong> {data.email}</p>}
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
                  ← Anterior
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
                    className="diagnostic-next"
                    onClick={submit}
                  >
                    Continuar a WhatsApp <span aria-hidden="true">↗</span>
                  </button>
                </>
              )}
            </div>
          </div>

          <p className="diagnostic-privacy-note">
            Tu mensaje no se envía automáticamente. No incluyas contraseñas,
            NIP, tokens ni códigos de seguridad.
          </p>
        </section>
      </main>

      <footer className="diagnostic-footer">
        <a href="/" className="diagnostic-footer-brand">RUTA CAPITAL</a>
        <span>Orientación y acompañamiento</span>
      </footer>
    </div>
  );
}
