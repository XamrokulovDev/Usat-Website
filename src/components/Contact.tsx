const Contact = () => {
  return (
    <div className="py-[120px] bg-[#2B3767]">
      <div className="max-w-[1380px] mx-auto text-[#fff] text-[24px] ">
        <h1 className="font-blacksword mb-[40px]">Savollaringiz qoldimi?</h1>
        <h1 className="uppercase font-made text-[56px]">SAlom, bu meni</h1>
        <form action="#" className="flex flex-col gap-[20px]">
          <div className="pl-[80px] w-full flex items-center gap-[10px]">
            <label htmlFor="name" className="text-[56px] uppercase font-made">
              ismim
            </label>
            <input
              type="text"
              className="border-b w-full text-center text-[20px] p-[25px] h-[74px]  bg-transparent outline-none"
              id="name"
              name="name"
              placeholder="Bu yerga o’zingizni ismingizni kiriting"
            />
          </div>
          <div className="w-full flex items-center ">
            <label
              htmlFor="name"
              className="text-[56px] w-[47%] uppercase font-made"
            >
              telefon raqamim
            </label>
            <input
              type="text"
              className="border-b w-[54%] text-center text-[20px] p-[25px] h-[74px]  bg-transparent outline-none"
              id="name"
              name="name"
              placeholder="Bu yerga o’zingizni telefon raqamingizni kiriting"
            />
          </div>
          <div className="w-full flex items-center ">
            <label
              htmlFor="name"
              className="text-[56px] w-[40%] uppercase font-made"
            >
              savolim
            </label>
            <input
              type="text"
              className="border-b w-[70%] text-center text-[20px] p-[25px] h-[74px]  bg-transparent outline-none"
              id="name"
              name="name"
              placeholder="Bu yerga o’zingizni savolingizni kiriting"
            />
          </div>
          <div className="flex justify-end px-[120px] pt-[40px]">
            <button
              type="submit"
              className="w-[200px] h-[200px] bg-[#F4C05B] font-made text-[#2B3767] rounded-full text-[16px] p-[40px]"
            >
              Yuborish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
