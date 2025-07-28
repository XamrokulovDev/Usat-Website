import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import pic from "../assets/Img.svg";
interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Musayev Jonibek",
    position: "Marketing bo‘limi boshlig‘i",
    image: pic,
  },
  {
    id: 2,
    name: "Musayev Jonibek",
    position: "Marketing bo‘limi boshlig‘i",
    image: pic,
  },
  {
    id: 3,
    name: "Musayev Jonibek",
    position: "Marketing bo‘limi boshlig‘i",
    image: pic,
  },
  {
    id: 4,
    name: "Musayev Jonibek",
    position: "Marketing bo‘limi boshlig‘i",
    image: pic,
  },
  {
    id: 5,
    name: "Musayev Jonibek",
    position: "Marketing bo‘limi boshlig‘i",
    image: pic,
  },
  {
    id: 6,
    name: "Musayev Jonibek",
    position: "Marketing bo‘limi boshlig‘i",
    image: pic,
  },
  {
    id: 7,
    name: "Musayev Jonibek",
    position: "Marketing bo‘limi boshlig‘i",
    image: pic,
  },
  {
    id: 8,
    name: "Musayev Jonibek",
    position: "Marketing bo‘limi boshlig‘i",
    image: pic,
  },
  {
    id: 9,
    name: "Musayev Jonibek",
    position: "Marketing bo‘limi boshlig‘i",
    image: pic,
  },
  {
    id: 10,
    name: "Musayev Jonibek",
    position: "Marketing bo‘limi boshlig‘i",
    image: pic,
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="bg-[#F2F5FC]  py-16 px-6 md:px-10">
      <div className="max-w-[1380px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-[40px] font-[300] font-made text-[#2B3767] leading-tight">
            ILHOMLANTIRA OLADIGAN <br /> PROFESSIONALLAR
          </h2>
          <p className="text-[#2B3767] w-[500px] text-[16px] font-[400] text-justify font-manrope leading-[140%]">
            USAT jamoasi — bu akademik darajaga ega, xalqaro tajribaga va amaliy
            bilimlarga ega bo‘lgan o‘qituvchilar jamoasi. Ular talabalarimizga
            faqat kasbni emas, balki o‘z salohiyatini to‘liq ochish va
            rivojlantirish yo‘lida yo‘l ko‘rsatishadi.
          </p>
        </div>

        <Swiper
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          scrollbar={{
            draggable: true,
          }}
          modules={[Scrollbar]}
          className="pb-10 cursor-ew-resize"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="py-10">
                <div>
                  <div className="py-4">
                    <h3 className="font-[300] font-made leading-[100%] text-[18px] text-[#2B3767] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[14px] text-[#888888] font-[400] font-manrope leading-[100%]">
                      {member.position}
                    </p>
                  </div>
                  <div className="w-full aspect-[4/5] flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full "
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <div className="py-10">
                <h1>salom</h1>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
