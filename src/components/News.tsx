import expand_right_light from "../assets/expand_right_light.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const news = [
  {
    id: 1,
    date: "19 Iyun 2025",
    title: "2025/26 o‘quv yili uchun arizalar qabuli ochiq",
  },
  {
    id: 2,
    date: "20 Iyun 2025",
    title: "Yangi o‘quv dasturi joriy etiladi",
  },
  {
    id: 3,
    date: "21 Iyun 2025",
    title: "Talabalarga yangi imkoniyatlar yaratilmoqda",
  },
  {
    id: 4,
    date: "22 Iyun 2025",
    title: "Online platforma ishga tushdi",
  },
];

const News = () => {
  return (
    <div className="pb-[120px] mt-20 max-w-[1380px] mx-auto">
      <Swiper
        spaceBetween={20}
        centeredSlides={false}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        className="cursor-ew-resize"
      >
        {news.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[216px] flex flex-col justify-between gap-[20px] border-t border-[#DCDCDC] pt-[30px]">
              <h3
                title={item.date}
                className="text-[#BDBDBD] font-[400] font-manrope text-[16px] leading-[100%] uppercase"
              >
                {item.date}
              </h3>
              <h1
                title={item.title}
                className="text-[#2B3767] font-[300] font-made text-[24px] leading-[100%] uppercase"
              >
                {item.title}
              </h1>
              <button className="w-[241px] h-[64px] bg-[#F2F5FC] flex items-center justify-center gap-3 rounded-[100px] text-[#2B3767] font-[300] font-made text-[16px] leading-[100%] cursor-pointer">
                Batafsil ma’lumot
                <img
                  src={expand_right_light}
                  alt="expand right light"
                  loading="lazy"
                />
              </button>
              {/* <MagneticButton className="w-[241px] h-[64px] bg-[#F2F5FC] flex items-center justify-center gap-3 rounded-[100px] text-[#2B3767] font-[300] font-made text-[16px] leading-[100%] cursor-pointer">
                Batafsil ma’lumot
                <img
                  src={expand_right_light}
                  alt="expand right light"
                  loading="lazy"
                />
              </MagneticButton> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
