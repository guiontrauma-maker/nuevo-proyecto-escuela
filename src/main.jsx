
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Preguntas from "./pages/Preguntas.jsx";
import "./index.css";

const path = window.location.pathname.replace(/\/+$/, "") || "/";

const Page = path === "/preguntas" ? Preguntas : App;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
