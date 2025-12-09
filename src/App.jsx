import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import Hero from "./components/Hero";
import Details from "./components/Details";
import MusicPlayer from "./components/MusicPlayer";
import WhatsAppHeart from "./components/WhatsAppHeart";
import { AnimatePresence } from "framer-motion";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfbf7] texture-bg">
      <AnimatePresence>
        {!entered && <WelcomeScreen onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      {entered && (
        <>
          <MusicPlayer isPlaying={entered} />

          <main>
            <Hero />
            <Details />

            {/* Sección final con frase emotiva */}
            <div className="py-20 text-center px-6">
              <p className="font-cinzel text-xl md:text-2xl text-[#AA8C2C] italic max-w-2xl mx-auto">
                "Hay momentos en la vida que son especiales por sí solos, pero
                compartirlos con las personas que amas los hace inolvidables."
              </p>
              <p className="mt-8 font-montserrat text-sm uppercase tracking-widest">
                ¡No Faltes!
              </p>
            </div>

            <footer className="bg-[#1a1a1a] text-[#555] py-8 text-center text-xs tracking-widest uppercase">
              Brenda & Enrique • 2025
            </footer>
          </main>

          <WhatsAppHeart />
        </>
      )}
    </div>
  );
}

export default App;
