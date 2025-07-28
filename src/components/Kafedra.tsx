import { useState } from "react";
import kafedra from "../assets/kafedra.png";
import swiper_arrow from "../assets/swiper-arrow-click.svg";
import kafedra_arrow from "../assets/kafedra-arrow-click.svg";

const Kafedras = [
  {
    id: 1,
    title: "Moliya",
    description: "Moliya va moliyaviy texnologiyalar",
  },
  {
    id: 2,
    title: "Moliya",
    description: "Moliya va moliyaviy texnologiyalar",
  },
  {
    id: 3,
    title: "Moliya",
    description: "Moliya va moliyaviy texnologiyalar",
  },
];

const Kafedra = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Kafedras.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === Kafedras.length - 1 ? 0 : prev + 1
    );
  };

  const item = Kafedras[currentIndex];

  return (
    <div className="w-screen h-[800px] bg-[#00000080] relative">
      <img
        src={kafedra}
        alt="kafedra image"
        loading="lazy"
        className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
      />
      <div className="w-full h-full top-0 left-0 border">
        <div
          key={item.id}
          className="max-w-[1380px] mx-auto h-full pt-[100px] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start justify-between">
              <h3
                title={item.title}
                className="font-[250] font-made-thin text-[24px] leading-[105%] text-[#FFFFFF]"
              >
                Kafedralar
              </h3>
              <div className="flex items-center gap-7 pr-5">
                <img
                  src={swiper_arrow}
                  alt="swiper arrow click"
                  loading="lazy"
                  onClick={prevSlide}
                  className="rotate-180 cursor-pointer hover:opacity-50"
                />
                <img
                  src={swiper_arrow}
                  alt="swiper arrow click"
                  loading="lazy"
                  onClick={nextSlide}
                  className="cursor-pointer hover:opacity-45"
                />
              </div>
            </div>
            <div className="mx-auto pt-10">
              <h1
                title={item.description}
                className="w-1/2 font-[300] font-made text-[48px] leading-[110%] text-[#FFFFFF] uppercase"
              >
                {item.description}
              </h1>
              <button className="w-[196px] h-[64px] bg-[#EFEFEF] rounded-[100px] text-[#2B3767] font-[300] font-made px-[32px] py-[20px] flex items-center mt-8 gap-3">
                Fakultetlar
                <img
                  src={kafedra_arrow}
                  alt="kafedra arrow click"
                  loading="lazy"
                />
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end">
              <h1
                title={item.title}
                className="font-made font-[300] text-[250px] leading-[100%] bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF]/0 bg-clip-text text-transparent"
              >
                {item.title}
              </h1>
              <p className="text-[#FFFFFF] font-made font-[300] text-[48px] leading-[110%]">
                0{item.id}
                <span className="text-[36px] text-[#EFEFEF]/30">
                  /0{Kafedras.length}
                </span>
              </p>
            </div>

            {/* pagination */}
            <div className="h-[5px] bg-[#FFFFFF]/30 my-6 flex">
              {Kafedras.map((_, index) => (
                <div
                  key={index}
                  className={`h-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white w-[80px]"
                      : "bg-white/20 w-[40px]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kafedra;