import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Publicite = () => {
  return (
    <>
    <Swiper
            slidesPerView={8}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
        <SwiperSlide>
            
        </SwiperSlide>

          </Swiper>
    </>
  )
}




export default Publicite