import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-[#FFE000] px-5 md:px-10 pt-[10px]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-[20px] md:gap-[50px] justify-between pb-[22px]">
            <div className="max-w-[250px]">
                <Link to={'/'} className="mb-[15px]">
                    <img src="/images/logo.svg" alt="footer logo" />
                </Link>
                <p className="text-[14px] font-[700] leading-[22px] text-[#000000] mb-5">SLOGAN lLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex gap-[14px] items-center">
                    <img src="/images/telegram.svg" alt="telegram logo" />
                    <img src="/images/you tube.svg" alt="youtube logo" />
                    <img src="/images/instagram.svg" alt="instagram logo" />
                </div>
            </div>
            <ul className="max-w-[250px] mt-[15px]">
                <li className="text-[26px] font-[700] leading-[100%] mb-[5px]">Курсы</li>
                <li className="text-[20px] font-[400] leading-[100%] mb-[10px]">Работотехника</li>
                <li className="text-[20px] font-[400] leading-[100%] mb-[10px]">Английский для взрослых</li>
                <li className="text-[20px] font-[400] leading-[100%] mb-[10px]">Английский для детей</li>
                <li className="text-[20px] font-[400] leading-[100%] mb-[10px]">Шахмат</li>
                <li className="text-[20px] font-[400] leading-[100%] mb-[10px]">Живопись</li>
            </ul>
            <ul className="max-w-[250px] mt-[15px]">
                <li className="text-[26px] font-[700] leading-[100%] mb-[5px]">Контакты</li>
                <li className="text-[20px] font-[400] leading-[100%] mb-[10px]">Телеграм</li>
                <li className="text-[20px] font-[400] leading-[100%] mb-[10px]">Инстаграм</li>
                <li className="text-[20px] font-[400] leading-[100%] mb-[10px]">Ютюб</li>
            </ul>
            <div className="max-w-[250px] mt-[15px]">
            </div>
        </div>
        <div className="max-w-[1280px] mx-auto">
            <p className="font-[600] text-[14px] leading-[100%] pb-[17px]">Ideallux.com © 2000-2024, All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer