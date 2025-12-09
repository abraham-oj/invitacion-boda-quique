import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaLock,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaMusic,
  FaCalendarAlt,
  FaEnvelope,
} from "react-icons/fa";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import FlowerCorners from "./FlowerCorners.jsx";
import AnimatedBackground from "./AnimatedBackground.jsx";

const WeddingCinema = () => {
  const [scene, setScene] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showMusicBtn, setShowMusicBtn] = useState(false);

  // Configuración de Partículas mejorada
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
  const particleOptions = {
    particles: {
      color: { value: ["#d4a154", "#f8c97c", "#f1b66a"] },
      move: {
        enable: true,
        speed: 1.2,
        direction: "top",
        outModes: { default: "out" },
        trail: {
          enable: true,
          length: 10,
          fill: { color: "#000000" },
        },
      },
      number: { value: 40 },
      opacity: { value: { min: 0.1, max: 0.6 } },
      size: { value: { min: 1, max: 4 } },
      shape: { type: "circle" },
      wobble: { enable: true, distance: 10, speed: 5 },
    },
    background: { color: "transparent" },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
    },
  };

  // Secuencia automática mejorada
  useEffect(() => {
    let timer;
    switch (scene) {
      case 0:
        timer = setTimeout(() => setScene(1), 7500);
        break;
      case 2:
        timer = setTimeout(() => setScene(3), 6500);
        break;
      case 3:
        timer = setTimeout(() => setScene(4), 5000);
        break;
      case 4:
        timer = setTimeout(() => setScene(5), 5500);
        break;
    }
    return () => clearTimeout(timer);
  }, [scene]);

  // Mostrar botón de música después de desbloquear
  useEffect(() => {
    if (isUnlocked) {
      const timer = setTimeout(() => setShowMusicBtn(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isUnlocked]);

  const unlockExperience = () => {
    if (!isUnlocked) {
      setIsUnlocked(true);
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => setMusicPlaying(true))
          .catch((e) => console.log("Audio autoplay bloqueado", e));
        audioRef.current.volume = 0.6;
      }
      setScene(2);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((e) => console.log("Error al reproducir", e));
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-body selection:bg-boda-primary selection:text-black">
      {/* Fondo animado con brillos */}
      <AnimatedBackground />

      {/* Flores en las esquinas */}
      <FlowerCorners />

      {/* Partículas doradas */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleOptions}
        />
      </div>

      {/* Audio */}
      <audio ref={audioRef} loop src="/cancion.mp3" />

      {/* Botón de música - Mejorado y posicionado a la derecha */}
      {showMusicBtn && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          onClick={toggleMusic}
          className="fixed top-6 right-6 z-50 p-4 bg-boda-black/70 backdrop-blur-md border-2 border-boda-border rounded-full hover:bg-boda-primary/20 hover:border-boda-primary transition-all duration-300 group shadow-gold-lg"
          aria-label={musicPlaying ? "Pausar música" : "Reproducir música"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <FaMusic
              className={`text-2xl ${
                musicPlaying
                  ? "text-boda-primary animate-spin-slow"
                  : "text-boda-accent"
              }`}
            />
            {musicPlaying && (
              <div className="absolute -inset-2 border-2 border-boda-primary/30 rounded-full animate-ping"></div>
            )}
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-boda-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        </motion.button>
      )}

      <AnimatePresence mode="wait">
        {/* ESCENA 1: INTRO - Texto escribiéndose con bordes dorados */}
        {scene === 0 && (
          <motion.div
            key="scene0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl px-8 text-center"
          >
            {/* Marco decorativo */}
            <div className="absolute -inset-6 border-2 border-boda-border/30 rounded-3xl pointer-events-none animate-pulse-glow"></div>
            <div className="absolute -inset-8 border border-boda-primary/10 rounded-3xl pointer-events-none"></div>

            {/* Contenido con bordes realzados */}
            <div className="relative py-12 px-6">
              {/* Esquinas decorativas */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-boda-primary"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-boda-primary"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-boda-primary"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-boda-primary"></div>

              <h1 className="text-3xl md:text-6xl font-hand leading-relaxed text-boda-primary golden-glow mb-8">
                <Typewriter
                  text="“Cuando te das cuenta de que quieres pasar el resto de tu vida con alguien, deseas que el resto de tu vida comience cuanto antes"
                  speed={35}
                />
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 6, duration: 1.5 }}
                className="h-px bg-gradient-to-r from-transparent via-boda-primary to-transparent mx-auto mt-8"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 7 }}
                className="mt-6 font-cine text-boda-accent tracking-widest text-sm"
              >
                LA HISTORIA COMIENZA...
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* ESCENA 2: CANDADO - Con mejoras visuales */}
        {scene === 1 && (
          <motion.div
            key="scene1"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 10, opacity: 0, rotate: 360 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="relative z-20 cursor-pointer flex flex-col items-center group"
            onClick={unlockExperience}
          >
            {/* Efecto de halo */}
            <div className="absolute -inset-12 bg-gradient-to-r from-boda-primary/10 via-boda-accent/10 to-boda-primary/10 rounded-full blur-2xl animate-pulse"></div>

            {/* Corazón con candado */}
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border-2 border-dashed border-boda-primary/30 rounded-full"
              />

              <FaHeart className="text-[12rem] md:text-[18rem] text-boda-primary animate-heartbeat relative z-10" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="relative">
                  <FaLock className="text-boda-black text-6xl md:text-8xl" />
                  <div className="absolute -inset-2 bg-boda-primary/20 rounded-full blur-sm"></div>
                </div>
              </motion.div>

              {/* Rayos de luz */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-t from-transparent via-boda-primary to-transparent"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                      opacity: 0.3,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Texto */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 font-cine text-boda-accent text-2xl tracking-[0.4em] uppercase border-b-2 border-boda-primary pb-3 animate-pulse"
            >
              DESCUBRE NUESTRO AMOR
            </motion.p>

            <p className="mt-6 text-boda-secondary font-body text-lg max-w-md text-center px-4 leading-relaxed">
              Toca el corazón para desbloquear nuestra historia de amor
            </p>

            {/* Flecha indicadora */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-8"
            >
              <div className="w-6 h-10 border-2 border-boda-primary rounded-full flex justify-center">
                <div className="w-1 h-3 bg-boda-primary rounded-full mt-2 animate-bounce"></div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* ESCENA 3: CAPÍTULO 1 - Con marco elegante */}
        {scene === 2 && (
          <motion.div
            key="scene2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10 max-w-5xl px-8 text-center"
          >
            {/* Marco dorado */}
            <div className="absolute -inset-8 border-2 border-boda-border rounded-3xl pointer-events-none shadow-inner-gold"></div>
            <div className="absolute -inset-10 border border-boda-primary/20 rounded-3xl pointer-events-none"></div>

            <div className="relative py-16 px-8">
              {/* Badge de capítulo con bordes */}
              <div className="inline-block mb-12 relative">
                <div className="absolute -inset-4 border border-boda-primary/30 rounded-full"></div>
                <span className="relative font-cine text-boda-primary text-lg tracking-[0.6em] uppercase bg-boda-black/80 px-8 py-3 rounded-full border-2 border-boda-primary/50">
                  CAPÍTULO UNO
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-hand text-boda-accent leading-relaxed mb-10 golden-glow">
                "Ahora por fin están al principio del capítulo 1 de la mejor
                historia que jamás alguien en la tierra ha leído..."
              </h2>

              {/* Separador decorativo */}
              <div className="flex justify-center items-center gap-6 mt-12">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-boda-primary"></div>
                <div className="relative">
                  <FaHeart className="text-boda-primary text-3xl animate-heartbeat" />
                  <div className="absolute -inset-3 border border-boda-primary/20 rounded-full"></div>
                </div>
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-boda-primary"></div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ESCENA 4: E & B - Con efectos mejorados */}
        {scene === 3 && (
          <motion.div
            key="scene3"
            className="relative z-10 flex flex-col items-center justify-center"
            exit={{ opacity: 0, scale: 1.5 }}
          >
            <div className="flex items-center justify-center gap-6 md:gap-12 mb-12">
              {/* Letra E con efectos */}
              <motion.div
                initial={{ x: -400, opacity: 0, rotate: -180 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 2, bounce: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-boda-primary/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <span className="text-[10rem] md:text-[16rem] font-cine text-white relative z-10 drop-shadow-[0_0_30px_rgba(212,161,84,0.5)]">
                  E
                </span>
                <div className="absolute inset-0 border-2 border-boda-primary/30 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Símbolo & con animación */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 1.2, type: "spring" }}
                className="relative"
              >
                <span className="text-6xl md:text-9xl font-hand text-boda-primary animate-float">
                  &
                </span>
                <div className="absolute -inset-4 border border-boda-primary/20 rounded-full animate-ping"></div>
              </motion.div>

              {/* Letra B con efectos */}
              <motion.div
                initial={{ x: 400, opacity: 0, rotate: 180 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 2, bounce: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-6 bg-gradient-to-l from-boda-primary/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <span className="text-[10rem] md:text-[16rem] font-cine text-white relative z-10 drop-shadow-[0_0_30px_rgba(212,161,84,0.5)]">
                  B
                </span>
                <div className="absolute inset-0 border-2 border-boda-primary/30 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>

            {/* Línea de unión animada */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
              className="w-80 h-1 bg-gradient-to-r from-transparent via-boda-primary to-transparent my-12 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-boda-primary via-boda-accent to-boda-primary blur-sm"></div>
            </motion.div>

            {/* Texto */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="font-hand text-4xl text-boda-accent bg-gradient-to-r from-boda-primary to-boda-accent bg-clip-text text-transparent animate-shimmer"
              style={{ backgroundSize: "200% 100%" }}
            >
              Unidos por el destino
            </motion.p>
          </motion.div>
        )}

        {/* ESCENA 5: CORAZÓN DE FOTOS - Mejorado */}
        {scene === 4 && (
          <motion.div
            key="scene4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: 50, rotate: -10 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative z-10"
          >
            <div className="w-[350px] h-[350px] md:w-[550px] md:h-[550px] relative">
              {/* Marco giratorio doble */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-25px] border-2 border-dashed border-boda-primary/40 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] border border-boda-accent/30 rounded-full"
              />

              {/* Efecto de resplandor */}
              <div className="absolute -inset-[50px] bg-gradient-to-r from-boda-primary/15 via-boda-accent/10 to-boda-primary/15 blur-3xl rounded-full"></div>

              {/* Corazón con fotos - mejorado */}
              <div className="w-full h-full relative overflow-hidden rounded-[40%] border-4 border-boda-primary/30 shadow-gold-lg">
                <div className="w-full h-full flex relative group">
                  <div className="w-1/2 h-full overflow-hidden border-r border-boda-primary/20">
                    <img
                      src="/novios1.jpg"
                      className="w-full h-full object-cover opacity-95 group-hover:scale-125 transition-all duration-1000 ease-out"
                      alt="Enrique y Brenda 1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  </div>
                  <div className="w-1/2 h-full overflow-hidden">
                    <img
                      src="/novios2.jpg"
                      className="w-full h-full object-cover opacity-95 group-hover:scale-125 transition-all duration-1000 ease-out"
                      alt="Enrique y Brenda 2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
                  </div>

                  {/* Overlay dorado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-boda-primary/10 via-transparent to-boda-primary/10 pointer-events-none"></div>
                </div>

                {/* Destellos */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full blur-sm animate-ping"></div>
                <div
                  className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-boda-accent rounded-full blur-sm animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              {/* Anillos decorativos */}
              <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-boda-primary rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-boda-primary rounded-full"></div>
            </div>

            {/* Texto animado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center mt-10"
            >
              <p className="font-hand text-5xl md:text-6xl text-boda-primary drop-shadow-lg animate-float mb-4">
                Juntos por siempre
              </p>
              <p className="text-boda-secondary font-body text-lg tracking-widest border-t border-boda-primary/30 pt-4 inline-block">
                Dos corazones, un solo latido
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* ESCENA 6: FINAL - COMPLETAMENTE REDISEÑADO y ELEGANTE */}
        {scene === 5 && (
          <motion.div
            key="scene5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center text-center animate-fade-in-up"
          >
            {/* Título principal con efecto dorado */}
            <div className="mb-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 1 }}
                className="inline-block mb-8"
              >
                <h1 className="font-hand text-7xl md:text-8xl text-boda-primary golden-glow mb-2">
                  ¡Nos Casamos!
                </h1>
                <div className="w-48 h-1 bg-gradient-to-r from-transparent via-boda-primary to-transparent mx-auto"></div>
              </motion.div>
            </div>

            {/* Contenedor principal con diseño elegante */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
              {/* Columna izquierda - Fecha y Lugar */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-boda-black/90 via-black/80 to-boda-black/90 backdrop-blur-lg border-2 border-boda-border rounded-3xl p-8 shadow-gold-lg relative overflow-hidden"
              >
                {/* Fondo decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-boda-primary/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-boda-accent/5 rounded-full blur-2xl"></div>

                {/* Fecha en forma de corazón */}
                <div className="mb-10 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <FaCalendarAlt className="text-3xl text-boda-primary animate-bounce-soft" />
                  </div>
                  <div className="heart-date-container relative inline-block">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="font-cine text-boda-secondary tracking-widest text-lg">
                          SÁBADO
                        </span>
                      </div>
                      <h2 className="font-cine text-boda-primary text-8xl md:text-9xl leading-none mb-2 golden-glow">
                        13
                      </h2>
                      <h3 className="font-cine text-white text-3xl tracking-[0.4em] mb-6 pb-4 border-b border-boda-primary/30">
                        DICIEMBRE
                      </h3>
                    </div>
                    <div className="absolute -inset-4 border-2 border-boda-primary/20 rounded-full"></div>
                  </div>
                </div>

                {/* Lugar */}
                <div className="relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <FaMapMarkerAlt className="text-2xl text-boda-primary" />
                  </div>
                  <div className="bg-boda-black/50 p-6 rounded-2xl border border-boda-primary/20">
                    <h4 className="font-cine text-2xl text-boda-accent mb-2">
                      Monte Albán #5001
                    </h4>
                    <p className="font-body text-boda-secondary text-sm mb-6">
                      Lomas de San Miguel, Puebla
                    </p>

                    <a
                      href="https://goo.gl/maps/REEMPLAZA_CON_TU_LINK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-boda-primary border border-boda-primary/50 px-6 py-3 rounded-full hover:bg-boda-primary/10 hover:border-boda-primary transition-all duration-300 group"
                    >
                      <FaMapMarkerAlt />
                      <span>Ver ubicación exacta</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                {/* Decoración de esquinas */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-boda-primary"></div>
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-boda-primary"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-boda-primary"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-boda-primary"></div>
              </motion.div>

              {/* Columna derecha - Información y Confirmación */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-bl from-boda-black/90 via-black/80 to-boda-black/90 backdrop-blur-lg border-2 border-boda-border rounded-3xl p-8 shadow-gold-lg relative overflow-hidden"
              >
                {/* Fondo decorativo */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-boda-warm/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-boda-primary/5 rounded-full blur-3xl"></div>

                {/* Detalles de la recepción */}
                <div className="mb-10">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <FaMusic className="text-boda-primary text-2xl" />
                    <p className="font-body text-boda-secondary text-lg tracking-widest">
                      RECEPCIÓN | 3:00 PM
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-boda-black/40 p-5 rounded-xl border border-boda-primary/10">
                      <h5 className="font-cine text-boda-accent text-xl mb-2">
                        Código de Vestimenta
                      </h5>
                      <p className="font-body text-boda-secondary text-sm">
                        Elegante - Formal
                      </p>
                    </div>

                    <div className="bg-boda-black/40 p-5 rounded-xl border border-boda-primary/10">
                      <h5 className="font-cine text-boda-accent text-xl mb-2">
                        Confirmación
                      </h5>
                      <p className="font-body text-boda-secondary text-sm">
                        Por favor confirma antes del 30 de Noviembre
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botones de acción en forma de corazón */}
                <div className="space-y-4">
                  {/* WhatsApp Heart Button */}
                  <motion.a
                    href="https://wa.me/522221234567?text=¡Hola!%20Confirmo%20mi%20asistencia%20a%20la%20boda%20de%20Enrique%20y%20Brenda%20el%2013%20de%20Diciembre%20🎉"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative block group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-boda-primary via-boda-warm to-boda-gold rounded-full blur opacity-50 group-hover:opacity-80 transition-opacity"></div>
                    <div className="relative bg-gradient-to-r from-boda-primary to-boda-gold text-black font-cine font-bold py-5 px-8 rounded-full flex items-center justify-center gap-4 text-lg overflow-hidden heart-button">
                      <FaWhatsapp size={28} />
                      <span>CONFIRMAR POR WHATSAPP</span>
                      <div className="absolute top-1 right-4">
                        <FaHeart className="text-black/20 text-xl" />
                      </div>
                    </div>
                  </motion.a>

                  {/* Email Heart Button */}
                  <motion.a
                    href="mailto:boda@enriqueybrenda.com?subject=Confirmación de Asistencia&body=¡Hola!%20Confirmo%20mi%20asistencia%20a%20la%20boda..."
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative block group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-boda-accent via-boda-secondary to-boda-warm rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative bg-gradient-to-r from-boda-accent to-boda-warm text-black font-cine font-bold py-5 px-8 rounded-full flex items-center justify-center gap-4 text-lg overflow-hidden heart-button border-2 border-boda-primary/30">
                      <FaEnvelope size={26} />
                      <span>CONFIRMAR POR EMAIL</span>
                      <div className="absolute top-1 right-4">
                        <FaHeart className="text-black/20 text-xl" />
                      </div>
                    </div>
                  </motion.a>
                </div>

                {/* Mensaje final */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-10 pt-6 border-t border-boda-primary/20"
                >
                  <p className="font-hand text-3xl text-boda-primary mb-3">
                    "¡Tu presencia es nuestro mejor regalo!"
                  </p>
                  <p className="font-cine text-boda-secondary tracking-widest text-sm">
                    Con amor, Enrique & Brenda
                  </p>
                </motion.div>

                {/* Decoración de esquinas */}
                <div className="absolute top-4 left-4 w-6 h-6">
                  <div className="w-full h-full border-2 border-boda-primary rounded-full"></div>
                </div>
                <div className="absolute top-4 right-4 w-6 h-6">
                  <div className="w-full h-full border-2 border-boda-primary rounded-full"></div>
                </div>
              </motion.div>
            </div>

            {/* Elementos decorativos flotantes */}
            <div className="mt-12 flex justify-center gap-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                  className="w-3 h-3 bg-boda-primary rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer decorativo */}
      <div className="absolute bottom-0 left-0 right-0 z-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

// Componente Typewriter mejorado
const Typewriter = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(currentIndex));
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="inline-block relative">
      {displayText}
      {showCursor && currentIndex < text.length && (
        <span className="ml-1 animate-pulse text-boda-accent">|</span>
      )}
    </span>
  );
};

export default WeddingCinema;
