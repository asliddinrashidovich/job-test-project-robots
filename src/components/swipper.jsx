import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const ArrayData = [0,0,0,0,0,0,0]
// import required modules
import { Pagination } from 'swiper/modules';

export default function Swipper() {
  return (
     <div className="w-full px-4">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {ArrayData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-[30px] h-[310px] bg-[#C4C4C4]"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
