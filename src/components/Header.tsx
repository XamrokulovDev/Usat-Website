import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";
import HeroSection from "./HeroSection";

const Header = () => {
  const year = new Date().getFullYear();
  const part1 = `${year}-yilda talaba bo’lish`;
  const part2 = ` imkoniyati sizni kutyapti!`;

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-[100%] h-[850px] bg-[#000000]/30 relative overflow-hidden">
      <motion.img
        src={hero}
        alt="hero section"
        loading="eager"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 z-[-1] w-full h-full object-cover"
      />
      <div className="max-w-[1380px] h-full mx-auto relative">
        <div className="pt-[175px] max-w-[1380px] mx-auto">
          <motion.h1
            title={`${year}-yilda talaba bo’lish imkoniyati sizni kutyapti`}
            className="text-[#FFFFFF] font-made text-[56px] leading-[114%] font-[300] uppercase"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {part1.split("").map((char, index) => (
              <motion.span key={`p1-${index}`} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            {part2.split("").map((char, index) => (
              <motion.span key={`p2-${index}`} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        <div className="absolute bottom-[30px] right-0">
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Header;
