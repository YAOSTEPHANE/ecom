import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProduitZoom from "../../components/ProduitZoom/ProduitZoom";


const DetailsProduits = () => {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Accueil
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Mode
            </Link>
            <Link
              underline="hover"
              color="inherit"

              className="link transition"
            >
              Coton Casual T-shirts à manches courtes
            </Link>
          </Breadcrumbs>
        </div>

        <section className="bg-white py-5">
          <div className="container flex gap-8">
            <div className="produitZoomContainer w-[40%]">
              <ProduitZoom />
            </div>
            <div className="produitContent w-[60%]">
              <h1 className="text-2xl font-bold mb-3">
                Gosriki Women’s Pink Ethnic Motifs Printed Kurta
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-[13px]">Marque:  <span className="font-[500] text-black">Gosriki</span>
                </span>
              </div>
              <p className="text-gray-600 mb-3">
                Description of the product goes here. It should provide details about the fabric, design, and any other relevant information.
              </p>
              <div className="flex items-center mb-3">
                <span className="text-lg font-bold text-red-500">12000 Fcfa</span>
                <span className="line-through text-gray-400 ml-2">20000 Fcfa</span>
              </div>
              <button className="btn-org">Ajouter au panier</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailsProduits;