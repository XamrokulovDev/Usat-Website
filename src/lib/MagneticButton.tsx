import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, ReactNode } from 'react';

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
};

const MagneticButton = ({ children, className }: MagneticButtonProps) => {
  const linkRef = useRef<HTMLButtonElement>(null);
  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);

  const x = useSpring(motionX, { stiffness: 80, damping: 12 });
  const y = useSpring(motionY, { stiffness: 80, damping: 12 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const bounds = linkRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const offsetX = e.clientX - bounds.left - bounds.width / 2;
    const offsetY = e.clientY - bounds.top - bounds.height / 2;

    motionX.set(Math.max(Math.min(offsetX, 30), -30));
    motionY.set(Math.max(Math.min(offsetY, 30), -30));
  };

  const handleMouseLeave = () => {
    motionX.set(0);
    motionY.set(0);
  };

  return (
    <motion.button
      ref={linkRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;