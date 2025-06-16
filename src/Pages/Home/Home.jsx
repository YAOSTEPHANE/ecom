import React from "react";
import Homeslider from "../../components/HomeSlider/Homeslider";
import CartSlider from "../../components/HomeCatSlider/CartSlider";
import { FaShippingFast } from "react-icons/fa";
import Publicite from "../../components/PubBannersslider/Publicite";

const Home = () => {
  return (
    <>
      <Homeslider />
      <CartSlider />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="freeShipping w-full py-4 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">Livraison rapide</span>
            </div>

            <div className="col2">
              <p className="mb-0 text-[16px] font-[500]">
                Livraison rapide et partout en Cote d'Ivoire
              </p>
              </div>
              <p className="font-bold text-[25px]">à partir de 1000F</p>
          </div>
          <Publicite />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
