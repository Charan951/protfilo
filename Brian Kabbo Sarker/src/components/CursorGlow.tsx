import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

const CursorGlow: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 1. Fast responsive spring for inner dot
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 450 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 450 });

  // 2. Medium lag spring for outer ring
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 160 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 160 });

  // 3. Slow lagging spring for large atmospheric glow
  const glowX = useSpring(mouseX, { damping: 50, stiffness: 80 });
  const glowY = useSpring(mouseY, { damping: 50, stiffness: 80 });

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select, .btn-shine, .interactive');
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window !== 'undefined' && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      {/* 1. Large background atmospheric glow */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        className="fixed pointer-events-none z-[1] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(224,231,255,0.05)_0%,transparent_70%)] will-change-transform"
      />

      {/* 2. Outer Ring */}
      <motion.div
        style={{
          left: ringX,
          top: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 1.6 : 1,
        }}
        animate={{
          borderColor: isHovered ? 'rgba(224, 231, 255, 0.6)' : 'rgba(224, 231, 255, 0.25)',
          backgroundColor: isHovered ? 'rgba(224, 231, 255, 0.08)' : 'rgba(224, 231, 255, 0)',
        }}
        transition={{ duration: 0.2 }}
        className="fixed pointer-events-none z-[100] w-9 h-9 rounded-full border border-white/20 will-change-transform"
      />

      {/* 3. Inner Dot */}
      <motion.div
        style={{
          left: dotX,
          top: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 0.6 : 1,
        }}
        className="fixed pointer-events-none z-[101] w-1.5 h-1.5 bg-white rounded-full will-change-transform"
      />
    </>
  );
};

export default CursorGlow;
