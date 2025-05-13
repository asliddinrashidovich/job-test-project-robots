import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-[#000] py-[23px] px-5 md:px-10 border-t-[14px] border-b-[14px] border-[#FFE000]">
        <div className="max-w-[1280px] mx-auto flex items-center gap-[28px] justify-between">
            <Link to={"/"} className="max-w-[111px]">
                <img src="/images/logo.svg" alt="main logo" />
            </Link> 
            <div className="flex gap-[50px] items-center">
                <ul className="flex gap-[50px] items-center">
                    <li className="text-[#fff] text-[24px] font-[400] leading-[100%]">
                        <a href="#">Главная</a>
                    </li>
                    <li className="text-[#fff] text-[24px] font-[400] leading-[100%]">
                        <a href="#">О нас</a>
                    </li>
                    <li>
                        <select name="kurs" id="kurs" className="kurs_select">
                            <option className="kurs_option" value="Курсы">Курсы</option>
                            <option className="kurs_option" value="робототехника">робототехника</option>
                            <option className="kurs_option" value="Английский">Английский</option>
                            <option className="kurs_option" value="Живопись для детей">Живопись для детей</option>
                            <option className="kurs_option" value="Живопись для взрослых">Живопись для взрослых</option>
                        </select>
                    </li>
                    <li className="text-[#fff] text-[24px] font-[400] leading-[100%]">
                        <a href="#">Контакты</a>
                    </li>
                </ul>
                <button className="header_button text-[#000] py-[16px] px-[52px] font-[700] text-[24px] leading-[100%] rounded-[7px] bg-[#FFE000] cursor-pointer">
                    Позвонить
                </button>
                <div className="flex items-center">
                    <button className="py-[12px] px-[18px] text-[#F0D625] rounded-[14px] font-[400] leading-[100%] text-[21px] bg-transparent cursor-pointer">
                        RU
                    </button>
                    <button className="py-[12px] px-[18px] text-[#fff] rounded-[14px] font-[400] leading-[100%] text-[21px] bg-[#FFE000] cursor-pointer">
                        UZ
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header