// src/App.jsx
import React from "react";
import "./App.css";
import Background from "./components/Background"; // Importar destellos
import Header from "./components/Header";
import Details from "./components/Details";
import Rsvp from "./components/Rsvp";

function App() {
  return (
    <>
      <Background /> {/* Fondo fuera del card */}
      <div className="invitation-card">
        <Header />
        <Details />
        <Rsvp />

        <footer className="mt-12 pt-6 border-t border-gray-200 text-xs text-gray-400">
          #BrendaYEnrique2025
        </footer>
      </div>
    </>
  );
}

export default App;
