
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const path = window.location.pathname.replace(/\/+$/, "") || "/";

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
            aria-hidden="true"
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
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          <a
            href="/"
            onClick={closeMenu}
            aria-current={path === "/" ? "page" : undefined}
          >
            Inicio
          </a>

          <a
            href="/servicios"
            onClick={closeMenu}
            aria-current={path === "/servicios" ? "page" : undefined}
          >
            Servicios
          </a>

          <a
            href="/preguntas"
            onClick={closeMenu}
            aria-current={path === "/preguntas" ? "page" : undefined}
          >
            Preguntas
          </a>

          <a
            href="/diagnostico"
            onClick={closeMenu}
            aria-current={path === "/diagnostico" ? "page" : undefined}
          >
            Diagnóstico
          </a>
        </nav>
      </div>
    </header>
  );
}
