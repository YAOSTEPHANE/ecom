import InnerImageZoom from 'react-inner-image-zoom';
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';

const ProduitZoom = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig=useRef();
    const zoomSliderSml=useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSliderBig.current.swiper.slideTo(index);
        zoomSliderSml.current.swiper.slideTo(index);
    };

    return (
        < >
            <div className='flex gap-3'>
                <div className='slider w-[15%]'>
                    <Swiper
                    ref={zoomSliderSml}
                        direction={'vertical'}
                        spaceBetween={0}
                        slidesPerView={5}
                        modules={[Navigation]}
                        navigation={true}
                        className='zoomProductSliderThumbs h-[500px] overflow-hidden'
                    >
                        <SwiperSlide className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(0)}>
                            <img src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp" className='w-full transition-all group-hover:scale-110'
                            />
                        </SwiperSlide>
                        <SwiperSlide className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(1)}>
                            <img src="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg" className='w-full transition-all group-hover:scale-110'
                            />
                        </SwiperSlide>
                        <SwiperSlide className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(2)}>
                            <img src="https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg" className='w-full transition-all group-hover:scale-110'
                            />
                        </SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        
                    </Swiper>
                </div>
                <div className='zoomContainer w-[85%] h-[500px] overflow-hidden relative'>
                    <Swiper
                        ref={zoomSliderBig}

                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={false}
                    >
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
                            />
                        </SwiperSlide>
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className='item rounded-md overflow-hidden cursor-pointer group'>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src="https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg"
                            />
                        </SwiperSlide>
                       
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ProduitZoom