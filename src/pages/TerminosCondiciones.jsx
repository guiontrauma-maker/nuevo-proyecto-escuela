
import Navbar from "../components/Navbar";
import "./TerminosCondiciones.css";

const secciones = [
  {
    id: "servicio",
    titulo: "¿Qué es Ruta Capital?",
    contenido: (
      <>
        <p>
          Ruta Capital es una iniciativa privada de orientación y
          acompañamiento para personas que desean explorar opciones
          relacionadas con sus fondos, recursos, inversiones, cuentas,
          saldos u otros activos.
        </p>
        <p>
          El alcance de cada consulta depende de la información disponible,
          de las características de la situación y de los servicios que
          efectivamente se hayan acordado con la persona interesada.
        </p>
      </>
    ),
  },
  {
    id: "alcance",
    titulo: "Alcance de nuestros servicios",
    contenido: (
      <>
        <p>
          La orientación puede incluir la revisión inicial de la información
          proporcionada, la identificación de alternativas que puedan
          explorarse y la explicación de posibles siguientes pasos.
        </p>
        <p>
          El alcance específico de cualquier acompañamiento se comunicará
          antes de comenzar. No todas las situaciones permiten las mismas
          alternativas y podría ocurrir que no exista una opción viable
          para continuar.
        </p>
      </>
    ),
  },
  {
    id: "sin-garantias",
    titulo: "Sin garantía de resultados",
    contenido: (
      <>
        <p>
          Cada situación es diferente. Ruta Capital no garantiza la
          recuperación de dinero, fondos, inversiones, bienes ni ningún
          otro activo, ni promete un resultado, plazo o desenlace específico.
        </p>
        <p>
          Cualquier estimación u orientación se basa en la información
          disponible en ese momento y puede cambiar si aparecen nuevos
          datos o circunstancias.
        </p>
      </>
    ),
  },
  {
    id: "informacion",
    titulo: "Información que proporcionas",
    contenido: (
      <>
        <p>
          Al utilizar nuestros canales de contacto, te comprometes a
          proporcionar información que, según tu conocimiento, sea
          correcta y suficiente para explicar tu consulta.
        </p>
        <p>
          No compartas contraseñas, códigos de verificación, claves de
          acceso ni datos bancarios confidenciales. Si necesitamos
          información adicional, te explicaremos qué se requiere y para qué.
        </p>
        <p>
          El tratamiento de los datos personales se describe en nuestro{" "}
          <a href="/aviso-de-privacidad">Aviso de privacidad</a>.
        </p>
      </>
    ),
  },
  {
    id: "contacto",
    titulo: "Contacto y comunicaciones",
    contenido: (
      <>
        <p>
          Puedes iniciar una consulta mediante el formulario del sitio.
          Según la configuración disponible, el formulario puede preparar
          un mensaje para WhatsApp, que podrás revisar antes de decidir
          si deseas enviarlo.
        </p>
        <p>
          Enviar una consulta no significa que se haya aceptado un servicio
          ni que exista un compromiso de obtener un resultado. La
          disponibilidad de atención y los pasos posteriores se comunicarán
          de manera individual.
        </p>
      </>
    ),
  },
  {
    id: "costos",
    titulo: "Costos y condiciones de contratación",
    contenido: (
      <>
        <p>
          Si un servicio tiene un costo, sus condiciones deberán comunicarse
          con claridad antes de que decidas contratarlo, incluyendo el
          alcance, el importe y la forma de pago que correspondan.
        </p>
        <p>
          No consideres aceptado un servicio de pago únicamente por haber
          enviado el formulario de contacto. Cualquier acuerdo adicional
          deberá confirmarse de manera expresa.
        </p>
      </>
    ),
  },
  {
    id: "responsabilidades",
    titulo: "Responsabilidades de las personas usuarias",
    contenido: (
      <>
        <p>
          Al utilizar este sitio, te comprometes a proporcionar datos
          veraces, utilizar los canales de contacto de manera respetuosa
          y no intentar interferir con el funcionamiento o la seguridad
          de la página.
        </p>
        <p>
          Las decisiones que tomes a partir de la información recibida
          deben considerar tus circunstancias particulares. Puedes pedir
          aclaraciones cuando no comprendas una recomendación o una
          condición del servicio.
        </p>
      </>
    ),
  },
  {
    id: "terceros",
    titulo: "Servicios de terceros",
    contenido: (
      <>
        <p>
          El sitio puede enlazar a servicios externos, como WhatsApp.
          Esos servicios son operados por terceros y se rigen por sus
          propias condiciones y políticas.
        </p>
        <p>
          Ruta Capital no controla la disponibilidad ni todos los aspectos
          del funcionamiento de plataformas externas. Si decides utilizarlas,
          revisa sus condiciones antes de compartir información.
        </p>
      </>
    ),
  },
  {
    id: "disponibilidad",
    titulo: "Disponibilidad del sitio",
    contenido: (
      <>
        <p>
          Procuramos mantener la página disponible y actualizada, pero
          pueden presentarse interrupciones por mantenimiento, fallas
          técnicas u otras circunstancias.
        </p>
        <p>
          Podemos actualizar el contenido, las funciones o la presentación
          del sitio para mejorar su funcionamiento. Los cambios que afecten
          condiciones de un servicio previamente acordado deberán tratarse
          de forma apropiada con las personas involucradas.
        </p>
      </>
    ),
  },
  {
    id: "actualizaciones",
    titulo: "Actualizaciones de estos términos",
    contenido: (
      <>
        <p>
          Estos términos pueden actualizarse cuando cambien los servicios,
          el funcionamiento del sitio o las condiciones de atención.
          La versión vigente estará disponible en esta página.
        </p>
        <p>
          Cuando una actualización requiera una comunicación específica,
          se informará por el medio que corresponda.
        </p>
      </>
    ),
  },
  {
    id: "contacto-final",
    titulo: "Contacto",
    contenido: (
      <>
        <p>
          Si tienes preguntas sobre estos términos o sobre el alcance de
          nuestros servicios, puedes comunicarte con nosotros mediante
          el formulario de contacto disponible en el sitio.
        </p>
        <p>
          Para solicitudes relacionadas con tus datos personales, consulta
          el <a href="/aviso-de-privacidad">Aviso de privacidad</a>.
        </p>
      </>
    ),
  },
];

