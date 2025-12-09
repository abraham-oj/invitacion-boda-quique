import React from "react";

const Details = () => {
  return (
    <section>
      {/* Bloque de Fecha */}
      <div className="py-6 my-8 border-t border-b border-[#cfb9864d]">
        <h2
          className="font-serif text-3xl font-bold"
          style={{ color: "var(--text-dark)" }}
        >
          SÁBADO 13 DIC
        </h2>
        <p
          className="text-xl mt-3 font-medium"
          style={{ color: "var(--gold-primary)" }}
        >
          3:00 PM | 2025
        </p>
      </div>

      {/* Ubicación */}
      <div className="my-10">
        <h3 className="font-bold text-lg mb-3 font-serif">
          Salón de Eventos El Resurgimiento
        </h3>
        <p
          className="mb-6 text-sm leading-relaxed"
          style={{ color: "var(--text-light)" }}
        >
          Av. Juan de Palafox y Mendoza #2616
          <br />
          Col. El Resurgimiento, Puebla.
        </p>

        {/* === NUEVO: Botón de Corazón === */}
        <div className="heart-btn-container">
          {/* Reemplaza el enlace de Google Maps por el real */}
          <a
            href="https://goo.gl/maps/TU_ENLACE_AQUI"
            target="_blank"
            className="btn-heart"
          >
            <div className="heart-content">
              <i className="fas fa-location-dot"></i>
              <span className="heart-label">Ver</span>
            </div>
          </a>
        </div>
      </div>

      {/* === NUEVO: Animación Monograma E & B (Reemplaza la foto) === */}
      <div className="monogram-container">
        {/* Usamos variables CSS inline para controlar la animación final de cada letra */}
        <span
          className="monogram-letter letter-e"
          style={{ "--startX": "-100%", "--endX": "-55%" }}
        >
          E
        </span>
        <span className="monogram-ampersand">&</span>
        <span
          className="monogram-letter letter-b"
          style={{ "--startX": "20%", "--endX": "-15%" }}
        >
          B
        </span>
      </div>

      <p
        className="font-script text-2xl my-8"
        style={{ color: "var(--gold-primary)" }}
      >
        Ceremonia, Recepción y Banquete
      </p>
    </section>
  );
};

export default Details;
