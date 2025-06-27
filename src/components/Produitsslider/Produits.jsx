import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProduitsArticles from "../Produits/produitsArticles";

const Produits = (props) => {
  return (
    <div className="produitsSlider py-3">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide className="w-full py-5">
          <ProduitsArticles />
        </SwiperSlide>
        <SwiperSlide className="w-full py-5">
          <ProduitsArticles />
        </SwiperSlide>
        <SwiperSlide className="w-full py-5">
          <ProduitsArticles />
        </SwiperSlide>
        <SwiperSlide className="w-full py-5">
          <ProduitsArticles />
        </SwiperSlide>
        <SwiperSlide className="w-full py-5">
          <ProduitsArticles />
        </SwiperSlide>
        <SwiperSlide className="w-full py-5">
          <ProduitsArticles />
        </SwiperSlide>
        <SwiperSlide className="w-full py-5">
          <ProduitsArticles />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Produits;
