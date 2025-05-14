import Swipper from "./swipper"

function Cards() {
  return (
    <section className="card_img py-[30px] md:py-[80px] px-5 md:px-10 relative top-[0px]  z-4">
        <div className="max-w-[1280px] mx-auto ">
            <h2 className="text-[20px] md:text-[60px] lg:text-[96px] text-center font-[700] leading-[100%] lg:leading-[100px] text-[#F0D625] mb-[30px] md:mb-[80px]">Авторские кусы от JustRobotics</h2>
            <div className="flex md:grid overflow-auto md:grid-cols-2 gap-[15px] md:gap-x-[58px] md:gap-y-[50px] relative">
                <div className="card_item min-w-[250px] p-[15px] md:py-[30px] lg:py-[43px] md:px-[35px] lg:px-[51px] rounded-[30px] bg-[#181818] md:bg-[#F0D625]">
                    <div className="rounded-[30px] overflow-hidden mb-[21px] w-full">
                        <img className="w-full h-[190px] object-cover" src="/images/chemistry.png" alt="chemistry" />
                    </div>
                    <h2 className="text-[16px] md:text-[25px] lg:text-[40px] font-[700] leading-[42px] h-[30px] md:h-[auto] text-[#fff] md:text-[#000] mb-[30px] md:mb-[114px]">Робототехника</h2>
                    <div className="flex justify-between">
                        <div></div>
                        <button className="text-[15px] md:text-[20px] font-[600] leadinig-[100%] text-[#fff] px-[5px] md:px-[10px] lg:px-[20px] py-[7px] rounded-[50px] bg-[#000]">{`Подробнее о кусе ->`}</button>
                    </div>
                </div>
                <div className="card_item min-w-[250px] p-[15px] md:py-[30px] lg:py-[43px] md:px-[35px] lg:px-[51px] rounded-[30px] bg-[#181818] md:bg-[#F0D625]">
                    <div className="rounded-[30px] overflow-hidden mb-[21px] w-full">
                        <img className="w-full h-[190px] object-cover" src="/images/art.png" alt="art" />
                    </div>
                    <h2 className="text-[16px] md:text-[25px] lg:text-[40px] font-[700] leading-[42px] h-[30px] md:h-[auto] text-[#fff] md:text-[#000] mb-[30px] md:mb-[114px]">Живопись для детей</h2>
                    <div className="flex justify-between">
                        <div></div>
                        <button className="text-[15px] md:text-[20px] font-[600] leadinig-[100%] text-[#fff] px-[5px] md:px-[10px] lg:px-[20px] py-[7px] rounded-[50px] bg-[#000]">{`Подробнее о кусе ->`}</button>
                    </div>
                </div>
                <div className="card_item min-w-[250px] p-[15px] md:py-[30px] lg:py-[43px] md:px-[35px] lg:px-[51px] rounded-[30px] bg-[#181818] md:bg-[#F0D625]">
                    <div className="rounded-[30px] overflow-hidden mb-[21px] w-full">
                        <img className="w-full h-[190px] object-cover" src="/images/teacher.png" alt="teacher" />
                    </div>
                    <h2 className="text-[16px] md:text-[25px] lg:text-[40px] font-[700] leading-[42px] h-[30px] md:h-[auto] text-[#fff] md:text-[#000] mb-[30px] md:mb-[114px]">Живопись для взрослых</h2>
                    <div className="flex justify-between">
                        <div></div>
                        <button className="text-[15px] md:text-[20px] font-[600] leadinig-[100%] text-[#fff] px-[5px] md:px-[10px] lg:px-[20px] py-[7px] rounded-[50px] bg-[#000]">{`Подробнее о кусе ->`}</button>
                    </div>
                </div>
                <div className="card_item min-w-[250px] p-[15px] md:py-[30px] lg:py-[43px] md:px-[35px] lg:px-[51px] rounded-[30px] bg-[#181818] md:bg-[#F0D625]">
                    <div className="rounded-[30px] overflow-hidden mb-[21px] w-full">
                        <img className="w-full h-[190px] object-cover" src="/images/students.png" alt="students" />
                    </div>
                    <h2 className="text-[16px] md:text-[25px] lg:text-[40px] font-[700] leading-[42px] h-[30px] md:h-[auto] text-[#fff] md:text-[#000] mb-[30px] md:mb-[114px]">Английский язык для детей</h2>
                    <div className="flex justify-between">
                        <div></div>
                        <button className="text-[15px] md:text-[20px] font-[600] leadinig-[100%] text-[#fff] px-[5px] md:px-[10px] lg:px-[20px] py-[7px] rounded-[50px] bg-[#000]">{`Подробнее о кусе ->`}</button>
                    </div>
                </div>
                <div className="card_item min-w-[250px] p-[15px] md:py-[30px] lg:py-[43px] md:px-[35px] lg:px-[51px] rounded-[30px] bg-[#181818] md:bg-[#F0D625]">
                    <div className="rounded-[30px] overflow-hidden mb-[21px] w-full">
                        <img className="w-full h-[190px] object-cover" src="/images/chess.png" alt="chess" />
                    </div>
                    <h2 className="text-[16px] md:text-[25px] lg:text-[40px] font-[700] leading-[42px] h-[30px] md:h-[auto] text-[#fff] md:text-[#000] mb-[30px] md:mb-[114px]">Шахмат</h2>
                    <div className="flex justify-between">
                        <div></div>
                        <button className="text-[15px] md:text-[20px] font-[600] leadinig-[100%] text-[#fff] px-[5px] md:px-[10px] lg:px-[20px] py-[7px] rounded-[50px] bg-[#000]">{`Подробнее о кусе ->`}</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-[1280px] mx-auto mt-[130px]">
            <h2 className="text-[23px] text-[#F0D625] font-[700] leading-[32px] mb-[20px]">отзывы</h2>
            <div>
                <Swipper/>
            </div>
        </div>
    </section>
  )
}

export default Cards