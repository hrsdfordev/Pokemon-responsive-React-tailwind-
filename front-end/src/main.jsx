import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PokemonContextProvider } from "./contexts/index.js";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <Router>
        <App />
      </Router>
    </PokemonContextProvider>
  </React.StrictMode>
);
