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
            Electronique
          </Link>
        </Breadcrumbs>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-4">
        <div className="produitZoomContainer w-[40%]">
          <ProduitZoom  />
        </div>
      </div>
      </section>
    </div>
    </>
  );
};

export default DetailsProduits;