// src/components/Background.jsx
import React from "react";
import "./Background.css";

const Background = () => {
  // Creamos un array de 15 destellos vacíos para iterar
  const sparkles = Array.from({ length: 15 });

  return (
    <div className="background-container">
      {sparkles.map((_, index) => {
        // Generamos estilos aleatorios para que se vea orgánico
        const style = {
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${10 + Math.random() * 10}s`,
          opacity: Math.random() * 0.5 + 0.3,
        };
        return <div key={index} className="sparkle" style={style}></div>;
      })}
    </div>
  );
};

export default Background;
