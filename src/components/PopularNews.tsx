import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import MagneticButton from "../lib/MagneticButton";
import news_1 from "../assets/news-image-1.svg";
import news_2 from "../assets/news-image-2.svg";
import news_arrow from "../assets/news-arrow-click.svg";
import arrow_right_light from "../assets/arrow_right_light.svg";

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

const PopularNews = ({
  onVisibleNewsChange,
}: {
  onVisibleNewsChange: (ids: number[]) => void;
}) => {
  return (
    <div className="max-w-[1380px] mx-auto">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[#2B3767] font-[300] font-made text-[36px] uppercase">
            USATda nima yangilik?
          </h1>
          <p className="text-[#2B3767] font-manrope text-[16px] mt-3">
            Ta’lim, ilm-fan va talabalar hayotidagi eng so‘nggi yangiliklar bilan tanishing
          </p>
        </div>
        <MagneticButton className="w-[265px] h-[64px] bg-[#2B3767] text-white rounded-[100px] font-[300] font-made text-[16px] flex items-center justify-center gap-3">
          Barcha Yangiliklar
          <img src={news_arrow} alt="arrow" loading="lazy" />
        </MagneticButton>
      </div>
      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        onSlideChange={(swiper) => {
          const currentIndex = swiper.realIndex;
          const slidesPerView = swiper.params.slidesPerView as number;

          const visibleIds = [];
          for (let i = 0; i < slidesPerView; i++) {
            const index = (currentIndex + i) % news.length;
            visibleIds.push(news[index].id);
          }

          onVisibleNewsChange(visibleIds);
        }}
        modules={[Autoplay]}
        className="mt-12"
      >
        {news.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-[385px]">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="h-[234px] flex flex-col justify-between p-[20px] gap-[20px]">
              <div className="flex items-center justify-between">
                <h4 className="text-[#BDBDBD] text-[16px] uppercase">{item.date}</h4>
                <h4 className="text-[#BDBDBD] text-[16px] uppercase">{item.type}</h4>
              </div>
              <h1 className="text-[#2B3767] text-[28px] font-[300] font-made line-clamp-2 leading-[120%]">
                {item.title}
              </h1>
              <div>
                <MagneticButton className="bg-[#F4C05B] px-[30px] py-[20px] rounded-[100px] text-[#2B3767] text-[16px] font-[300] flex items-center gap-3">
                  Batafsil ma’lumot
                  <img src={arrow_right_light} alt="arrow" />
                </MagneticButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularNews;