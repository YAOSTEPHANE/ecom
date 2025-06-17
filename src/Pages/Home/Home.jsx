import React from "react";
import Homeslider from "../../components/HomeSlider/Homeslider";
import CartSlider from "../../components/HomeCatSlider/CartSlider";
import { FaShippingFast } from "react-icons/fa";
import Publicite from "../../components/PubBannersslider/Publicite";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Produits from "../../components/Produitsslider/Produits";

const Home = () => {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Homeslider />
      <CartSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="lefSec">
              <h2 className="text-[20px] font-[600]">Produits populaires</h2>
              <p className="text-[14px] font-[400]">
                ne manquez pas les offres en cours jusqu'à la fin du mois de
                mars
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

          <Produits items={5} />

        </div>
      </section>

      <section className="py-16 bg-white">
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
          <Publicite items={4} />
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
