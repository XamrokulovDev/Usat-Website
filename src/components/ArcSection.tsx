import { motion } from "framer-motion";
import { useRef } from "react";

const ArcSection = () => {
  const ref = useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: ref,
  //     offset: ["start end", "end start"], // Scroll boshidan oxirigacha
  //   });

  // Rotate scrollga bog‘liq
  //   const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  //   const [rotation, setRotation] = useState(0);

  //   const handleRotate = () => {
  //     setRotation((prev) => prev + 45); // 45 gradusga aylantir
  //   };
  return (
    <section
      ref={ref}
      className="h-[100vh]  flex flex-col font-made items-center justify-center bg-white overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[#1C2C5B] text-[48px] my-40 mb-10 uppercase"
      >
        USAT – bu shunchaki <br /> universitet emas
      </motion.h2>

      <div className="w-[1380px] mx-auto relative">
        <div className="relative w-full h-[60px] mt-10">
          {/* Uzun chiziq */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black -translate-y-1/2 "></div>

          {/* 12 ta kvadrat + doira */}
          <div className="absolute top-0 left-0 w-full flex justify-between">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div key={idx} className="relative">
                {/* Yuqoridagi doira */}
                <div className="absolute bottom-[50%] left-1/2 -translate-x-1/2 w-[60px] h-[60px] rounded-full border border-[#F4C05B] flex items-center justify-center text-sm bg-white">
                  {idx + 1}
                  <span className="w-[20px] h-[20px] bg-red-400 absolute bottom-[-40px] left-1/2 -translate-x-1/2 rounded-full"> </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArcSection;
