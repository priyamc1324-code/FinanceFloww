"use client";

import { useEffect, useRef } from "react";

const FinancialBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const symbols = "0123456789$€£¥↑↓<>📈📉";

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    class Particle {
      x: number;
      y: number;
      char: string;
      size: number;
      speedY: number;
      opacity: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.char = symbols[Math.floor(Math.random() * symbols.length)];
        this.size = Math.random() * 12 + 8;
        this.speedY = Math.random() * 0.5 + 0.1;
        this.opacity = 0;
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
      }

      update() {
        this.y -= this.speedY;
        this.life++;

        if (this.life < 50) {
          this.opacity = this.life / 50 * 0.3;
        }

        if (this.life > this.maxLife - 50) {
          this.opacity = (this.maxLife - this.life) / 50 * 0.3;
        }

        if (this.y < -this.size || this.life > this.maxLife) {
          this.reset();
        }
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + this.size;
        this.char = symbols[Math.floor(Math.random() * symbols.length)];
        this.size = Math.random() * 12 + 8;
        this.speedY = Math.random() * 0.5 + 0.1;
        this.opacity = 0;
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
      }

      draw(context: CanvasRenderingContext2D) {
        context.globalAlpha = this.opacity;
        context.fillStyle = "hsl(var(--primary))";
        context.font = `${this.size}px 'Space Grotesk', monospace`;
        context.fillText(this.char, this.x, this.y);
      }
    }

    const createParticles = () => {
        const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    
    resizeCanvas();
    animate();
    
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default FinancialBackground;
