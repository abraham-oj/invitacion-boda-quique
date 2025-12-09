import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";

const Card = ({ icon, title, text, subtext, delay }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="bg-white p-8 shadow-lg border-b-4 border-[#D4AF37] flex flex-col items-center text-center mx-4 my-4 w-full md:w-1/3 max-w-sm"
  >
    <div className="text-[#D4AF37] text-3xl mb-4">{icon}</div>
    <h3 className="font-cinzel text-xl text-gray-800 mb-2">{title}</h3>
    <p className="font-montserrat text-gray-600 text-lg font-medium">{text}</p>
    {subtext && <p className="text-gray-400 text-sm mt-2">{subtext}</p>}
  </motion.div>
);

const Details = () => {
  return (
    <section className="py-20 px-4 bg-[#fcfcfc] flex flex-col items-center relative z-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-cinzel text-3xl text-center text-[#AA8C2C] mb-12"
      >
        DETALLES DEL EVENTO
      </motion.h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch w-full max-w-5xl">
        <Card
          icon={<FaCalendarAlt />}
          title="FECHA"
          text="13 de Diciembre"
          subtext="2025"
          delay={0.2}
        />

        <Card
          icon={<FaClock />}
          title="HORA"
          text="3:00 PM"
          subtext="Recepción"
          delay={0.4}
        />

        <Card
          icon={<FaMapMarkerAlt />}
          title="UBICACIÓN"
          text="Monte Alban #5001"
          subtext="Lomas de San Miguel, Puebla"
          delay={0.6}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12"
      >
        <a
          href="https://goo.gl/maps/AQUI_TU_LINK_REAL"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all uppercase tracking-widest text-sm"
        >
          Ver Mapa en Google
        </a>
      </motion.div>
    </section>
  );
};

export default Details;
