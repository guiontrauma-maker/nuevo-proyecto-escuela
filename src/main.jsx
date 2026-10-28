
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Preguntas from "./pages/Preguntas.jsx";
import Diagnostico from "./pages/Diagnostico.jsx";
import AvisoPrivacidad from "./pages/AvisoPrivacidad.jsx";
import TerminosCondiciones from "./pages/TerminosCondiciones.jsx";
import "./index.css";

const path = window.location.pathname.replace(/\/+$/, "") || "/";

function getPage() {
  if (path === "/preguntas") {
    return <Preguntas />;
  }

  if (path === "/diagnostico") {
    return <Diagnostico />;
  }

  if (path === "/aviso-de-privacidad") {
    return <AvisoPrivacidad />;
  }

  if (path === "/terminos-y-condiciones") {
    return <TerminosCondiciones />;
  }

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>{getPage()}</StrictMode>
);
