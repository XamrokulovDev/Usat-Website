import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import icon from "../assets/icons/Vector 9.svg";
import pic from "../assets/Img.svg";
import pic2 from "../assets/hero.jpg";
// Update type to include image
type Achievement = {
  year: number;
  date: string;
  title: string;
  location: string;
  image: string;
};

const achievements: Achievement[] = [
  {
    year: 2025,
    date: "Fevral 15-17",
    title: "OIC INNOVATION 2025 XAKATONIDA G‘ALABA",
    location: "Samarqand, Registon sh",
    image: pic,
  },
  {
    year: 2024,
    date: "Dekabr 15",
    title: "MILLY IQTISODIYOT OLIMPIADASIDA 1-O‘RIN",
    location: "Samarqand, Registon sh",
    image: pic2,
  },
  {
    year: 2024,
    date: "Sentabr 15-17",
    title: "FINТEX TAHLILI BO‘YICHA XALQARO MAQOLA",
    location: "Samarqand, Registon sh",
    image: pic,
  },
  {
    year: 2023,
    date: "Mart 15-17",
    title: "KARYERANI RIVOJLANTIRISH MARKAZI OCHILISHI",
    location: "Samarqand, Registon sh",
    image: pic2,
  },
  {
    year: 2023,
    date: "Dekabr 15",
    title: "OIC INNOVATION 2023 XAKATONIDA G‘ALABA",
    location: "Samarqand, Registon sh",
    image: pic,
  },
  {
    year: 2023,
    date: "Sentabr 15-17",
    title: "FINТEX TAHLILI BO‘YICHA XALQARO MAQOLA",
    location: "Samarqand, Registon sh",
    image: pic2,
  },
];

const Achievements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();

    const offsetX = e.clientX - bounds.left;
    const offsetY = e.clientY - bounds.top;

    x.set(offsetX + 20);
    y.set(offsetY + 20);
  };

  const grouped = achievements.reduce((acc, item) => {
    acc[item.year] = acc[item.year] ? [...acc[item.year], item] : [item];
    return acc;
  }, {} as Record<number, Achievement[]>);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative p-6 md:p-12 max-w-[1380px] mx-auto font-sans"
    >
      {/* static content */}
      {Object.keys(grouped)
        .sort((a, b) => +b - +a)
        .map((year) => (
          <div key={year} className="flex justify-between">
            <div className="w-[30%]">
              <h1 className="text-[24px] font-[300] font-made leading-[105%] text-[#2B3767] pt-4">
                /{year}
              </h1>
            </div>
            <div className="space-y-4 w-[70%]">
              {grouped[+year].map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHovered(item.image)}
                  onMouseLeave={() => setHovered(null)}
                  className="grid grid-cols-3 gap-4 items-start border-b border-gray-200 pb-4 cursor-pointer"
                >
                  <div className="text-[16px] text-[#2B3767] font-manrope font-[400] leading-[160%]">{item.date}</div>
                  <div className="text-[#2B3767] text-[24px] font-made font-[300] leading-[120%]">
                    {item.title}
                  </div>
                  <div className="text-[16px] text-[#2B3767] flex items-center justify-between gap-1 font-manrope font-[400]">
                    {item.location}
                    <img
                      src={icon}
                      className="w-[22.5px] h-[18px] object-contain"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      <AnimatePresence>
        {hovered && (
          <motion.img
            key={hovered}
            src={hovered}
            initial={{ opacity: 0, scale: 0.95, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.95, rotate: -4 }}
            style={{ x: smoothX, y: smoothY }}
            className="absolute top-0 left-0 w-[300px] h-[300px] object-cover rounded-lg z-50 shadow-lg pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default Achievements;
