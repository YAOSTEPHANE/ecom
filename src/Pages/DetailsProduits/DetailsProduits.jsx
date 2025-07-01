import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProduitZoom from "../../components/ProduitZoom/ProduitZoom";


const DetailsProduits = () => {
  return (
    <section className="py-5 pb-0">
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

      <div className="container flex gap-4">
        <div className="produitZoomContainer">
          <ProduitZoom  />
        </div>
        <div className="produitDetails"></div>
      </div>
    </section>
  );
};

export default DetailsProduits;