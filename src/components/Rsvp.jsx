import React from "react";

const Rsvp = () => {
  return (
    <section className="fade-in mt-8">
      {/* Código de Vestimenta */}
      <div className="bg-yellow-50 p-6 rounded mb-8">
        <h3 className="font-serif text-2xl text-gold mb-2">
          Código de Vestimenta
        </h3>
        <p className="uppercase tracking-widest font-medium text-gray-700">
          Formal / Elegante
        </p>
      </div>

      <div className="divider">✦</div>

      {/* Confirmación */}
      <div className="text-center">
        <p className="mb-4">Favor de confirmar antes del 1 de Diciembre</p>

        {/* Imagen del QR */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/qr.jpg"
            alt="QR Código"
            className="w-48 h-48 border border-yellow-600 p-2"
          />
        </div>

        <p className="text-sm text-gray-500 mb-4">Escanea o haz clic abajo</p>

        <a
          href="https://wa.me/52222XXXXXXX?text=Confirmo%20asistencia"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg"
        >
          Confirmar por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Rsvp;
