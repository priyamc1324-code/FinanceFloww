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
    let lines: MovingLine[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createLines();
    };

    class MovingLine {
      y: number;
      points: { x: number; yOffset: number }[];
      speed: number;
      opacity: number;
      lineWidth: number;
      segmentLength: number;
      currentX: number;
      color: string;

      constructor() {
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.2 + 0.05;
        this.lineWidth = Math.random() * 1.5 + 0.5;
        this.segmentLength = 80;
        this.points = [];
        this.currentX = 0;
        this.color = "hsl(var(--foreground))";
        this.generatePoints();
      }

      generatePoints() {
        this.points = [];
        const numPoints = Math.ceil(canvas.width / this.segmentLength) + 2;
        let currentYOffset = (Math.random() - 0.5) * 100;
        for (let i = 0; i < numPoints; i++) {
          this.points.push({ x: i * this.segmentLength, yOffset: currentYOffset });
          currentYOffset += (Math.random() - 0.5) * 50;
        }
      }

      update() {
        this.currentX -= this.speed;
        if (this.currentX < -this.segmentLength) {
            this.currentX = 0;
            this.points.shift();
            const lastPoint = this.points[this.points.length - 1];
            const newYOffset = lastPoint.yOffset + (Math.random() - 0.5) * 50;
            this.points.push({ x: lastPoint.x + this.segmentLength, yOffset: newYOffset});
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = this.opacity;
        context.strokeStyle = this.color;
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.moveTo(this.currentX + this.points[0].x, this.y + this.points[0].yOffset);

        for (let i = 1; i < this.points.length; i++) {
          context.lineTo(this.currentX + this.points[i].x, this.y + this.points[i].yOffset);
        }

        context.stroke();
        context.restore();
      }
    }

    const createLines = () => {
        const lineCount = Math.floor(canvas.height / 50);
        lines = [];
        for (let i = 0; i < lineCount; i++) {
            lines.push(new MovingLine());
        }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      lines.forEach(l => {
        l.update();
        l.draw(ctx);
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
      className="absolute top-0 left-0 w-full h-full -z-10 bg-background"
    />
  );
};

export default FinancialBackground;