export default function TerminosCondiciones() {
  return (
    <>
      <Navbar />

      <main className="terms-page">
        <section className="terms-hero">
          <div className="terms-container">
            <span className="terms-eyebrow">
              RUTA CAPITAL · CLARIDAD Y CONFIANZA
            </span>

            <h1>
              Términos y <span>condiciones.</span>
            </h1>

            <p>
              Queremos que tengas claro qué puedes esperar de nuestros
              servicios, cómo funciona el acompañamiento y cuáles son
              sus alcances antes de iniciar una consulta.
            </p>

            <div className="terms-update">
              <span />
              Última actualización: [día, mes y año]
            </div>
          </div>
        </section>

        <section className="terms-content-section">
          <div className="terms-container terms-layout">
            <aside className="terms-sidebar">
              <span className="terms-sidebar-label">
                EN ESTA PÁGINA
              </span>

              <nav aria-label="Secciones de términos y condiciones">
                {secciones.map((seccion) => (
                  <a key={seccion.id} href={`#${seccion.id}`}>
                    {seccion.titulo}
                  </a>
                ))}
              </nav>

              <div className="terms-sidebar-note">
                <span aria-hidden="true">✳</span>
                <p>
                  Cada situación es diferente. La orientación no garantiza
                  la recuperación de activos.
                </p>
              </div>
            </aside>

            <article className="terms-document">
              <div className="terms-document-heading">
                <span className="terms-document-mark">RC</span>
                <div>
                  <span className="terms-document-kicker">
                    ANTES DE COMENZAR
                  </span>
                  <h2>Trabajemos con claridad</h2>
                </div>
              </div>

              <p className="terms-intro">
                Estos términos describen las condiciones generales de uso
                del sitio web de Ruta Capital. Al navegar por la página,
                puedes consultar su contenido; el envío de una consulta
                no implica por sí solo la contratación de un servicio.
                Cualquier servicio específico deberá tener su propio alcance
                y condiciones claramente comunicados.
              </p>

              {secciones.map((seccion) => (
                <section
                  className="terms-article-section"
                  id={seccion.id}
                  key={seccion.id}
                >
                  <h2>{seccion.titulo}</h2>
                  <div className="terms-article-body">
                    {seccion.contenido}
                  </div>
                </section>
              ))}

              <div className="terms-closing">
                <span aria-hidden="true">✳</span>
                <p>
                  Nuestro objetivo es ofrecerte información clara y un
                  acompañamiento transparente para que puedas valorar
                  tus opciones con mayor confianza.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="terms-contact-strip">
          <div className="terms-container terms-contact-inner">
            <div>
              <span className="terms-eyebrow">
                ¿QUIERES CONOCER TUS OPCIONES?
              </span>
              <h2>Hablemos de tu situación.</h2>
            </div>

            <a href="/#contacto" className="terms-contact-button">
              Ir a contacto <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="terms-footer">
        <div className="terms-container terms-footer-inner">
          <a className="terms-footer-brand" href="/">
            RUTA CAPITAL
          </a>

          <div className="terms-footer-links">
            <a href="/">Inicio</a>
            <a href="/aviso-de-privacidad">Aviso de privacidad</a>
          </div>

          <span>© {new Date().getFullYear()} Ruta Capital</span>
        </div>
      </footer>
    </>
  );
}
