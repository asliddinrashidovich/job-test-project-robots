function Result() {
  return (
   <div className="bg-[#111] h-[420px] sm:h-[250px] px-5 md:px-10 relative z-10">
        <div className="max-w-[1280px] mx-auto flex flex-wrap justify-center md:grid md:grid-cols-3 md:justify-between gap-[10px] md:gap-[43px] ">
            <div className="card_result min-w-[195px] md:min-w-[100%] rounded-[30px] pt-[50px] lg:pt-[127px] pb-[35px] px-[26px] bg-[#F0D625] text-center relative top-[50px] lg:top-[-92px] z-7">
                <h2 className="text-[#000] text-[20px] md:text-[70px] lg:text-[120px] font-[800] leading-[100%]">300+</h2>
                <p className="text-[#000] font-[600] text-[12px] md:text-[25px] lg:text-[40px] leading-[15px] md:leading-[42px]">Довольных студентов</p>
            </div>
            <div className="card_result min-w-[195px] md:min-w-[100%] rounded-[30px] pt-[50px] lg:pt-[127px] pb-[35px] px-[26px] bg-[#F0D625] text-center relative top-[50px] lg:top-[-92px] z-7">
                <h2 className="text-[#000] text-[20px] md:text-[70px] lg:text-[120px] font-[800] leading-[100%]">25+</h2>
                <p className="text-[#000] font-[600] text-[12px] md:text-[25px] lg:text-[40px] leading-[15px] md:leading-[42px]">Преподавателей</p>
            </div>
            <div className="card_result min-w-[195px] md:min-w-[100%] rounded-[30px] pt-[50px] lg:pt-[127px] pb-[35px] px-[26px] bg-[#F0D625] text-center relative top-[50px] lg:top-[-92px] z-7">
                <h2 className="text-[#000] text-[20px] md:text-[70px] lg:text-[120px] font-[800] leading-[100%]">60+</h2>
                <p className="text-[#000] font-[600] text-[12px] md:text-[25px] lg:text-[40px] leading-[15px] md:leading-[42px]">групп</p>
            </div>
        </div>
    </div>
  )
}

export default Result