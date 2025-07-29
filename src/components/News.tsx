import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import news_1 from "../assets/news-image-1.svg";
import news_2 from "../assets/news-image-2.svg";
import expand_right_light from "../assets/expand_right_light.svg";

const news = [
  {
    id: 1,
    title: "USAT talabalar anjumanida ishtirok etdi",
    date: "15 Mart 2024",
    type: "Yangilik",
    img: news_1,
  },
  {
    id: 2,
    title: "Yangi o‘quv markazi ochildi",
    date: "22 Aprel 2024",
    type: "Yangilik",
    img: news_2,
  },
  {
    id: 3,
    title: "Talabalar orasida ilmiy tanlov o‘tkazildi",
    date: "30 May 2024",
    type: "Yangilik",
    img: news_1,
  },
  {
    id: 4,
    title: "USATda IT haftaligi boshlandi",
    date: "01 Iyun 2024",
    type: "Yangilik",
    img: news_2,
  },
  {
    id: 5,
    title: "Robototexnika bo‘yicha seminar o‘tkazildi",
    date: "10 Iyun 2024",
    type: "Yangilik",
    img: news_1,
  },
  {
    id: 6,
    title: "Yozgi amaliyot dasturi boshlandi",
    date: "18 Iyun 2024",
    type: "Yangilik",
    img: news_2,
  },
  {
    id: 7,
    title: "USAT - Madaniy tadbirlar haftaligi",
    date: "25 Iyun 2024",
    type: "Yangilik",
    img: news_1,
  },
  {
    id: 8,
    title: "USAT kutubxonasi yangilandi",
    date: "03 Iyul 2024",
    type: "Yangilik",
    img: news_2,
  },
  {
    id: 9,
    title: "Yangi o‘quv yiliga tayyorgarlik boshlandi",
    date: "12 Iyul 2024",
    type: "Yangilik",
    img: news_1,
  },
  {
    id: 10,
    title: "Bitiruvchilar uchun tantanali marosim",
    date: "27 Iyul 2024",
    type: "Yangilik",
    img: news_2,
  },
];

const News = ({ hiddenIds }: { hiddenIds: number[] }) => {
  const visibleNews = news.filter((item) => !hiddenIds.includes(item.id));

  return (
    <div className="mt-20 pb-[120px] max-w-[1380px] mx-auto">
      <Swiper
        spaceBetween={20}
        loop={false}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
        className="cursor-ew-resize"
      >
        {visibleNews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[216px] flex flex-col justify-between border-t border-[#DCDCDC] pt-[30px] gap-[20px]">
              <h3 className="text-[#BDBDBD] text-[16px] uppercase">{item.date}</h3>
              <h1 className="text-[#2B3767] text-[24px] font-[300] font-made uppercase line-clamp-2">
                {item.title}
              </h1>
              <button className="w-[241px] h-[64px] bg-[#F2F5FC] rounded-[100px] text-[#2B3767] text-[16px] font-[300] flex items-center justify-center gap-3">
                Batafsil ma’lumot
                <img src={expand_right_light} alt="arrow" />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;