import React from "react";

const Details = () => {
  return (
    <section className="fade-in">
      {/* Fecha */}
      <div className="border-t border-b border-yellow-600/30 py-6 my-6">
        <h2 className="font-serif text-3xl font-semibold text-gray-800">
          SÁBADO 13 DIC
        </h2>
        <p className="text-gold text-xl mt-2">3:00 PM | 2025</p>
      </div>

      {/* Ubicación */}
      <div className="my-8">
        <h3 className="font-bold text-lg mb-2">
          Salón de Eventos El Resurgimiento
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          Av. Juan de Palafox y Mendoza #2616
          <br />
          Col. El Resurgimiento, Puebla.
        </p>
        <a
          href="https://goo.gl/maps/TuLinkAqui"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Ver Ubicación
        </a>
      </div>

      {/* Foto de los Novios */}
      <img
        src="/images/novios.jpg"
        alt="Brenda y Enrique"
        className="photo-frame"
      />

      <p className="text-gold italic text-lg my-6">
        Ceremonia, Recepción y Banquete
      </p>
    </section>
  );
};

export default Details;
