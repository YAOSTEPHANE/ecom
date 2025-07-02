import InnerImageZoom from 'react-inner-image-zoom';
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProduitZoom = () => {

    return (
        < >
            <div className='flex gap-3'>
                <div className='slider w-[15%]'>
                    <Swiper
                        direction={'vertical'}
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[Navigation]}
                        navigation={true}
                        className='zoomProductSliderThumbs h-[500px] overflow-hidden'
                    >
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <img src="/src/images/pc.jpg" className='w-full transition-all group-hover:scale-110'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <img src="/src/images/opp3.webp" className='w-full transition-all group-hover:scale-110'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <img src="/src/images/casque.jpg" className='w-full transition-all group-hover:scale-110'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <img src="/src/images/camera.jpg" className='w-full transition-all group-hover:scale-110'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <img src="/src/images/iphone.jpg" className='w-full transition-all group-hover:scale-110'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <img src="/src/images/montre.jpg" className='w-full transition-all group-hover:scale-110'
                            />
                        </SwiperSlide>


                    </Swiper>
                </div>
                <div className='zoomContainer w-[85%] h-[500px] overflow-hidden relative'>
                    <Swiper

                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={false}
                    >
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src="/src/images/mode 3.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src="/src/images/pc.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src="/src/images/pc.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src="/src/images/pc.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src="/src/images/pc.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src="/https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ProduitZoom