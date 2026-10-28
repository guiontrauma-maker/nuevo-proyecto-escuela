
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Preguntas from "./pages/Preguntas.jsx";
import Diagnostico from "./pages/Diagnostico.jsx";
import "./index.css";

const path = window.location.pathname.replace(/\/+$/, "") || "/";

let Page = App;

if (path === "/preguntas") {
  Page = Preguntas;
} else if (path === "/diagnostico") {
  Page = Diagnostico;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
