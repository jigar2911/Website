"use client";
import React, { useEffect, useRef } from 'react';

const FloatingShapes = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapesCount = 15;
    const shapes: HTMLDivElement[] = [];

    for (let i = 0; i < shapesCount; i++) {
      const shape = document.createElement('div');
      const size = Math.random() * 300 + 100;

      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.position = 'absolute';
      shape.style.borderRadius = '50%';
      shape.style.filter = 'blur(80px)';
      shape.style.opacity = '0.05';

      // Randomly choose between brand colors or spectrum
      const colors = ['#ff8c00', '#0056b3', '#ffffff'];
      shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      shape.style.left = `${x}%`;
      shape.style.top = `${y}%`;

      container.appendChild(shape);
      shapes.push(shape);

      // Animate
      animateShape(shape);
    }

    function animateShape(el: HTMLDivElement) {
      const duration = Math.random() * 20000 + 10000;
      const xMove = (Math.random() - 0.5) * 40;
      const yMove = (Math.random() - 0.5) * 40;

      el.animate([
        { transform: 'translate(0, 0)' },
        { transform: `translate(${xMove}vw, ${yMove}vh)` },
        { transform: 'translate(0, 0)' }
      ], {
        duration: duration,
        iterations: Infinity,
        easing: 'ease-in-out'
      });
    }

    return () => {
      shapes.forEach(s => s.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default FloatingShapes;
