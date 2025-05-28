import React, { useEffect, useRef } from 'react';

function CursorTrail() {
  const circlesRef = useRef([]);
  const trailPositions = useRef([]);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animationFrameId = useRef(null);

  const circleCount = 24;
  const baseSize = 15;
  const baseOpacity = 1;
  const easing = 0.3;

  // Gradient color palette (indigo to cyan)
  const colorPalette = [
    '#1e3a8a', '#1e40af', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa',
    '#7dd3fc', '#22d3ee', '#06b6d4', '#0ea5e9', '#38bdf8', '#67e8f9'
  ];

  // Get smooth gradient color from palette
  const getColor = (index) => {
    const ratio = index / (circleCount - 1);
    const paletteIndex = Math.floor(ratio * (colorPalette.length - 1));
    return colorPalette[paletteIndex];
  };

  useEffect(() => {
    const { x, y } = mousePos.current;

    trailPositions.current = Array.from({ length: circleCount }, () => ({
      x,
      y,
    }));

    const animate = () => {
      trailPositions.current.forEach((pos, i) => {
        const prev = trailPositions.current[i - 1] || mousePos.current;

        pos.x += (prev.x - pos.x) * easing;
        pos.y += (prev.y - pos.y) * easing;

        const el = circlesRef.current[i];
        if (el) {
          const size = baseSize * (1 - i * 0.035);
          const opacity = baseOpacity * (1 - i * 0.06);
          const color = getColor(i);

          el.style.transform = `translate3d(${pos.x - size / 2}px, ${pos.y - size / 2}px, 0)`;
          el.style.width = `${size}px`;
          el.style.height = `${size}px`;
          el.style.opacity = opacity.toFixed(2);
          el.style.backgroundColor = color;
          el.style.boxShadow = `0 0 ${size * 0.8}px ${size * 0.4}px ${color}`;
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {Array.from({ length: circleCount }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (circlesRef.current[i] = el)}
          className="absolute rounded-full mix-blend-screen"
          style={{
            width: `${baseSize}px`,
            height: `${baseSize}px`,
            transition: 'opacity 0.2s ease',
            transform: 'translate3d(-100px, -100px, 0)',
            willChange: 'transform',
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
}

export default CursorTrail;
