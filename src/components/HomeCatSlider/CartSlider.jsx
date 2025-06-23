import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const CartSlider = () => {
  return (
    <div className="homeCartslider pt-4 py-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./src/images/file_1734525204708_fash.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Mode</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./src/images/file_1734525218436_ele.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Electronique</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./src/images/OIP.webp"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Hygiène</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./src/images/OIP.webp"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Maison</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./src/images/OIP.webp"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Electromenagers</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./src/images/OIP.webp"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Informatique</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./src/images/file_1734525255799_beauty.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Beauté</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./src/images/OIP.webp"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Telephones</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./src/images/file_1734525239704_foot.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Accessoires</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CartSlider;
