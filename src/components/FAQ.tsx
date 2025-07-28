"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const faqData = [
  {
    category: "UMUMIY SAVOLLAR",
    questions: [
      {
        question: "USAT QANDAY UNIVERSITET?",
        answer: "",
      },
      {
        question: "USATDA DARSLAR QAYSI TILDA OLIB BORILADI?",
        answer:
          "Asosan o'zbek va rus tillarida, ayrim yo'nalishlar ingliz tilida olib boriladi.",
      },
      {
        question: "KAMPUSDA QANDAY SHAROITLAR MAVJUD?",
        answer:
          "Kampus zamonaviy auditoriyalar, kutubxona, karyera markazi, ochiq sport maydonchalari va kovorking hududlari bilan jihozlangan.",
      },
    ],
  },
  {
    category: "QABUL VA ARIZA TOPSHIRISH",
    questions: [
      {
        question: "QANDAY QILIB USATGA HUJJAT TOPSHIRISH MUMKIN?",
        answer:
          "Ariza onlayn tarzda rasmiy veb-sayt orqali yuboriladi. Ariza topshirish uchun pasport, attestat va boshqa kerakli hujjatlar talab etiladi.",
      },
      {
        question: "QABUL IMTIHONLARI BO'LADIMI?",
        answer:
          "Ba'zi yo'nalishlarda suhbat yoki ichki testlar bo'lishi mumkin. Batafsil ma'lumot yo'nalish sahifasida ko'rsatiladi.",
      },
      {
        question: "QAYSI HUJJATLAR KERAK BO'LADI?",
        answer:
          "Asosiy hujjatlar: pasport (ID karta), attestat yoki diplom, 3×4 fotosurat, til sertifikati (agar mavjud bo'lsa).",
      },
      {
        question: "ARIZA TOPSHIRISH MUDDATI QACHONGACHA?",
        answer:
          "Qabul jarayoni odatda yoz oylarida boshlanadi va avgust oxirigacha davom etadi. Aniq sanalar har yili e'lon qilinadi.",
      },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const categoryVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.08,
    },
  },
};

const questionVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const answerVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    marginTop: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
    marginTop: 16,
    transition: {
      duration: 0.4,
      ease: [0.04, 0.62, 0.23, 0.98],
      opacity: { delay: 0.1 },
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const iconVariants: Variants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export default function FAQComponent() {
  const [openIndexes, setOpenIndexes] = useState<string[]>([
    "0-1",
    "0-2",
    "1-0",
  ]);

  const toggleIndex = (index: string) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <motion.div
      className="bg-white  w-full text-[#2B3767]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-[1380px] mx-auto py-16">
        {faqData.map((cat, catIdx) => (
          <motion.div
            key={catIdx}
            variants={categoryVariants}
          >
            <div className="grid grid-cols-12 gap-8">
              {/* Category Title */}
              <div className="col-span-3">
                <motion.h2
                  className="text-[24px] font-made text-[#2B3767] sticky top-8 py-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: catIdx * 0.1,
                  }}
                >
                  /{cat.category}
                </motion.h2>
              </div>

              {/* Questions */}
              <div className="col-span-9">
                <motion.div
                  className="space-y-0"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  {cat.questions.map((item, idx) => {
                    const index = `${catIdx}-${idx}`;
                    const isOpen = openIndexes.includes(index);

                    return (
                      <motion.div
                        key={index}
                        className="border-b border-gray-200 "
                        variants={questionVariants}
                      >
                        <motion.button
                          onClick={() => toggleIndex(index)}
                          className="w-full text-left py-6 flex items-start justify-between group"
                          whileHover={{
                            backgroundColor: "rgba(0, 0, 0, 0.01)",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-[24px] font-made text-[#2B3767] pr-8 leading-relaxed">
                            {item.question}
                          </span>
                          <motion.span
                            className="text-2xl font-light text-[#2B3767] flex-shrink-0 mt-1"
                            variants={iconVariants}
                            animate={isOpen ? "open" : "closed"}
                          >
                            {isOpen ? "—" : "+"}
                          </motion.span>
                        </motion.button>

                        <AnimatePresence mode="wait">
                          {isOpen && item.answer && (
                            <motion.div
                              variants={answerVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <motion.p
                                className="text-[16px] text-[#2B3767] font-manrope leading-relaxed pb-6 pr-12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.15, duration: 0.3 }}
                              >
                                {item.answer}
                              </motion.p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
