import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Ajustar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Crear partículas brillantes
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = this.getRandomColor();
        this.alpha = Math.random() * 0.3 + 0.1;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseDirection = 1;
      }

      getRandomColor() {
        const colors = [
          "rgba(212, 161, 84,", // boda-primary
          "rgba(248, 201, 124,", // boda-accent
          "rgba(241, 182, 106,", // boda-warm
          "rgba(243, 194, 165,", // boda-secondary
          "rgba(255, 255, 255,", // blanco
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Efecto de pulso
        this.alpha += this.pulseSpeed * this.pulseDirection;
        if (this.alpha > 0.4 || this.alpha < 0.1) {
          this.pulseDirection *= -1;
        }

        // Reaparecer si sale de la pantalla
        if (
          this.x < -10 ||
          this.x > canvas.width + 10 ||
          this.y < -10 ||
          this.y > canvas.height + 10
        ) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${this.alpha})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color
          .replace("rgba(", "rgb(")
          .replace(/,[^)]+\)/, ")");
        ctx.fill();

        // Brillo interior
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color
          .replace("rgba(", "rgb(")
          .replace(/,[^)]+\)/, ")")}`;
        ctx.fill();
      }
    }

    // Inicializar partículas
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(
        60,
        Math.floor((canvas.width * canvas.height) / 15000)
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar gradiente sutil de fondo
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, "rgba(5, 5, 5, 0.8)");
      gradient.addColorStop(1, "rgba(15, 12, 10, 0.9)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Actualizar y dibujar partículas
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Dibujar destellos aleatorios
      if (Math.random() < 0.02) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
        ctx.shadowBlur = 30;
        ctx.shadowColor = "#d4a154";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Inicializar
    resizeCanvas();
    initParticles();
    animate();

    // Event listeners
    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: "linear-gradient(135deg, #050505 0%, #0f0c0a 100%)",
      }}
    />
  );
};

export default AnimatedBackground;
