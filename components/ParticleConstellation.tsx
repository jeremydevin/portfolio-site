
import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const PARTICLE_COUNT = 70;
const CONNECTION_DISTANCE = 140;
const MOUSE_RADIUS = 180;
const MOUSE_FORCE = 0.015;
const BASE_SPEED = 0.3;
const PARTICLE_MIN_RADIUS = 1.2;
const PARTICLE_MAX_RADIUS = 2.8;

const ParticleConstellation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const animationRef = useRef<number>(0);
  const reducedMotionRef = useRef(false);

  const createParticles = useCallback((width: number, height: number): Particle[] => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * BASE_SPEED * 2,
        vy: (Math.random() - 0.5) * BASE_SPEED * 2,
        radius: PARTICLE_MIN_RADIUS + Math.random() * (PARTICLE_MAX_RADIUS - PARTICLE_MIN_RADIUS),
        opacity: 0.2 + Math.random() * 0.5,
      });
    }
    return particles;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Mouse interaction
      if (mouse.active && !reducedMotionRef.current) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * MOUSE_FORCE;
          p.vx += dx * force;
          p.vy += dy * force;
        }
      }

      // Damping
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Clamp speed
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > BASE_SPEED * 3) {
        p.vx = (p.vx / speed) * BASE_SPEED * 3;
        p.vy = (p.vy / speed) * BASE_SPEED * 3;
      }

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(148, 163, 184, ${p.opacity})`;
      ctx.fill();
    }

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15;

          // Brighter connections near mouse
          let lineOpacity = opacity;
          if (mouse.active) {
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY = (particles[i].y + particles[j].y) / 2;
            const mouseDist = Math.sqrt(
              (mouse.x - midX) ** 2 + (mouse.y - midY) ** 2
            );
            if (mouseDist < MOUSE_RADIUS) {
              const boost = (1 - mouseDist / MOUSE_RADIUS) * 0.2;
              lineOpacity = Math.min(opacity + boost, 0.35);
            }
          }

          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(148, 163, 184, ${lineOpacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionRef.current = motionQuery.matches;
    const handleMotionChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // Resize handler
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(dpr, dpr);

      // Recreate particles on resize
      particlesRef.current = createParticles(rect.width, rect.height);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Start animation
    if (!reducedMotionRef.current) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Static render for reduced motion
      animate();
    }

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      motionQuery.removeEventListener('change', handleMotionChange);
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate, createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      aria-hidden="true"
    />
  );
};

export default ParticleConstellation;
