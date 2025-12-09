import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppHeart = () => {
  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col items-end">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="bg-white px-4 py-2 rounded-lg shadow-md mb-2 mr-2 text-xs text-gray-500"
      >
        ¡Confirma aquí! ⤦
      </motion.div>

      <motion.a
        href="https://wa.me/52222XXXXXXX?text=Hola,%20confirmo%20mi%20asistencia%20a%20la%20boda%20de%20Enrique%20y%20Brenda%20💍"
        target="_blank"
        rel="noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.7)",
            "0 0 0 20px rgba(37, 211, 102, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{ width: "60px", height: "60px" }}
      >
        {/* Forma de corazón usando clip-path o icono grande */}
        <FaWhatsapp size={35} />
      </motion.a>
    </div>
  );
};

export default WhatsAppHeart;
