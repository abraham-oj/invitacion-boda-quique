import React from "react";
import { motion } from "framer-motion";

const WelcomeScreen = ({ onEnter }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fdfbf7]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center p-8 border-2 border-[#D4AF37] m-4 relative"
      >
        <span className="absolute top-0 left-0 -mt-2 -ml-2 text-4xl text-[#D4AF37]">
          ✦
        </span>
        <span className="absolute bottom-0 right-0 -mb-2 -mr-2 text-4xl text-[#D4AF37]">
          ✦
        </span>

        <h2 className="font-cinzel text-2xl text-gray-600 tracking-widest mb-4">
          ENRIQUE & BRENDA
        </h2>
        <p className="text-gray-400 text-sm mb-8 uppercase tracking-widest">
          Tienen una historia que contarte
        </p>

        <button
          onClick={onEnter}
          className="px-8 py-3 bg-[#D4AF37] text-white font-cinzel tracking-wider text-lg shadow-lg hover:bg-[#AA8C2C] transition-colors rounded-sm"
        >
          ABRIR INVITACIÓN
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
