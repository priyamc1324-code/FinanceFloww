"use client";

import { useEffect, useRef, useState } from "react";

const FinancialBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let elements: (CandleLine | FloatingText)[] = [];

    const financialTerms = [
      "P/E Ratio", "EV/EBITDA", "DCF Valuation", "WACC", 
      "ROE", "Beta", "Alpha", "Sharpe Ratio", "EPS", "Market Cap"
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createElements();
    };

    class Candle {
      open: number;
      high: number;
      low: number;
      close: number;
      x: number;

      constructor(x: number, lastClose: number) {
        this.x = x;
        this.open = lastClose;
        const move = (Math.random() - 0.5) * 20;
        this.close = this.open + move;
        const highFluctuation = Math.random() * 10;
        const lowFluctuation = Math.random() * 10;
        this.high = Math.max(this.open, this.close) + highFluctuation;
        this.low = Math.min(this.open, this.close) - lowFluctuation;
      }
    }

    class CandleLine {
      y: number;
      candles: Candle[];
      speed: number;
      opacity: number;
      currentX: number;
      candleWidth: number;
      candleSpacing: number;

      constructor() {
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 0.8 + 0.2;
        this.opacity = Math.random() * 0.15 + 0.05;
        this.candleWidth = 8;
        this.candleSpacing = 12;
        this.candles = [];
        this.currentX = 0;
        this.generateCandles();
      }

      generateCandles() {
        this.candles = [];
        const numCandles = Math.ceil(canvas.width / this.candleSpacing) + 5;
        let lastClose = 0;
        for (let i = 0; i < numCandles; i++) {
          const candle = new Candle(i * this.candleSpacing, lastClose);
          this.candles.push(candle);
          lastClose = candle.close;
        }
      }

      update() {
        this.currentX -= this.speed;
        if (this.currentX < -this.candleSpacing) {
          this.currentX = 0;
          this.candles.shift();
          const lastCandle = this.candles[this.candles.length - 1];
          const newCandle = new Candle(
            lastCandle.x + this.candleSpacing,
            lastCandle.close
          );
          this.candles.push(newCandle);
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = this.opacity;

        this.candles.forEach((candle) => {
          const x = this.currentX + candle.x;
          
          if (x < -this.candleWidth || x > context.canvas.width) return;

          const isUp = candle.close >= candle.open;
          const color = isUp ? "hsl(0, 0%, 10%)" : "hsl(0, 84.2%, 60.2%)"; // Black and Red

          // Draw wick
          context.strokeStyle = color;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(x + this.candleWidth / 2, this.y - candle.high);
          context.lineTo(x + this.candleWidth / 2, this.y - candle.low);
          context.stroke();
          
          // Draw body
          context.fillStyle = color;
          const bodyY = this.y - Math.max(candle.open, candle.close);
          const bodyHeight = Math.abs(candle.open - candle.close);
          context.fillRect(
            x,
            bodyY,
            this.candleWidth,
            Math.max(1, bodyHeight) // Ensure body is at least 1px tall
          );
        });
        context.restore();
      }
    }
    
    class FloatingText {
      x: number;
      y: number;
      text: string;
      speed: number;
      opacity: number;
      fontSize: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.text = financialTerms[Math.floor(Math.random() * financialTerms.length)];
        this.speed = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.1 + 0.05;
        this.fontSize = Math.random() * 8 + 12; // 12px to 20px
      }

      update() {
        this.x -= this.speed;
        if (this.x < -150) { // Reset when off-screen
          this.x = canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = this.opacity;
        context.font = `${this.fontSize}px 'Space Grotesk', sans-serif`;
        context.fillStyle = 'hsl(var(--muted-foreground))';
        context.fillText(this.text, this.x, this.y);
        context.restore();
      }
    }


    const createElements = () => {
      elements = [];
      const lineCount = Math.floor(canvas.height / 100);
      const textCount = 15;
      for (let i = 0; i < lineCount; i++) {
        elements.push(new CandleLine());
      }
      for (let i = 0; i < textCount; i++) {
        elements.push(new FloatingText());
      }
      elements.sort(() => Math.random() - 0.5); // Randomize draw order
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      elements.forEach((elem) => {
        elem.update();
        elem.draw(ctx);
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
  }, [isClient]);

  if (!isClient) {
    return <div className="absolute top-0 left-0 w-full h-full -z-10 bg-background" />;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 bg-background"
    />
  );
};

export default FinancialBackground;
