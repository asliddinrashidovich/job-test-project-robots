function Hero() {
  return (
    <div className="bg-[#111] px-[9px]">
        <div className="bg-[#000] hero_img w-full rounded-[30px] flex pl-[53px] ">
            <div className="max-w-[651px] bg-[#fff] rounded-[30px] py-12 px-[50px] mt-[50px] mb-[60px]">
                <h2 className="text-[#000] font-[600] text-[84px] leading-[100%] mb-[9px]">JustRobotics</h2>
                <p className="text-[#000] font-[500] text-[40px] leading-[42px] mb-[80px]">твой проводник в мир технологий и искусства</p>
                <p className="text-[#000] text-[20px] font-[400] leading-[100%] mb-[6px]">получите бесплатное первое занятие</p>
                <button className="text-[24px] font-[700] leading-[100%] text-[#FFE001] py-[15px] px-[44px] bg-[#000] rounded-[8px] cursor-pointer">Перейти к курсам</button>
            </div>
            <div>
                <img src="/images/robot-hero.svg" alt="backgroun hero" />
            </div>
        </div>
    </div>
  )
}

export default Hero