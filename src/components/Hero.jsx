import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
      {/* Elementos Decorativos de Fondo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <img
          src="/images/novios.jpg"
          className="w-full h-full object-cover grayscale opacity-20"
          alt="Fondo"
        />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="z-10 bg-white/90 p-8 md:p-12 shadow-2xl relative max-w-lg w-full"
      >
        <div className="border border-[#D4AF37] p-6 md:p-10 relative">
          <p className="font-cinzel text-[#AA8C2C] mb-4">NOS CASAMOS</p>

          <h1 className="font-cinzel text-5xl md:text-6xl text-gray-800 leading-tight mb-2">
            Enrique
            <br />
            <span className="text-3xl italic">&</span>
            <br />
            Brenda
          </h1>

          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto my-6"></div>

          <p className="font-montserrat text-gray-600 uppercase tracking-widest text-sm">
            La Ceremonia Civil se realizará el día
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
