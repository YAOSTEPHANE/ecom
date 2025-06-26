import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay,EffectFade, Pagination, Navigation } from "swiper/modules";
import Button from "@mui/material/Button";

const HomesliderV2 = () => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"fade"}

        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,EffectFade, Pagination, Navigation]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="./src/images/image2.jpg" alt="" />
            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700 ">
              <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
                Grande vente de jours d’économie
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
                Acheter Chaise Moderne en
Couleur noire
              </h2>
              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0">
                À partir de seulement
                <span className="text-primary text-[30px] font-[800]">
                  15000 Fcfa
                </span>
              </h3>
              <div className="w-full  relative -right-[100%] opacity-0 btn_">
                <Button className="btn-org">Achetez Maintenant</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden">
            <img src="./src/images/images1.jpg" alt="" />
            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700 ">
              <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
                Grande vente de jours d’économie
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
                Femmes Solide Rond T-shirt jaune
              </h2>
              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0">
                À partir de seulement
                <span className="text-primary text-[30px] font-[800]">
                  5000 Fcfa
                </span>
              </h3>
              <div className="w-full  relative -right-[100%] opacity-0 btn_">
                <Button className="btn-org">Achetez Maintenant</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomesliderV2;
