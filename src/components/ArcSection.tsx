import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export const universityFacts = [
  {
    id: 1,
    name: "Xalqaro Hamkorlik",
    desc: "Universitet dunyoning 20 dan ortiq mamlakatlari bilan akademik hamkorlikni yo‘lga qo‘ygan.",
  },
  {
    id: 2,
    name: "Ikki Diplom",
    desc: "Talabalar bir vaqtning o‘zida ikki davlat diplomi bilan bitirish imkoniyatiga ega.",
  },
  {
    id: 3,
    name: "Ilmiy Loyihalar",
    desc: "Har yili yuzlab talabalar ilmiy grant va startap loyihalarda ishtirok etishadi.",
  },
  {
    id: 4,
    name: "Stajirovkalar",
    desc: "Talabalar nufuzli xorijiy kompaniyalarda amaliyot o‘tash imkoniyatiga ega.",
  },
  {
    id: 5,
    name: "Innovatsion Yondashuv",
    desc: "Darslar zamonaviy texnologiyalar va interaktiv metodikalar orqali o‘qitiladi.",
  },
  {
    id: 6,
    name: "Xalqaro Talabalar",
    desc: "30 ga yaqin davlatdan talabalar tahsil olayotgani – xalqaro muhit yaratadi.",
  },
  {
    id: 7,
    name: "Professor-o‘qituvchilar",
    desc: "O‘zbekiston va xorijdan jalb qilingan tajribali ustozlar dars beradi.",
  },
  {
    id: 8,
    name: "Kampus Sharoitlari",
    desc: "Kutubxona, sport zallari, kovorking va Wi-Fi bilan to‘liq jihozlangan zamonaviy kampus.",
  },
  {
    id: 9,
    name: "Ingliz Tili Muhiti",
    desc: "Ko‘plab fanlar ingliz tilida olib boriladi va tilni chuqur o‘rganishga imkon beradi.",
  },
  {
    id: 10,
    name: "Karera Markazi",
    desc: "Bitiruvchilarni ishga joylashtirish va startaplarni rivojlantirish uchun maxsus markaz faoliyat yuritadi.",
  },
  {
    id: 11,
    name: "Erkin Fikr va Tanqidiy Tahlil",
    desc: "Har bir talaba mustaqil fikrlashga, bahslashishga va yangilik yaratishga undaladi.",
  },
  {
    id: 12,
    name: "Talaba Hayoti",
    desc: "Klublar, festivallar, tanlovlar va seminarlar bilan boy talaba hayoti.",
  },
];

const ArcSection = () => {
  const centerX = 690;
  const centerY = 690;
  const radius = 600;

  const [rotation, setRotation] = useState(-360);
  const [activeId, setActiveId] = useState(1); // Default = pastki
  const arcRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const points = [
    { id: 7, angle: 90 },
    { id: 6, angle: 120 },
    { id: 5, angle: 150 },
    { id: 4, angle: 180 },
    { id: 3, angle: 210 },
    { id: 2, angle: 240 },
    { id: 1, angle: 270 },
  ];

  const getPosition = (angle: number, r = radius) => {
    const adjustedAngle = angle + rotation;
    const radian = (adjustedAngle * Math.PI) / 180;
    const x = centerX + r * Math.cos(radian);
    const y = centerY + r * Math.sin(radian);
    return { x, y };
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0.7, // kamida 20% component ko‘rinsa, true
      }
    );

    if (arcRef.current) {
      observer.observe(arcRef.current);
    }

    return () => {
      if (arcRef.current) observer.unobserve(arcRef.current);
    };
  }, []);
  useEffect(() => {
    const element = arcRef.current;
    if (!element) return;
    const MAX_ROTATION = 180; // max 180 gradus aylansin
    const ROTATION_SPEED = 0.5; // scrollTop * 0.5 bo‘yicha

    const handleScroll = () => {
      if (!isInView || !element) return;

      const scrollTop = element.scrollTop;
      const newRotation = Math.min(scrollTop * ROTATION_SPEED, MAX_ROTATION);

      const top = points
        .map((point) => {
          const angle = point.angle + newRotation;
          const rad = (angle * Math.PI) / 180;
          const y = centerY + radius * Math.sin(rad);
          return { id: point.id, y };
        })
        .sort((a, b) => a.y - b.y)[0];

      setActiveId(top.id);
      setRotation(newRotation);
    };

    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [isInView]);

  const activeFact = universityFacts.find((fact) => fact.id === activeId);

  return (
    <div
      className="overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar-none lg:h-screen xl:max-h-[1000px] "
      ref={arcRef}
    >
      <div className="lg:h-[1550px] xl:h-[1500px] relative">
        <div className="max-w-[1380px] sticky top-0 z-10 h-[800px] mx-auto overflow-hidden ">
          <div className="arcSection h-[400px] w-full absolute bottom-0 z-20"></div>
          <div className="mt-[120px] mb-[100px]">
            <h1 className="text-[48px] text-[#2B3767] text-center font-made  uppercase">
              USAT — bu shunchaki <br /> universitet emas
            </h1>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="relative  w-[1380px] h-[1380px] flex items-center justify-center ">
              <svg width="1380" height="1380" className="absolute inset-0">
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={radius}
                  fill="none"
                  stroke="rgb(253 224 71)"
                  strokeWidth="2"
                />
                {points.map((point) => {
                  const pos = getPosition(point.angle);
                  return (
                    <line
                      key={`line-${point.id}`}
                      x1={centerX}
                      y1={centerY}
                      x2={pos.x}
                      y2={pos.y}
                      strokeWidth="3"
                    />
                  );
                })}
              </svg>

              {points.map((point) => {
                const pos = getPosition(point.angle);
                const labelPos = getPosition(point.angle, radius + 80);

                const isActive = point.id === activeId; // 👈 new

                return (
                  <div key={point.id}>
                    {/* dot */}
                    <div
                      className={`absolute w-4 h-4 ${
                        isActive ? "bg-[#F4C05B] z-20" : "bg-yellow-300 z-10"
                      } rounded-full transform -translate-x-1/2 -translate-y-1/2`}
                      style={{ left: pos.x, top: pos.y }}
                    />

                    {/* label */}
                    <div
                      className={`absolute w-[80px] h-[80px] rounded-full border-2 flex items-center justify-center font-medium text-[24px] shadow-lg transform -translate-x-1/2 -translate-y-1/2
        ${
          isActive
            ? "bg-[#F4C05B] text-white z-30 border-[#F4C05B]"
            : "bg-white text-blue-900 z-10 border-[#F4C05B]"
        }`}
                      style={{ left: labelPos.x, top: labelPos.y }}
                    >
                      {point.id}
                    </div>
                  </div>
                );
              })}

              {/* 🟡 Markazdagi text — faqat activeId asosida chiqadi */}
              <AnimatePresence mode="wait">
                {activeFact && (
                  <motion.div
                    key={activeFact.id} // <- albatta unique bo‘lishi kerak
                    className="w-[800px] z-20 absolute top-70 flex justify-center flex-col items-center"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.h1
                      className="text-[40px] text-[#2B3767] text-center font-made uppercase"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.4 }}
                    >
                      {activeFact.name}
                    </motion.h1>
                    <motion.p
                      className="text-[20px] text-[#2B3767] text-center font-medium"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.2 }}
                    >
                      {activeFact.desc}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcSection;