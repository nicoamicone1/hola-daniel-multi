import { useEffect, useState } from 'react';

export const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-40 blur-3xl bg-gradient-to-r from-primary/30 to-accent/30 transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full opacity-30 blur-2xl bg-gradient-to-r from-primary/40 to-secondary/40 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
};