import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./fonts/Montserrat-250.ttf";
import "./fonts/Montserrat-600.ttf";
import "./fonts/Montserrat-400.ttf";
import "./fonts/Montserrat-italic-600.ttf";
import "./index.css";
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
