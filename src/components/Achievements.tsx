import React, { useState, useEffect } from "react";
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
  const [hovered, setHovered] = useState<string | null>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX + 50);
      y.set(e.clientY - 20);
    };

    if (hovered) {
      window.addEventListener("mousemove", move);
    }

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [hovered]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  const grouped = achievements.reduce((acc, item) => {
    acc[item.year] = acc[item.year] ? [...acc[item.year], item] : [item];
    return acc;
  }, {} as Record<number, Achievement[]>);

  return (
    <div className="relative p-6 md:p-12 max-w-[1380px] mx-auto font-sans">
      <div className="flex  items-center py-20">
        <h2 className="text-[40px] w-[871px] font-semibold text-[#2B3767] mb-2">
          KUCHLI UNIVERSITET – <br />
          <span className="italic font-light">SEZILARLI g‘alabalar</span>
        </h2>
        <p className="text-[16px] w-[504px] text-justify font-manrope text-gray-600 mb-8 max-w-lg">
          Biz erishgan natijalarimiz bilan faxrlanamiz: xalqaro tanlovlardagi
          ishtirokimiz, talabalar va o‘qituvchilarimizning g‘alabalari, ilmiy
          maqolalar, yuqori reytinglar. USAIT – bu o‘rgatuvchi, rivojlantirgan
          va kelajak uchun hissa qo‘shayotgan universitet.
        </p>
      </div>
      {Object.keys(grouped)
        .sort((a, b) => +b - +a)
        .map((year) => (
          <div key={year} className="flex justify-between">
            <div className="w-[30%]">
              <h1 className="text-[24px] font-bold text-[#2B3767] mb-4">
                /{year}
              </h1>
            </div>
            <div className="space-y-4 w-[70%]">
              {grouped[+year].map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHovered(item.image)}
                  onMouseLeave={() => setHovered(null)}
                  onMouseMove={(e) => {
                    x.set(e.clientX + 20);
                    y.set(e.clientY + 20);
                  }}
                  className="grid grid-cols-3 gap-4 items-start border-b border-gray-200 pb-4 cursor-pointer"
                >
                  <div className="text-[16px] text-[#2B3767]">{item.date}</div>
                  <div className="text-blue-900 text-[24px] font-medium">
                    {item.title}
                  </div>
                  <div className="text-[16px] text-[#2B3767] flex items-center justify-between gap-1 font-manrope ">
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
            className="absolute top-0 -left-[18%]  w-[300px] h-[300px] object-cover rounded-lg z-50 shadow-lg pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements;
