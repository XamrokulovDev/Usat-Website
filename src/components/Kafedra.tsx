import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import kafedra from "../assets/kafedra.png";
import hero from "../assets/hero.jpg";
import swiper_arrow from "../assets/swiper-arrow-click.svg";
import kafedra_arrow from "../assets/kafedra-arrow-click.svg";
import MagneticButton from "../lib/MagneticButton";

const Kafedras = [
  {
    id: 1,
    title: "Moliya-1",
    description: "Moliya va moliyaviy texnologiyalar",
    image: kafedra,
  },
  {
    id: 2,
    title: "Moliya-2",
    description: "Moliya va moliyaviy texnologiyalar",
    image: hero,
  },
  {
    id: 3,
    title: "Moliya-3",
    description: "Moliya va moliyaviy texnologiyalar",
    image: kafedra,
  },
  {
    id: 4,
    title: "Moliya-4",
    description: "Moliya va moliyaviy texnologiyalar",
    image: hero,
  },
];

const Kafedra = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? Kafedras.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === Kafedras.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const item = Kafedras[currentIndex];

  return (
    <div className="w-[100%] h-[800px] bg-[#00000080] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={item.image}
          src={item.image}
          alt="kafedra image"
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
        />
      </AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full top-0 left-0"
      >
        <div className="max-w-[1380px] mx-auto h-full pt-[100px] flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
              <h3 className="font-[250] font-made-thin text-[24px] leading-[105%] text-[#FFFFFF]">
                Kafedralar
              </h3>
              <div className="flex items-center gap-7 pr-5">
                <img
                  src={swiper_arrow}
                  alt="prev"
                  loading="lazy"
                  onClick={prevSlide}
                  className="rotate-180 cursor-pointer hover:opacity-50"
                />
                <img
                  src={swiper_arrow}
                  alt="next"
                  loading="lazy"
                  onClick={nextSlide}
                  className="cursor-pointer hover:opacity-45"
                />
              </div>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="mx-auto pt-10"
              >
                <h1 className="w-1/2 font-[300] font-made text-[48px] leading-[110%] text-[#FFFFFF] uppercase">
                  {item.description}
                </h1>
                <MagneticButton className="w-[196px] h-[64px] cursor-pointer bg-[#EFEFEF] rounded-[100px] text-[#2B3767] font-[300] font-made px-[32px] py-[20px] flex items-center mt-8 gap-3">
                  Fakultetlar
                  <img
                    src={kafedra_arrow}
                    alt="kafedra arrow click"
                    loading="lazy"
                  />
                </MagneticButton>
              </motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`footer-${item.id}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-end">
                <h1 className="font-made font-[300] text-[250px] leading-[100%] bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF]/0 bg-clip-text text-transparent">
                  {item.title}
                </h1>
                <p className="text-[#FFFFFF] font-made font-[300] text-[48px] leading-[110%]">
                  0{item.id}
                  <span className="text-[36px] text-[#EFEFEF]/30">
                    /0{Kafedras.length}
                  </span>
                </p>
              </div>
              {/* Pagination progress */}
              <div className="h-[5px] my-6 flex gap-[10px]">
                {Kafedras.map((_, index) => (
                  <div
                    key={index}
                    className="h-full w-full bg-white/20 rounded-full overflow-hidden"
                  >
                    {index === currentIndex && (
                      <motion.div
                        className="h-full bg-white rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Kafedra;