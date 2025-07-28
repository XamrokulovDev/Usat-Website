import { NavLink } from "react-router-dom";
import gerb from "../assets/Герб.svg";
const Footer = () => {
  const year = new Date().getFullYear();
  const messagers = [
    {
      name: "INSTAGRAM",
      link: "https://www.instagram.com/",
    },
    {
      name: "TELEGRAM",
      link: "https://t.me/",
    },
    {
      name: "FACEBOOK",
      link: "https://www.facebook.com/",
    },
    {
      name: "YOUTUBE",
      link: "https://www.youtube.com/",
    },
    {
      name: "Usat Admin",
      link: "https://t.me/UsatAdmin",
    },
  ];
  return (
    <div className="bg-[#000000] pt-[120px] h-[707px] font-made relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto text-[#fff] uppercase">
        <div className="flex justify-between items-start">
          <div className="text-[16px]  flex  flex-col gap-[20px]">
            <h1>
              Bizga yozing,va biz <br /> siz bilan bog’lanamiz{" "}
            </h1>
            <p className="text-[#7C7C7C]">ariza qoldirish</p>
          </div>
          <div className="text-[16px] w-[927px] flex justify-between">
            {messagers.map((messager) => (
              <a
                href={messager.link}
                target="_blank"
                rel="noreferrer"
                className="text-[16px]"
              >
                {messager.name}
              </a>
            ))}
          </div>
        </div>
        <div className=" flex flex-col items-end ">
          <div className="max-w-[930px]">
            <h1 className="text-[73px] border-b border-[#454545]">
              admission 2025/2026
            </h1>

            <div className="text-[16px] font-manrope grid grid-cols-3 gap-[200px] py-[100px]">
              <div className="flex flex-col gap-[10px]">
                <h1>+78 888 38 88</h1>
                <p>Toshkent shahri, Chilonzor tumani, Diyor ko‘chasi, 71-uy</p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <NavLink to="/">USAT haqida</NavLink>
                <NavLink to="/">Yo’nalishlar</NavLink>
                <NavLink to="/">talabalar fikrlari</NavLink>
              </div>
              <div className="flex flex-col gap-[10px]">
                <NavLink to="/">karyera</NavLink>
                <NavLink to="/">bog’lanish</NavLink>
              </div>
            </div>
            <div className="text-[#7C7C7C] text-[16px] flex items-center justify-between">
              <p>© All Rights reserved, USAT {year}</p>
              <p>Muvaffaqiyatli kelajak shu yerdan boshlanadi</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={gerb}
        alt=""
        className="w-[867px] h-[867px] absolute -bottom-[50%] -left-[10%] z-0 scale-125"
      />
    </div>
  );
};

export default Footer;
