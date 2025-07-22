"use client";

import { useEffect, useRef } from "react";

interface GridBackgroundProps {
  spacing?: number;
  opacity?: number;
  color?: string;
  animated?: boolean;
}

export default function GridBackground({
  spacing = 50,
  opacity = 0.1,
  color = "#22c55e",
  animated = true,
}: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = animated ? Date.now() * 0.001 : 0;
      const offset = animated ? (time * 10) % spacing : 0;

      ctx.strokeStyle = color;
      ctx.globalAlpha = opacity + (animated ? Math.sin(time) * 0.05 : 0);
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = -offset; x < canvas.width + spacing; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -offset; y < canvas.height + spacing; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      if (animated) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [spacing, opacity, color, animated]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}
