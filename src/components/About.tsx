import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import MagneticButton from "../lib/MagneticButton";
import ArrowRight from "../assets/about-arrow-click.svg";

const Counter = ({ to }: { to: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = to;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 16));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 16);
  }, [to]);

  return <>{count}+</>;
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1.2, ease: "easeOut" },
        },
      }}
      className="max-w-[1380px] mx-auto py-[120px] flex items-start justify-between max-lg:flex-wrap"
    >
      <div className="w-[100%] md:w-[35%] mb-[40px] md:mb-0">
        <h3
          title="USAT haqida"
          className="text-[#2B3767] font-[300] leading-[105%] text-[24px] font-made"
        >
          USAT <span className="font-blacksword">haqida</span>
        </h3>
      </div>
      <div className="w-[100%] md:w-[65%] flex flex-col gap-[30px]">
        <h1
          title="USAT – Fan va Texnologiyalar Universiteti: zamonaviy ta’lim yondashuvi"
          className="text-[#2B3767] font-[300] md:text-[40px] text-[25px] font-made leading-[110%] uppercase"
        >
          USAT – Fan va Texnologiyalar Universiteti: zamonaviy ta’lim yondashuvi
        </h1>
        <p className="text-[#2B3767] font-manrope font-[400] text-[16px] leading-[180%]">
          USAT — bu Toshkentdagi innovatsion oliy ta’lim muassasasi bo‘lib, 18
          ta bakalavriat va 6 ta magistratura yo‘nalishlarini taklif etadi.
          Bugungi kunda bu yerda 5000 dan ortiq talaba tahsil olmoqda, ularga
          100 dan ziyod tajribali va xalqaro darajadagi o‘qituvchilar saboq
          berishmoqda. USAT xalqaro hamkorlikni faol rivojlantirib, kunduzgi,
          kechki, sirtqi va masofaviy o‘qish shakllarini taklif etadi. Bundan
          tashqari, grantlar, chegirmalar va ta’lim kreditlari ham mavjud.
        </p>
        {/* Magnetic button  */}
        <MagneticButton className="w-[241px] flex items-center justify-center gap-3 cursor-pointer group border border-[#2B3767] rounded-full px-[30px] py-[20px]">
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
        </MagneticButton>
        {/* Magnetic button  */}
        <div className="flex max-lg:flex-wrap items-center justify-between gap-[50px] mt-[50px]">
          <div className="w-full md:w-[30%] flex flex-col gap-[10px] border-t border-[#E1EAF8] pt-[30px]">
            <p className="text-[#5D83D4] font-manrope font-[400] text-[16px] leading-[100%]">
              Talabalar soni
            </p>
            <h2
              title="5000+"
              className="text-[#2B3767] font-made font-[300] text-[40px] leading-[100%]"
            >
              <Counter to={5000} />
            </h2>
          </div>
          <div className="w-full md:w-[30%] flex flex-col gap-[10px] border-t border-[#E1EAF8] pt-[30px]">
            <p className="text-[#5D83D4] font-manrope font-[400] text-[16px] leading-[100%]">
              Ta’lim yo‘nalishi
            </p>
            <h2
              title="18"
              className="text-[#2B3767] font-made font-[300] text-[40px] leading-[100%]"
            >
              <Counter to={18} />
            </h2>
          </div>
          <div className="w-full md:w-[30%] flex flex-col gap-[10px] border-t border-[#E1EAF8] pt-[30px]">
            <p className="text-[#5D83D4] font-manrope font-[400] text-[16px] leading-[100%]">
              Universitetlar bilan hamkorlik
            </p>
            <h2
              title="4"
              className="text-[#2B3767] font-made font-[300] text-[40px] leading-[100%]"
            >
              <Counter to={4} />
            </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
