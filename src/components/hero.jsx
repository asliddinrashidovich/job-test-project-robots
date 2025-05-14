import { useNavigate } from "react-router-dom"

function Hero() {
  const navigate = useNavigate()
    function handleClick() {
        navigate("/form")
    }
  return (
    <div className="bg-[#111] px-[9px] z-20 relative pt-[60px] md:pt-[110px] lg:pt-[167px]">
        <div className="bg-[#000] hero_img w-full relative rounded-[30px] flex justify-between pl-[20px] md:pl-[53px] ">
            <div className="max-w-[231px] md:max-w-[451px] lg:max-w-[651px] bg-[#fff] rounded-[30px] p-[15px] md:py-12 md:px-[50px] mt-[50px] md:mt-[80px] mb-[60px] ">
                <h2 className="text-[#000] font-[600] text-[30px] md:text-[50px] lg:text-[84px] leading-[100%] mb-[9px]">JustRobotics</h2>
                <p className="text-[#000] font-[500]  text-[16px] md:text-[30px] lg:text-[40px] leading-[16px] md:leading-[42px] mb-[10px] md:mb-[80px]">твой проводник в мир технологий и искусства</p>
                <p className="text-[#000] text-[14px] md:text-[20px] font-[400] leading-[100%] mb-[6px]">получите бесплатное первое занятие</p>
                <button onClick={handleClick} className="text-[14px] md:text-[24px] font-[700] leading-[100%] text-[#FFE001] p-[10px] md:py-[15px]  md:px-[44px] bg-[#000] rounded-[8px] cursor-pointer">Перейти к курсам</button>
            </div>
            <div className="absolute bottom-0 right-0 max-w-[240px]  sm:max-w-[300px] md:max-w-[500px] ml-auto lg:max-w-[800px]">
                <img src="/images/robot-hero.svg" alt="backgroun hero" />
            </div>
        </div>
    </div>
  )
}

export default Hero