import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const CartSlider = () => {
  return (
    <div className='homeCartslider'>
        <div className='container'>
<Swiper
        slidesPerView={8}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/">
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src="./src/images/OIP.webp" alt="" className='w-[60px]' />
            <h3 className='text-[15px] font-[500] mt-3'>Tablettes</h3>
          </div>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link to="/">
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src="./src/images/OIP.webp" alt="" className='w-[60px]' />
            <h3 className='text-[15px] font-[500] mt-3'>Tablettes</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src="./src/images/OIP.webp" alt="" className='w-[60px]' />
            <h3 className='text-[15px] font-[500] mt-3'>Tablettes</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src="./src/images/OIP.webp" alt="" className='w-[60px]' />
            <h3 className='text-[15px] font-[500] mt-3'>Tablettes</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src="./src/images/OIP.webp" alt="" className='w-[60px]' />
            <h3 className='text-[15px] font-[500] mt-3'>Tablettes</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src="./src/images/OIP.webp" alt="" className='w-[60px]' />
            <h3 className='text-[15px] font-[500] mt-3'>Tablettes</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src="./src/images/OIP.webp" alt="" className='w-[60px]' />
            <h3 className='text-[15px] font-[500] mt-3'>Tablettes</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src="./src/images/OIP.webp" alt="" className='w-[60px]' />
            <h3 className='text-[15px] font-[500] mt-3'>Tablettes</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src="./src/images/OIP.webp" alt="" className='w-[60px]' />
            <h3 className='text-[15px] font-[500] mt-3'>Tablettes</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img src="./src/images/OIP.webp" alt="" className='w-[60px]' />
            <h3 className='text-[15px] font-[500] mt-3'>Tablettes</h3>
          </div>
          </Link>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}




export default CartSlider;
