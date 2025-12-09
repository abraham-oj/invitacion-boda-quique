import React from "react";

const FlowerCorners = () => {
  return (
    <>
      {/* Esquina superior izquierda */}
      <div
        className="absolute top-0 left-0 w-32 h-32 opacity-30 animate-float"
        style={{ animationDelay: "0s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50,20 C60,10 80,10 90,20 C100,30 100,50 90,60 C80,70 60,70 50,60 C40,70 20,70 10,60 C0,50 0,30 10,20 C20,10 40,10 50,20 Z"
            fill="none"
            stroke="#e5a55d"
            strokeWidth="1.5"
            strokeDasharray="5,5"
          />
          <circle cx="50" cy="40" r="8" fill="#f8c97c" opacity="0.4" />
          <path
            d="M30,15 L35,5 M70,15 L65,5 M20,40 L5,40 M80,40 L95,40"
            stroke="#f1b66a"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Esquina superior derecha */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-30 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50,20 C60,10 80,10 90,20 C100,30 100,50 90,60 C80,70 60,70 50,60 C40,70 20,70 10,60 C0,50 0,30 10,20 C20,10 40,10 50,20 Z"
            fill="none"
            stroke="#e5a55d"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            transform="rotate(90 50 50)"
          />
          <circle cx="60" cy="50" r="8" fill="#f8c97c" opacity="0.4" />
          <path
            d="M85,30 L95,35 M85,70 L95,65 M60,20 L60,5 M60,80 L60,95"
            stroke="#f1b66a"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Esquina inferior izquierda */}
      <div
        className="absolute bottom-0 left-0 w-32 h-32 opacity-30 animate-float"
        style={{ animationDelay: "3s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50,20 C60,10 80,10 90,20 C100,30 100,50 90,60 C80,70 60,70 50,60 C40,70 20,70 10,60 C0,50 0,30 10,20 C20,10 40,10 50,20 Z"
            fill="none"
            stroke="#e5a55d"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            transform="rotate(-90 50 50)"
          />
          <circle cx="40" cy="60" r="8" fill="#f8c97c" opacity="0.4" />
          <path
            d="M15,70 L5,65 M15,30 L5,35 M40,20 L40,5 M40,80 L40,95"
            stroke="#f1b66a"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Esquina inferior derecha */}
      <div
        className="absolute bottom-0 right-0 w-32 h-32 opacity-30 animate-float"
        style={{ animationDelay: "4.5s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50,20 C60,10 80,10 90,20 C100,30 100,50 90,60 C80,70 60,70 50,60 C40,70 20,70 10,60 C0,50 0,30 10,20 C20,10 40,10 50,20 Z"
            fill="none"
            stroke="#e5a55d"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            transform="rotate(180 50 50)"
          />
          <circle cx="50" cy="60" r="8" fill="#f8c97c" opacity="0.4" />
          <path
            d="M30,85 L35,95 M70,85 L65,95 M20,60 L5,60 M80,60 L95,60"
            stroke="#f1b66a"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Elementos flotantes adicionales */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 opacity-20 animate-float">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-boda-primary to-transparent"></div>
      </div>
      <div
        className="absolute bottom-1/3 right-1/3 w-6 h-6 opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-l from-boda-accent to-transparent"></div>
      </div>
      <div
        className="absolute top-1/3 right-1/4 w-10 h-10 opacity-15 animate-float"
        style={{ animationDelay: "3.5s" }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-b from-boda-warm to-transparent"></div>
      </div>
    </>
  );
};

export default FlowerCorners;
