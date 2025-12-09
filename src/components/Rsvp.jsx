import React from "react";

const Rsvp = () => {
  return (
    <section className="mt-10">
      {/* Código de Vestimenta */}
      <div className="bg-[#cfb9861a] p-6 rounded-lg mb-10">
        <h3
          className="font-serif text-xl mb-3"
          style={{ color: "var(--gold-primary)" }}
        >
          Código de Vestimenta
        </h3>
        <p className="uppercase tracking-[3px] font-semibold text-sm">
          Formal / Elegante
        </p>
      </div>

      <div className="divider">✦</div>

      {/* Confirmación */}
      <div className="text-center">
        <p className="mb-6 font-medium">
          Favor de confirmar antes del 1 de Diciembre
        </p>

        {/* Imagen del QR */}
        <div className="flex justify-center mb-6">
          <div className="p-2 border-2 border-[#cfb986] rounded">
            {/* Asegúrate de que esta imagen exista en public/images/qr.jpg */}
            <img
              src="/images/qr.jpg"
              alt="Escanea para confirmar"
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>

        <p className="text-sm mb-6" style={{ color: "var(--text-light)" }}>
          Escanea el código o haz clic abajo
        </p>

        {/* Botón de WhatsApp con número y mensaje */}
        <a
          href="https://wa.me/52222XXXXXXX?text=Hola!%20Confirmo%20mi%20asistencia%20a%20la%20boda%20de%20Brenda%20y%20Enrique%20%F0%9F%92%92"
          target="_blank"
          className="whatsapp-btn"
        >
          <i className="fab fa-whatsapp text-xl"></i> Confirmar asistencia
        </a>
      </div>
    </section>
  );
};

export default Rsvp;
