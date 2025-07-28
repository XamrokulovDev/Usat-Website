import { motion } from "framer-motion";
import vector from "../assets/vector.svg";

const HeroSection = () => {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-[338px] h-[200px] bg-[#EFEFEF] relative p-5"
      >
        <h1
          title="Ariza topshirish"
          className="text-[#000000] text-[16px] leading-[100%] font-made font-[300]"
        >
          Ariza topshirish
        </h1>
        <img
          src={vector}
          alt="hero image"
          loading="eager"
          className="w-[53px] h-[53px] object-cover absolute top-[50%] left-1/2 translate-[-50%]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-[338px] h-[200px] bg-[#EFEFEF] relative p-5"
      >
        <h1
          title="Batafsil ma’lumot olish"
          className="text-[#000000] text-[16px] leading-[100%] font-made font-[300]"
        >
          Batafsil ma’lumot olish
        </h1>
        <img
          src={vector}
          alt="hero image"
          loading="eager"
          className="w-[53px] h-[53px] object-cover absolute top-[50%] left-1/2 translate-[-50%]"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;