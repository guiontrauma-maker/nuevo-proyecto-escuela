import Navbar from "../components/Navbar";
import "./AvisoPrivacidad.css";

const secciones = [
  {
    titulo: "¿Quién es responsable de tus datos?",
    contenido: (
      <>
        <p>
          Ruta Capital es el nombre con el que se presenta este sitio web.
          La identidad completa de la persona física o moral responsable
          del tratamiento de los datos y su domicilio deberán indicarse
          antes de publicar este aviso.
        </p>
        <p>
          <strong>Responsable:</strong> [Nombre completo o razón social].
          <br />
          <strong>Domicilio:</strong> [Domicilio del responsable].
          <br />
          <strong>Contacto de privacidad:</strong> [Correo electrónico de contacto].
        </p>
      </>
    ),
  },
  {
    titulo: "¿Qué información podemos recabar?",
    contenido: (
      <>
        <p>
          Cuando utilizas nuestro formulario de contacto, puedes proporcionar
          los siguientes datos:
        </p>
        <ul>
          <li>Nombre completo.</li>
          <li>Número telefónico de contacto.</li>
          <li>Correo electrónico, si decides compartirlo.</li>
          <li>Tipo de activo sobre el que solicitas orientación.</li>
          <li>Descripción de tu situación y de la orientación que buscas.</li>
        </ul>
        <p>
          Te pedimos compartir únicamente la información necesaria para
          atender tu consulta. No incluyas contraseñas, claves de acceso,
          números completos de tarjetas ni información bancaria confidencial.
          Evita también incluir datos personales sensibles en la descripción.
        </p>
      </>
    ),
  },
  {
    titulo: "¿Para qué utilizamos tus datos?",
    contenido: (
      <>
        <p>La información que proporcionas puede utilizarse para:</p>
        <ul>
          <li>Identificar y atender tu solicitud de contacto.</li>
          <li>Conocer de forma general la situación que nos compartes.</li>
          <li>Comunicarnos contigo por los medios que hayas proporcionado.</li>
          <li>Dar seguimiento a tu consulta, cuando corresponda.</li>
        </ul>
        <p>
          Cualquier finalidad adicional deberá informarse de manera clara
          y, cuando corresponda, contar con tu consentimiento.
        </p>
      </>
    ),
  },
  {
    titulo: "¿Cómo se utiliza WhatsApp?",
    contenido: (
      <>
        <p>
          En la versión actual del sitio, al completar el formulario se
          prepara un mensaje para WhatsApp. La página no lo envía
          automáticamente: tú puedes revisar el contenido y decidir si
          deseas enviarlo.
        </p>
        <p>
          Si eliges enviarlo, la información que incluyas será tratada
          también por WhatsApp conforme a sus propias condiciones y
          políticas de privacidad. Te recomendamos revisarlas antes de
          compartir información.
        </p>
        <p>
          No compartas información que no sea necesaria para tu consulta.
        </p>
      </>
    ),
  },
  {
    titulo: "¿Compartimos tus datos con terceros?",
    contenido: (
      <>
        <p>
          Ruta Capital no debe utilizar tus datos para finalidades distintas
          de las informadas en este aviso. Si fuera necesario compartirlos
          con terceros, se deberá explicar quién los recibirá, para qué
          se utilizarán y bajo qué condiciones, así como obtener el
          consentimiento cuando corresponda.
        </p>
        <p>
          El uso de servicios externos que elijas para comunicarte con
          nosotros puede estar sujeto a sus propias políticas de privacidad.
        </p>
      </>
    ),
  },
  {
    titulo: "¿Cómo protegemos y conservamos tu información?",
    contenido: (
      <>
        <p>
          El responsable deberá implementar medidas administrativas,
          técnicas y físicas razonables para proteger los datos personales
          contra el acceso, uso, alteración, pérdida o divulgación no
          autorizados.
        </p>
        <p>
          Los datos deberán conservarse únicamente durante el tiempo
          necesario para cumplir las finalidades informadas y atender las
          obligaciones que resulten aplicables. El plazo concreto de
          conservación deberá definirse de acuerdo con las operaciones
          reales de Ruta Capital.
        </p>
      </>
    ),
  },
  {
    titulo: "Tus derechos sobre los datos personales",
    contenido: (
      <>
        <p>
          Puedes solicitar el ejercicio de tus derechos de acceso,
          rectificación, cancelación u oposición, conocidos como derechos
          ARCO, conforme a las disposiciones aplicables.
        </p>
        <p>
          Para presentar una solicitud, utiliza el siguiente medio de
          contacto, que deberá completarse con los datos oficiales del
          responsable:
        </p>
        <p>
          <strong>Correo para solicitudes de privacidad:</strong>{" "}
          [Correo electrónico de privacidad].
        </p>
        <p>
          El procedimiento deberá indicar la información necesaria para
          identificarte, describir tu solicitud y, cuando corresponda,
          acreditar tu identidad o representación. Los plazos de atención
          serán los establecidos en la normativa aplicable.
        </p>
      </>
    ),
  },
  {
    titulo: "¿Cómo puedes limitar el uso de tus datos?",
    contenido: (
      <>
        <p>
          Puedes comunicarte con el responsable para solicitar que se limite
          el uso o la divulgación de tus datos personales en los casos
          procedentes. Utiliza el medio de contacto indicado en este aviso.
        </p>
      </>
    ),
  },
  {
    titulo: "Cambios a este aviso de privacidad",
    contenido: (
      <>
        <p>
          Este aviso podrá actualizarse para reflejar cambios en las
          prácticas de tratamiento de datos, en los servicios ofrecidos
          o en las disposiciones aplicables.
        </p>
        <p>
          La versión vigente se publicará en esta página, indicando la
          fecha de su última actualización.
        </p>
      </>
    ),
  },
];

