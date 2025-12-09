import React from "react";
import "./App.css";
/* Asegúrate de tener Background.jsx y Background.css del paso anterior */
import Background from "./components/Background";
import Header from "./components/Header";
import Details from "./components/Details";
import Rsvp from "./components/Rsvp";

function App() {
  return (
    <>
      <Background />

      <div className="invitation-card">
        <Header />
        <Details />
        <Rsvp />

        <footer
          className="mt-16 pt-6 border-t border-[#cfb9864d] text-xs tracking-widest"
          style={{ color: "var(--text-light)" }}
        >
          BRENDA & ENRIQUE • 2025
        </footer>
      </div>
    </>
  );
}

export default App;
