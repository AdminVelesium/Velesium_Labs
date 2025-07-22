"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  connections: number[];
}

interface AnimatedBackgroundProps {
  variant?: "particles" | "neural" | "matrix" | "geometric";
  intensity?: "low" | "medium" | "high";
  color?: string;
}

export default function AnimatedBackground({
  variant = "neural",
  intensity = "medium",
  color = "#22c55e",
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

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

    // Initialize particles based on intensity
    const particleCount =
      intensity === "low" ? 50 : intensity === "medium" ? 150 : 200;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        connections: [],
      });
    }

    particlesRef.current = particles;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (variant === "neural") {
        drawNeuralNetwork(ctx, particles, color);
      } else if (variant === "particles") {
        drawParticles(ctx, particles, color);
      } else if (variant === "matrix") {
        drawMatrix(ctx, color);
      } else if (variant === "geometric") {
        drawGeometric(ctx, color);
      }

      // Update particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity, color]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}

function drawNeuralNetwork(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  color: string
) {
  const maxDistance = 120;

  // Draw connections
  ctx.strokeStyle = color + "20";
  ctx.lineWidth = 0.5;

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        const opacity = (1 - distance / maxDistance) * 0.3;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw particles
  ctx.globalAlpha = 1;
  particles.forEach((particle) => {
    ctx.fillStyle =
      color +
      Math.floor(particle.opacity * 255)
        .toString(16)
        .padStart(2, "0");
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  color: string
) {
  particles.forEach((particle) => {
    ctx.fillStyle =
      color +
      Math.floor(particle.opacity * 255)
        .toString(16)
        .padStart(2, "0");
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawMatrix(ctx: CanvasRenderingContext2D, color: string) {
  const chars = "01";
  const fontSize = 14;
  const columns = Math.floor(ctx.canvas.width / fontSize);

  ctx.fillStyle = color + "10";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < columns; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    const x = i * fontSize;
    const y = Math.random() * ctx.canvas.height;

    ctx.fillText(char, x, y);
  }
}

function drawGeometric(ctx: CanvasRenderingContext2D, color: string) {
  const time = Date.now() * 0.001;

  // Draw rotating triangles
  for (let i = 0; i < 5; i++) {
    const x = (ctx.canvas.width / 6) * (i + 1);
    const y = ctx.canvas.height / 2 + Math.sin(time + i) * 100;
    const size = 30 + Math.sin(time * 2 + i) * 10;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(time + i);
    ctx.strokeStyle = color + "30";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(-size * 0.866, size * 0.5);
    ctx.lineTo(size * 0.866, size * 0.5);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
  }
}
