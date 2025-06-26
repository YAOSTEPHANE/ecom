import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';
import BannerBoxV2 from "../BannerBoxV2/BannerBoxV2";
const PubliciteV2 = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide className="w-full">
          <BannerBoxV2 info="left" image={"./src/images/sub-banner-1.jpg"} link={'/'} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <BannerBoxV2 info="right" image={"./src/images/sub-banner-2.jpg"} link={'/'} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <BannerBoxV2 info="left" image={"./src/images/sub-banner-1.jpg"} link={'/'} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <BannerBoxV2 info="right" image={"./src/images/sub-banner-2.jpg"} link={'/'} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <BannerBoxV2 info="left" image={"./src/images/sub-banner-1.jpg"} link={'/'} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <BannerBoxV2 info="left" image={"./src/images/sub-banner-1.jpg"} link={'/'} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <BannerBoxV2 info="left" image={"./src/images/sub-banner-1.jpg"} link={'/'} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PubliciteV2;