import React, { useState } from "react";
import Homeslider from "../../components/HomeSlider/Homeslider";
import CartSlider from "../../components/HomeCatSlider/CartSlider";
import { FaShippingFast } from "react-icons/fa";
import Publicite from "../../components/PubBannersslider/Publicite";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Produits from "../../components/Produitsslider/Produits";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BlogItem from "../../components/Blog/blog";
import HomesliderV2 from "../../components/HomeSliderV2/HomesliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2/BannerBoxV2";
import PubliciteV2 from "../../components/PubBannerssliderV2/PubliciteV2";

const Home = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Homeslider />
      <section className="py-6">
        <div className="container flex gap-5">
          <div className="part1 w-[75%]">
            <HomesliderV2 />
          </div>
          <div className="part2 w-[80%] flex items-center gap-2 justify-between flex-col">
            <BannerBoxV2 info="left" image={"./src/images/sub-banner-1.jpg"} />
            <BannerBoxV2 info="right" image={"./src/images/sub-banner-2.jpg"}  />
          </div>
        </div>
      </section>
      <CartSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="lefSec">
              <h2 className="text-[20px] font-[600]">Produits populaires</h2>
              <p className="text-[14px] font-[400]">
                Obtenez jusqu’à 50 % de réduction sur les nouveaux styles de la
                saison, durée limitée seulement
              </p>
            </div>
            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Mode" />
                <Tab label="Electronique" />
                <Tab label="Hygiène" />
                <Tab label="Maison" />
                <Tab label="Electromenagers" />
                <Tab label="Informatique" />
                <Tab label="Beauté" />
                <Tab label="Telephones" />
                <Tab label="Accessoires" />
                <Tab label="Tablettes" />
                <Tab label="Ordinateurs" />
                <Tab label="Hommes" />
              </Tabs>
            </div>
          </div>
          <Produits items={6} />
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[#FF5252] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Livraison rapide
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 text-[16px] font-[500]">
                Livraison rapide et partout en Cote d'Ivoire
              </p>
            </div>
            <p className="font-bold text-[25px]">à partir de 1000F</p>
          </div>
          <PubliciteV2 items={4} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">Nouveaux produits</h2>
          <Produits items={6} />
          <Publicite items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">Produits en vedette</h2>
          <Produits items={6} />
          <Publicite items={3} />
        </div>
      </section>

      <section className="py-5 pb-8 pt-0 bg-white blogSection ">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        
      </section>
    </>
  );
};

export default Home;
