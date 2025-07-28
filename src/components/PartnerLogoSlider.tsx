import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import second from '../assets/partners/ApplePay.png'
const logos = [second, second, second, second, second, second, second, second, second];

export default function PartnerLogoSlider() {
  return (
    <div className="bg-white w-full py-10">
      <div className="max-w-[1440px] py-[120px] mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={6}
          spaceBetween={40}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`partner-logo-${index}`}
                className="h-10 w-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
