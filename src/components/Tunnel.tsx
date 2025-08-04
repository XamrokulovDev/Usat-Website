import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero from "../assets/hero.jpg";
import extra_left_right from "../assets/extra-left-right.svg";
import scroll_bg from "../assets/scroll-bg.svg";

const images = [hero, hero, hero, hero, hero, hero];

const Tunnel: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [lockScroll, setLockScroll] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (lockScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lockScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          setLockScroll(true);
        }
      },
      { threshold: 0.5 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
    return () => {
      if (wrapperRef.current) observer.unobserve(wrapperRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isActive || !wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleHeight = Math.min(windowHeight, rect.height);
      const distance = Math.min(
        Math.max(0, windowHeight - rect.top),
        visibleHeight
      );
      const localProgress = parseFloat((distance / visibleHeight).toFixed(4));
      setProgress(localProgress);
      if (localProgress >= 1) {
        setShowText(true);
        setLockScroll(false);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isActive]);

  return (
    <section className="relative h-[100vh] bg-white" ref={wrapperRef}>
      <img
        src={scroll_bg}
        alt="scroll bg"
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="tunnel-perspective absolute inset-0 flex items-center justify-center">
          <div className="absolute top-0 bottom-0 left-0 right-0 z-10 pointer-events-none">
            <div className="mx-auto w-[75vw] h-full bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>

          {images.map((src, index) => {
            const z = -index * 300 + progress * 1750;
            return (
              <motion.div
                key={`left-${index}`}
                className="absolute w-[200px] h-[180px] overflow-hidden shadow-xl preserve-3d z-0"
                style={{
                  transform: `translate3d(-300px, 0, ${z}px) rotateY(90deg)`,
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </motion.div>
            );
          })}
          {images.map((src, index) => {
            const z = -index * 300 + progress * 1750;
            return (
              <motion.div
                key={`right-${index}`}
                className="absolute w-[200px] h-[180px] overflow-hidden shadow-xl preserve-3d z-0"
                style={{
                  transform: `translate3d(300px, 0, ${z}px) rotateY(90deg)`,
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute w-[656px] flex flex-col gap-[30px] text-center z-20"
            >
              <h1
                title="Kelajagingizga hozirdan birinchi qadam qo‘ying"
                className="text-[#2B3767] font-made font-[300] text-[40px] leading-[120%] uppercase"
              >
                Kelajagingizga hozirdan birinchi qadam qo‘ying
              </h1>
              <p className="text-[#2B3767] text-[20px] font-manrope font-[400] leading-[160%]">
                USAT – bu orzular boshlanadigan va haqiqatga aylantiriladigan
                joy. Ilm, imkoniyat va ilhom bilan boyitilgan muhitda siz
                o‘zingizni topasiz.
              </p>
              <div className="w-full flex items-center justify-center">
                <button className="flex items-center justify-center gap-[10px] bg-[#F4C05B] w-[239px] h-[64px] text-[#2B3767] font-[300] font-made text-[16px] leading-[100%] rounded-[10px] cursor-pointer">
                  Ariza topshirish
                  <img
                    src={extra_left_right}
                    alt="extra left right"
                    className=""
                  />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Tunnel;