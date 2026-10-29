import LogoPlaceholder from "./LogoPlaceholder";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.footerMain}`}>
        <div className={styles.footerBrand}>
          <LogoPlaceholder />

          <p>
            Somos una consultoría privada. No somos autoridad ni
            estamos afiliados a ninguna autoridad, institución o banco.
            No prometemos resultados: cada caso se evalúa por separado
            y te explicamos con claridad si conviene continuar.
            <br />
            <br />
            Lunes a viernes de 9:00 a 19:00, hora de la Ciudad de México.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <strong>Explora</strong>
          <a href="/#nosotros">Nosotros</a>
          <a href="/#servicios">Servicios</a>
          <a href="/#proceso">Cómo funciona</a>
          <a href="/#contacto">Contacto</a>
          <a href="/aviso-de-privacidad">
            Aviso de privacidad
          </a>
          <a href="/terminos-y-condiciones">
            Términos y condiciones
          </a>
        </div>

        <div className={styles.footerContact}>
          <strong>Hablemos de tu situación</strong>
          <p>Estamos listos para conocer tu consulta.</p>

          <a href="/#contacto" className={styles.textLink}>
            Contactar con un asesor <span>↗</span>
          </a>
        </div>
      </div>

      <div className={`container ${styles.footerBottom}`}>
        <span>
          © {new Date().getFullYear()} Ruta Capital. Todos los derechos
          reservados.
        </span>

        <a href="/#inicio">Volver al inicio ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
