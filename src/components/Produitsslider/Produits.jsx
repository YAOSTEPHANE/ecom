import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Produits = (props) => {
  return (
    <div className="produitsSlider">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide className="w-full">
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Produits;
