
import LogoPlaceholder from "./LogoPlaceholder";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.footerMain}`}>

        {/* Marca */}
        <div className={styles.footerBrand}>
          <LogoPlaceholder />

          <span className={styles.brandCaption}>
            
          </span>

          <p>
            Somos una consultoría privada. No somos autoridad ni
            estamos afiliados a ninguna autoridad, institución o banco.
            No prometemos resultados: cada caso se evalúa por separado
            y te explicamos con claridad si conviene continuar.
          </p>

          <div className={styles.schedule}>
            <span className={styles.scheduleDot}></span>
            Lunes a viernes · 9:00 a 19:00 h
            <span className={styles.scheduleTime}>
              Hora de la Ciudad de México
            </span>
          </div>
        </div>

        {/* Navegación */}
        <nav className={styles.footerLinks} aria-label="Navegación del pie de página">
          <strong>Explora</strong>

          <a href="/#nosotros">Nosotros</a>
          <a href="/#servicios">Servicios</a>
          <a href="/#proceso">Cómo funciona</a>
          <a href="/#contacto">Contacto</a>

          <div className={styles.legalLinks}>
            <a href="/aviso-de-privacidad">
              Aviso de privacidad
            </a>
            <a href="/terminos-y-condiciones">
              Términos y condiciones
            </a>
          </div>
        </nav>

        {/* Contacto */}
        <div className={styles.footerContact}>
          <span className={styles.contactEyebrow}>
            ESTAMOS PARA ORIENTARTE
          </span>

          <strong>Hablemos de tu situación.</strong>

          <p>
            Cuéntanos qué está pasando. Podemos conocer tu caso
            y explicarte las alternativas disponibles.
          </p>

          <a href="/#contacto" className={styles.contactButton}>
            Contactar con un asesor
            <span>↗</span>
          </a>
        </div>

      </div>

      {/* Franja inferior */}
      <div className={styles.footerDivider}></div>

      <div className={`container ${styles.footerBottom}`}>
        <span>
          © {new Date().getFullYear()} SAF. Todos los derechos reservados.
        </span>

        <a href="/#inicio">
          Volver al inicio ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
