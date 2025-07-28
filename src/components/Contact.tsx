const Contact = () => {
  return (
    <div className="py-[120px] bg-[#2B3767]">
      <div className="max-w-[1380px] mx-auto flex justify-between ">
        <div className="text-[#fff]">
          <h1 className="text-[24px]">SAVOLLARINGIZ qoldimi?</h1>
          <h1 className="text-[40px] font-made uppercase">
            Biz bilan bog‘laning
          </h1>
          <p className="text-[20px] font-manrope font-[400]">
            Bizga yozing — sizga imkon qadar tezroq javob beramiz
          </p>
        </div>
        <form action="#" className="flex flex-col w-[600px] gap-[10px]">
          <input
            type="text"
            placeholder="Ismingiz"
            className="w-full border border-[#3F57B6] rounded-[15px] text-[20px] text-[#fff] px-[25px] py-[20px] bg-transparent outline-none"
          />
          <input
            type="text"
            placeholder="Ismingiz"
            className="w-full border border-[#3F57B6] rounded-[15px] text-[20px] text-[#fff] px-[25px] py-[20px] bg-transparent outline-none"
          />
          <textarea
            placeholder="Ismingiz"
            className="w-full h-[200px] border border-[#3F57B6] rounded-[15px] text-[20px] text-[#fff] px-[25px] py-[20px] bg-transparent outline-none"
          />
          <button className="w-full border bg-[#F4C05B] rounded-[15px] text-[20px] px-[25px] py-[20px] text-[#2B3767] cursor-pointer">
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