export default function AvisoPrivacidad() {
  return (
    <>
      <Navbar />

      <main className="privacy-page">
        <section className="privacy-hero" id="inicio">
          <div className="privacy-container">
            <span className="privacy-eyebrow">
              RUTA CAPITAL · TRANSPARENCIA
            </span>

            <h1>
              Aviso de <span>privacidad.</span>
            </h1>

            <p>
              Tu información merece cuidado, claridad y un uso responsable.
              Aquí te explicamos cómo se contempla el tratamiento de tus
              datos cuando te pones en contacto con nosotros.
            </p>

            <div className="privacy-update">
              <span className="privacy-update-dot" />
              Última actualización: [día, mes y año]
            </div>
          </div>
        </section>

        <section className="privacy-content-section">
          <div className="privacy-container privacy-layout">
            <aside className="privacy-sidebar">
              <span className="privacy-sidebar-label">
                EN ESTA PÁGINA
              </span>

              <nav aria-label="Secciones del aviso de privacidad">
                {secciones.map((seccion, index) => (
                  <a
                    key={seccion.titulo}
                    href={`#privacidad-${index}`}
                  >
                    {seccion.titulo}
                  </a>
                ))}
              </nav>

              <div className="privacy-sidebar-note">
                <span aria-hidden="true">✳</span>
                <p>
                  Comparte solamente la información necesaria para
                  atender tu consulta.
                </p>
              </div>
            </aside>

            <article className="privacy-document">
              <div className="privacy-document-intro">
                <span className="privacy-document-mark">RC</span>

                <div>
                  <span className="privacy-document-kicker">
                    TU INFORMACIÓN, CON CLARIDAD
                  </span>
                  <h2>Tu privacidad importa</h2>
                </div>
              </div>

              <p className="privacy-intro-text">
                Este aviso describe las prácticas previstas para el
                tratamiento de los datos personales que compartas mediante
                el sitio de Ruta Capital. Antes de publicarlo como versión
                definitiva, deberán completarse los datos del responsable
                y verificarse las prácticas reales de manejo y conservación
                de la información.
              </p>

              {secciones.map((seccion, index) => (
                <section
                  className="privacy-article-section"
                  id={`privacidad-${index}`}
                  key={seccion.titulo}
                >
                  <h2>{seccion.titulo}</h2>

                  <div className="privacy-article-body">
                    {seccion.contenido}
                  </div>
                </section>
              ))}

              <div className="privacy-closing">
                <span aria-hidden="true">✳</span>
                <p>
                  En Ruta Capital buscamos mantener una comunicación clara
                  sobre la información que compartes y el uso que se le da.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="privacy-contact-strip">
          <div className="privacy-container privacy-contact-inner">
            <div>
              <span className="privacy-eyebrow">
                ¿TIENES ALGUNA DUDA?
              </span>

              <h2>Estamos para escucharte.</h2>
            </div>

            <a href="/#contacto" className="privacy-back-button">
              Ir a contacto <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}