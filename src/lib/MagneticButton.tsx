import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ArrowRight from "../assets/about-arrow-click.svg";

const MagneticButton = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);

  const x = useSpring(motionX, { stiffness: 80, damping: 12 });
  const y = useSpring(motionY, { stiffness: 80, damping: 12 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <motion.a
      href=""
      ref={linkRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <p className="text-[#2B3767] text-[16px] font-manrope font-[400] leading-[100%]">
        Batafsil ma’lumot
      </p>
      <motion.img
        src={ArrowRight}
        alt="arrow right"
        loading="lazy"
        className="transition-transform duration-300"
        whileHover={{ rotate: 90 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      />
    </motion.a>
  );
};

export default MagneticButton;