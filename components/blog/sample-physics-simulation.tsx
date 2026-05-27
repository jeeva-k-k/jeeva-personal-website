"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  phase: number;
  size: number;
}

export function SamplePhysicsSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particleCount, setParticleCount] = useState(120);
  const [energyField, setEnergyField] = useState("harmonic");
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = 300);

    const particles: Particle[] = [];

    // Initialize particle grid representing wave points
    const initGrid = () => {
      particles.length = 0;
      const rows = 10;
      const cols = Math.floor(particleCount / rows);
      const xSpacing = width / (cols + 1);
      const ySpacing = height / (rows + 1);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = xSpacing * (c + 1);
          const y = ySpacing * (r + 1);
          particles.push({
            x,
            y,
            vx: 0,
            vy: 0,
            originX: x,
            originY: y,
            phase: Math.random() * Math.PI * 2,
            size: 2 + Math.random() * 2,
          });
        }
      }
    };

    initGrid();

    // Listen for resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = 300;
      initGrid();
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.fillStyle = "rgba(11, 15, 25, 0.25)";
      ctx.fillRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(99, 102, 241, 0.03)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < width; i += 30) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
      }
      for (let j = 0; j < height; j += 30) {
        ctx.moveTo(0, j);
        ctx.lineTo(width, j);
      }
      ctx.stroke();

      particles.forEach((p) => {
        // Calculate physics wave force based on field setting
        let fieldForceX = 0;
        let fieldForceY = 0;

        if (energyField === "harmonic") {
          // Harmonic wave oscillator
          fieldForceY = Math.sin(time + p.phase) * 1.2;
          fieldForceX = Math.cos(time + p.phase) * 0.4;
        } else if (energyField === "quantum") {
          // Wave packet interference
          const distFromCenter = Math.sqrt(
            Math.pow(p.originX - width / 2, 2) + Math.pow(p.originY - height / 2, 2)
          );
          fieldForceY = Math.sin(time * 2.5 - distFromCenter * 0.03) * 2.5;
        } else {
          // Chaotic/Thermal motion
          fieldForceX = Math.sin(time + p.phase) * (Math.random() - 0.5) * 4;
          fieldForceY = Math.cos(time + p.phase) * (Math.random() - 0.5) * 4;
        }

        // Apply field forces
        p.vx += fieldForceX;
        p.vy += fieldForceY;

        // Apply mouse distortion forces (field compression)
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          const angle = Math.atan2(dy, dx);
          // Push particles away from cursor
          p.vx += Math.cos(angle) * force * 5;
          p.vy += Math.sin(angle) * force * 5;
        }

        // Restore force pulling particles back to grid origin
        const homeDx = p.originX - p.x;
        const homeDy = p.originY - p.y;
        p.vx += homeDx * 0.08;
        p.vy += homeDy * 0.08;

        // Apply friction/drag
        p.vx *= 0.85;
        p.vy *= 0.85;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        // Gradient color based on displacement from grid origin
        const displacement = Math.sqrt(
          Math.pow(p.x - p.originX, 2) + Math.pow(p.y - p.originY, 2)
        );
        const intensity = Math.min(255, Math.floor(displacement * 8));

        ctx.fillStyle = `rgb(${intensity + 99}, ${102 - intensity / 2}, 241)`;
        ctx.shadowBlur = displacement > 5 ? 8 : 0;
        ctx.shadowColor = "rgba(99, 102, 241, 0.5)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [particleCount, energyField]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
  };

  return (
    <div className="my-6 rounded-xl border border-white/10 bg-[#0b0f19] p-5 shadow-inner">
      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h4 className="text-sm font-semibold text-slate-200">Interactive Wave Sandbox</h4>
          <p className="text-xs text-slate-400">Hover/drag your cursor to distort the wave field potential.</p>
        </div>
        <div className="flex gap-2 text-xs">
          <button
            onClick={() => setEnergyField("harmonic")}
            className={`rounded px-3 py-1 font-medium transition ${
              energyField === "harmonic"
                ? "bg-indigo-500 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            Harmonic
          </button>
          <button
            onClick={() => setEnergyField("quantum")}
            className={`rounded px-3 py-1 font-medium transition ${
              energyField === "quantum"
                ? "bg-indigo-500 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            Quantum Packet
          </button>
          <button
            onClick={() => setEnergyField("thermal")}
            className={`rounded px-3 py-1 font-medium transition ${
              energyField === "thermal"
                ? "bg-indigo-500 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            Chaos/Thermal
          </button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full cursor-crosshair rounded-lg bg-[#04060c]"
      />
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span>Active node points: {particleCount}</span>
        <input
          type="range"
          min="50"
          max="250"
          value={particleCount}
          onChange={(e) => setParticleCount(Number(e.target.value))}
          className="h-1 w-24 cursor-pointer accent-indigo-500"
        />
      </div>
    </div>
  );
}
