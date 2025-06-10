import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Homeslider = () => {
  return (
    <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-lg overflow-hidden">
                <img
              src="./src/images/banner 1.jpg"
              alt="banner slide"
              className="w-full"
            />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./src/images/banner 2.jpg"
              alt="banner slide"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./src/images/banner 3.jpg"
              alt="banner slide"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./src/images/banner 4.jpg"
              alt="banner slide"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./src/images/banner 5.jpg"
              alt="banner slide"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./src/images/banner 6.jpg"
              alt="banner slide"
              className="w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Homeslider;
