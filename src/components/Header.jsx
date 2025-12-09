import React from "react";

const Header = () => {
  return (
    <header className="fade-in">
      <p className="font-serif text-gold italic mb-8 mt-4">
        "El amor es escribir juntos la historia."
      </p>

      <h1 className="font-serif text-5xl font-bold mb-6 gold-text-effect leading-tight">
        Brenda
        <br />&<br />
        Enrique
      </h1>

      <p className="uppercase tracking-widest text-gray-500 text-sm">
        ¡Nos Casamos!
      </p>

      <div className="divider">✦</div>
    </header>
  );
};

export default Header;
