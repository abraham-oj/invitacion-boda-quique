import React from "react";

const Header = () => {
  return (
    <header>
      <p
        className="font-script text-3xl mb-6 mt-2"
        style={{ color: "var(--gold-primary)" }}
      >
        "El amor es escribir juntos la historia"
      </p>

      <h1 className="font-serif text-5xl font-bold mb-6 gold-text-effect leading-tight">
        Brenda
        <br />
        <span style={{ fontSize: "2.5rem", verticalAlign: "middle" }}>&</span>
        <br />
        Enrique
      </h1>

      <p
        className="uppercase tracking-[4px] text-sm"
        style={{ color: "var(--text-light)" }}
      >
        ¡Nos Casamos!
      </p>

      <div className="divider">✦</div>
    </header>
  );
};

export default Header;
