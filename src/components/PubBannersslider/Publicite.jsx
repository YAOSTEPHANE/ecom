import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';
import BannerBox from "../BannerBox/BannerBox";
const Publicite = (props) => {
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
          <BannerBox img={'./src/images/file_1734525620831_NewProject(3).jpg' } link={'/'} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <BannerBox img={'./src/images/file_1734525634299_NewProject(2).jpg' } link={'/'} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <BannerBox img={'./src/images/file_1734525653108_NewProject(20).jpg' } link={'/'} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <BannerBox img={'./src/images/file_1734532742018_NewProject(22).jpg' } link={'/'} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <BannerBox img={'./src/images/file_1734525634299_NewProject(2).jpg' } link={'/'} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <BannerBox img={'./src/images/file_1734525653108_NewProject(20).jpg' } link={'/'} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <BannerBox img={'./src/images/file_1734532742018_NewProject(22).jpg' } link={'/'} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Publicite;