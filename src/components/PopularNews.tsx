import news_arrow from "../assets/news-arrow-click.svg";
import news_1 from "../assets/news-image-1.svg";
import news_2 from "../assets/news-image-2.svg";
import arrow_right_light from "../assets/arrow_right_light.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const news = [
  {
    id: 1,
    title: "USAT – Ko‘rgazmada",
    date: "19 Iyun 2005",
    type: "Yangilik",
    img: news_1,
  },
  {
    id: 2,
    title: "USAT “Yosh ma’rifatchilar” jamoasining navbatdagi yutug‘i",
    date: "19 Iyun 2005",
    type: "Yangilik",
    img: news_2,
  },
  {
    id: 3,
    title: "USAT - Sport tadbirlari",
    date: "19 Iyun 2005",
    type: "Yangilik",
    img: news_1,
  },
  {
    id: 4,
    title: "Kontrakt narxlari juda arzon qilindi!",
    date: "19 Iyun 2005",
    type: "Yangilik",
    img: news_2,
  },
];

const PopularNews = () => {
  return (
    <div className="pt-[120px]">
      <div className="max-w-[1380px] mx-auto flex items-end justify-between">
        <div>
          <h1
            title="USATda nima yangilik?"
            className="text-[#2B3767] font-[300] font-made text-[36px] leading-[110%] uppercase"
          >
            USATda nima yangilik?
          </h1>
          <p className="text-[#2B3767] font-[400] font-manrope text-[16px] leading-[140%] mt-3">
            Ta’lim, ilm-fan va talabalar hayotidagi eng so‘nggi <br />
            yangiliklar bilan tanishing
          </p>
        </div>
        <button className="w-[265px] h-[64px] bg-[#2B3767] text-[#FFFFFF] rounded-[100px] font-[300] font-made text-[16px] leading-[100%] flex items-center justify-center cursor-pointer gap-3">
          Barcha Yangiliklar
          <img src={news_arrow} alt="news arrow click" loading="lazy" />
        </button>
      </div>

      <Swiper
        spaceBetween={10}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        modules={[Autoplay]}
        className="max-w-[1380px] mx-auto mt-12"
      >
        {news.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-[385px]">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[234px] flex flex-col justify-between gap-[20px] p-[20px]">
              <div className="flex items-center justify-between">
                <h4 className="text-[#BDBDBD] font-[400] font-manrope text-[16px] leading-[100%] uppercase">
                  {item.date}
                </h4>
                <h4 className="text-[#BDBDBD] font-[400] font-manrope text-[16px] leading-[100%] uppercase">
                  {item.type}
                </h4>
              </div>
              <h1 className="text-[#2B3767] font-[300] font-made text-[28px] leading-[120%] line-clamp-2">
                {item.title}
              </h1>
              <div className="flex justify-start">
                <button className="cursor-pointer bg-[#F4C05B] px-[30px] py-[20px] flex items-center justify-center rounded-[100px] text-[#2B3767] font-[300] font-made leading-[100%] text-[16px] gap-3">
                  Batafsil ma’lumot
                  <img
                    src={arrow_right_light}
                    alt="arrow right light"
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularNews;