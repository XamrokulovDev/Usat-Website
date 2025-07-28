import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";

import stundet from "../assets/Video preview.svg";
import stundet1 from "../assets/Video preview (1).svg";
import stundet2 from "../assets/Video preview (2).svg";
import stunde4 from "../assets/Video preview (3).svg";
import playIcon from "../assets/icons/Vector 10.svg";
import right from "../assets/icons/Expand_right_light.svg";

// 🔁 Universal embed URL converter
function convertToEmbedUrl(url: string): string {
  if (url.includes("youtube.com/shorts/")) {
    return url.replace("youtube.com/shorts/", "youtube.com/embed/");
  }
  if (url.includes("youtube.com/watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  if (url.includes("youtu.be/")) {
    return url.replace("youtu.be/", "youtube.com/embed/");
  }
  return url;
}

const students = [
  {
    name: "Ziyoda Xolmirzayeva",
    course: "1-kurs talabasi",
    img: stundet,
    video: "https://www.youtube.com/shorts/1K7Ddbm9TjQ",
  },
  {
    name: "Aleksey Ravshanov",
    course: "3-kurs talabasi",
    img: stundet1,
    video: "https://www.youtube.com/shorts/1K7Ddbm9TjQ",
  },
  {
    name: "Nargiz Nuriddinovna",
    course: "1-kurs talabasi",
    img: stundet2,
    video: "https://www.youtube.com/shorts/1K7Ddbm9TjQ",
  },
  {
    name: "Samandar Alimov",
    course: "2-kurs talabasi",
    img: stunde4,
    video: "https://www.youtube.com/shorts/1K7Ddbm9TjQ",
  },
  {
    name: "Ziyoda Xolmirzayeva",
    course: "1-kurs talabasi",
    img: stundet,
    video: "https://www.youtube.com/shorts/1K7Ddbm9TjQ",
  },
  {
    name: "Aleksey Ravshanov",
    course: "3-kurs talabasi",
    img: stundet1,
    video: "https://www.youtube.com/shorts/1K7Ddbm9TjQ",
  },
  {
    name: "Nargiz Nuriddinovna",
    course: "1-kurs talabasi",
    img: stundet2,
    video: "https://www.youtube.com/shorts/1K7Ddbm9TjQ",
  },
  {
    name: "Samandar Alimov",
    course: "2-kurs talabasi",
    img: stunde4,
    video: "https://www.youtube.com/shorts/1K7Ddbm9TjQ",
  },
];

export default function StudentFeedback() {
  const swiperRef = useRef<SwiperType>();
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (!swiperRef.current) return;
    setIsBeginning(swiperRef.current.isBeginning);
    setIsEnd(swiperRef.current.isEnd);
    setActiveVideoIndex(null); // slayt o‘zgarsa — video to‘xtasin
  };

  return (
    <div className="bg-[#FEF8EC] w-full py-16">
      <div className="max-w-[1380px] mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl md:text-[36px] font-[300] font-made text-[#2B3767]">
            TALABALAR VA O‘QITUVCHILARNING <br /> USAT HAQIDAGI{" "}
            <span className="font-blacksword text-[#1C2A53]">fikrlari</span>
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`cursor-pointer ${
                isBeginning ? "opacity-30 pointer-events-none" : "opacity-100"
              }`}
            >
              <img src={right} alt="prev" className="rotate-180" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`cursor-pointer ${
                isEnd ? "opacity-30 pointer-events-none" : "opacity-100"
              }`}
            >
              <img src={right} alt="next" />
            </button>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          className="mt-12"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
        >
          {students.map((student, idx) => {
            const isYouTube = student.video.includes("youtube");
            const isActive = idx === activeVideoIndex;

            return (
              <SwiperSlide key={idx}>
                <div className="relative group rounded overflow-hidden shadow-lg">
                  {isActive ? (
                    isYouTube ? (
                      <iframe
                        src={convertToEmbedUrl(student.video) + "?autoplay=1"}
                        className="w-full h-[500px]"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video
                        src={student.video}
                        controls
                        autoPlay
                        className="w-full h-[500px] object-cover"
                      />
                    )
                  ) : (
                    <>
                      <img
                        src={student.img}
                        alt={student.name}
                        className="w-full h-[500px] object-cover"
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                        onClick={() => setActiveVideoIndex(idx)}
                      >
                        <div className="w-[60px] h-[60px] bg-[#ffffff1a] backdrop-blur-[15px] flex justify-center items-center rounded-full">
                          <img
                            src={playIcon}
                            alt="play icon"
                            className="opacity-80 group-hover:scale-110 transition-transform"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                        <h3 className="font-medium text-[24px] font-blacksword">
                          {student.name}
                        </h3>
                        <p className="text-[14px] font-made">
                          {student.course}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
