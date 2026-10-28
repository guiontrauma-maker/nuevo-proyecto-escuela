
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="navbar-inner">
        <a
          className="brand"
          href="/"
          onClick={closeMenu}
          aria-label="Ruta Capital, inicio"
        >
          <span
            className="brand-mark logo-placeholder"
            aria-label="Espacio reservado para el logo"
          >
            <span />
            <span />
            <span />
          </span>

          <span className="brand-copy">
            <strong>RUTA CAPITAL</strong>
            <small>Orientación y acompañamiento</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="/" onClick={closeMenu}>
            Inicio
          </a>
          <a
            href="/preguntas"
            onClick={closeMenu}
            aria-current={
              window.location.pathname.replace(/\/+$/, "") === "/preguntas"
                ? "page"
                : undefined
            }
          >
            Preguntas
          </a>
          <a href="/#servicios" onClick={closeMenu}>
            Servicios
          </a>
          <a href="/#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
