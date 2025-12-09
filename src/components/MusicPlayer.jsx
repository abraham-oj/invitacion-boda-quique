import React, { useState, useEffect, useRef } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

const MusicPlayer = ({ isPlaying }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio("/cancion.mp3")); // Asegúrate de tener cancion.mp3 en public

  useEffect(() => {
    audioRef.current.loop = true;
    if (isPlaying) {
      audioRef.current
        .play()
        .catch((e) => console.log("Interacción requerida primero"));
      setPlaying(true);
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={togglePlay}
      className={`fixed top-4 right-4 z-40 p-3 rounded-full bg-white/80 backdrop-blur shadow-md border border-[#D4AF37] text-[#D4AF37] transition-all duration-1000 ${
        playing ? "animate-spin-slow" : ""
      }`}
      style={{ animationDuration: "3s" }}
    >
      {playing ? <FaMusic size={14} /> : <FaPause size={14} />}
    </button>
  );
};

export default MusicPlayer;
