import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hoverGlow = true,
  glowColor = 'rgba(139, 92, 246, 0.15)', // default purple
  onClick,
  delay = 0,
  ...props
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!hoverGlow) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
      }}
      className={`group rounded-2xl glass-card-light dark:glass-card-dark overflow-hidden border border-slate-200/50 dark:border-slate-800/40 p-6 transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:border-slate-300 dark:hover:border-slate-700/60' : ''
      } ${className}`}
      {...props}
    >
      {/* Interactive Glow Spotlight */}
      {hoverGlow && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          }}
        />
      )}
      
      {/* Outer border glow spotlight overlay */}
      {hoverGlow && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300 border border-primary-500/20 dark:border-primary-500/30"
          style={{
            maskImage: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, white, transparent)`,
            WebkitMaskImage: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, white, transparent)`,
          }}
        />
      )}

      {/* Card Content Container */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
