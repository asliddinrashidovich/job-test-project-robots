import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

function Header() {
    const [openSidebar, setOpenSideBar] = useState(false)
    const navigate = useNavigate()
    function handleClick() {
        navigate("/form")
    }

    function handleOpen() {
        setOpenSideBar(true)
    }
    function handleClose() {
        setOpenSideBar(false)
    }
  return (
    <header className="bg-[#000] py-[5px] md:py-[23px] px-5 md:px-10  border-y-[10px] lg:border-y-[14px] border-[#FFE000] box-border z-99 fixed w-full">
        <div className="max-w-[1280px] mx-auto flex items-center gap-[28px] justify-between relative z-80">
            <Link to={"/"} className="lg:min-w-[70px] max-w-[55px] lg:max-w-[111px]">
                <img src="/images/logo.svg" alt="main logo" />
            </Link> 
            <div className="flex gap-[30px] items-center">
                <ul className="hidden lg:flex gap-[25px] items-center">
                    <li className="text-[#fff] text-[24px] text-nowrap font-[400] leading-[100%]">
                        <a href="#">Главная</a>
                    </li>
                    <li className="text-[#fff] text-[24px] text-nowrap font-[400] leading-[100%]">
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
                    <li className="text-[#fff] text-[24px] text-nowrap font-[400] leading-[100%]">
                        <a href="#">Контакты</a>
                    </li>
                </ul>
                <button onClick={handleClick} className="header_button text-[#000] hidden lg:flex  py-[16px] px-[10px] w-full font-[700] text-[24px] leading-[100%] rounded-[7px] bg-[#FFE000] cursor-pointer">
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
                <button onClick={handleOpen} className="flex lg:hidden cursor-pointer">
                    <img src="/images/menu_bar.svg" alt="menu_bar" />
                </button>
            </div>
        </div>
        {/* Sidebar  */}
        {<div className={`fixed top-[120.2px] ${openSidebar ? "translate-x-0" : "translate-x-[100%]"} transition-liniar duration-200  right-0 bottom-0 w-full max-w-[431px] z-30  bg-[#000]`}>
            <div className="bg-[#F0D625] pb-[26px] px-[20px] w-full">
                <div className="bg-[#000000] p-[20px]">
                    <div className="py-[8px] pl-[16px] bg-[#000] flex items-center gap-[8px] cursor-pointer">
                        <img src="/images/Category.svg" alt="category" />
                        <p className="p-2 text-[24px] font-[400] leading-[100%] text-[#fff]">Главная</p>
                    </div>
                    <hr className="my-[16px] border-[#FFFFFF1A] border-[1px]"/>
                    <div className="py-[8px] pl-[16px] bg-[#000] flex items-center gap-[8px] cursor-pointer">
                        <img src="/images/Edit Square.svg" alt="category" />
                        <p className="p-2 text-[24px] font-[400] leading-[100%] text-[#fff]">О нас</p>
                    </div>
                    <hr className="my-[16px] border-[#FFFFFF1A] border-[1px]"/>
                    <div className="py-[8px] pl-[16px] bg-[#000] flex items-center gap-[8px] cursor-pointer">
                        <img src="/images/Chat.svg" alt="category" />
                        <p className="p-2 text-[24px] font-[400] leading-[100%] text-[#fff]">Курсы</p>
                    </div>
                    <hr className="my-[16px] border-[#FFFFFF1A] border-[1px]"/>
                    <div className="py-[8px] pl-[16px] bg-[#000] flex items-center gap-[8px] cursor-pointer">
                        <img src="/images/3 User.svg" alt="category" />
                        <p className="p-2 text-[24px] font-[400] leading-[100%] text-[#fff]">Контакты</p>
                    </div>
                    <hr className="my-[16px] border-[#FFFFFF1A] border-[1px]"/>
                </div>
            </div>
            <div className="py-[23px] pl-[25px] bg-[#000000] flex items-center gap-[27px]">
                <Link to={'/'}> 
                    <img src="/images/Linkedin.svg" alt="linkedin" />
                </Link>
                <Link to={'/'}> 
                    <img src="/images/instagram (3).svg" alt="linkedin" />
                </Link>
                <Link to={'/'}> 
                    <img src="/images/twitter.svg" alt="linkedin" />
                </Link>
            </div>
        </div>}
        {openSidebar && <div onClick={handleClose} className="fixed top-[120.2px] left-0 bottom-0 bg-black/70 w-[100%] brightness-50 z-20">

        </div>}
    </header>
  )
}

export default Header