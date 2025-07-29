import { motion } from "framer-motion";
import vector from "../assets/image 2778.svg";
import vector1 from "../assets/image 2780.svg";
import iconright from "../assets/icons/Arrow_right_light.svg";


const HeroSection = () => {
  const Card = ({ img, title }: { img: string; title: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-[338px] h-[200px]  border-[5px] border-white border-opacity-10 shadow-2xl shadow-white/10 z-100 overflow-hidden cursor-pointer group"
    >
      {/* Rasm */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay (qora fon) */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500 z-10" />

      {/* Matn */}
      <div className="absolute top-4 z-20 flex items-center px-5">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-white text-[20px] font-made font-[300] uppercase transition-all duration-500 group-hover:translate-y-[-4px]"
        >
          {title}
        </motion.h1>
      </div>

      {/* Pastki tugma */}
      <div className="absolute bottom-5 right-5 z-30 bg-white p-[10px] rounded-full transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
        <img src={iconright} alt="icon" className="w-[24px] h-[24px]" />
      </div>
    </motion.div>
  );
  return (
    <div className="flex items-center gap-3">
      <Card img={vector} title="Xalqaro talabalar uchun qabul" />
      <Card img={vector1} title="Batafsil ma’lumot olish" />
    </div>
  );
};

export default HeroSection;
