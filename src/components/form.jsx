function FormSection() {
  
  return (
    <section className="bg-[#121212] px-5 md:px-10 py-[30px] md:py-[80px]">
        <div className="max-w-[1280px] mx-auto">
            <h2 className="text-[24px] md:text-[70px] lg:text-[96px] font-[700] leading-[100%] lg:leading-[100px] text-[#F0D625] text-center mb-[80px]">получите бесплатный первый урок</h2>
            <form className="flex gap-[15px] flex-col lg:flex-row lg:flex-wrap justify-start lg:justify-between items-center mb-[80px]">
              <input type="text" placeholder="Ваше имя" className="w-full lg:w-auto border-none outline-none py-[15px] pl-[29px] rounded-[9px] bg-[#fff]"/>
              <input type="text" placeholder="Номер телефона" className="w-full lg:w-auto border-none outline-none py-[15px] pl-[29px] rounded-[9px] bg-[#fff]"/>
              <select name="select_kurs" id="select_kurs" className="w-full lg:w-auto border-none outline-none py-[15px] pl-[29px] rounded-[9px] bg-[#fff]">
                <option value="Работотехника">Работотехника</option>
                <option value="Живопись для взрослых">Живопись для взрослых</option>
                <option value="Шахмат">Шахмат</option>
                <option value="Английский">Английский</option>
              </select>
              <input type="text" placeholder="Возраст" className="w-full lg:w-auto border-none outline-none py-[15px] pl-[29px] rounded-[9px] bg-[#fff]"/>
              <button className="header_button w-full lg:w-auto text-[#000] py-[16px] px-[52px] font-[700] text-[24px] leading-[100%] rounded-[7px] bg-[#FFE000] cursor-pointer">
                  получить
              </button>
            </form>
            <div className="flex items-center gap-[10px] md:gap-[60px] mb-[80px]">
              <button className="header_button  text-[#000] py-[16px] px-[10px] md:px-[52px] font-[700] text-[24px] leading-[100%] rounded-[7px] bg-[#FFE000] cursor-pointer">
                  Филиал Ц4
              </button>
              <button className="text-[#000] py-[16px] px-[10px] md:px-[52px] font-[700] text-[24px] leading-[100%] rounded-[7px] bg-[#fff] cursor-pointer">
                  Филиал Беруни
              </button>
            </div>
            <div className="flex items-center justify-center gap-[10px  ] md:gap-[56px]">
              <div className="flex items-center gap-[10px] md:gap-[23px]">
                <img src="/images/phone.svg" className="max-w-[20px] md:max-w-[100%]" alt="phone" />
                <p className="text-[14px] md:text-[24px] font-[400] leading-[100%] text-[#fff]">Адрес Орьентир</p>
              </div>
              <div className="flex items-center gap-[10px] md:gap-[23px]">
                <img src="/images/location.svg" className="max-w-[20px] md:max-w-[100%]" alt="location" />
                <p className="text-[14px] md:text-[24px] font-[400] leading-[100%] text-[#fff]">График работы</p>
              </div>
              <div className="flex items-center gap-[10px] md:gap-[23px]">
                <img src="/images/chass.svg" className="max-w-[20px] md:max-w-[100%]" alt="clock" />
                <p className="text-[14px] md:text-[24px] font-[400] leading-[100%] text-[#fff]">Номера телефонов</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default FormSection