import React from "react";
import "../Produits/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating"; // Assuming you have a CS
// S file for styling

const produitsArticles = () => {
  return (
    <div className="produitsArticles shadow-lg rounded-md overflow-hidden  border-1 border-[rgba(0,0,0,0.1)] shadow-md">
      <div className="imgWrapper w-[100%] h-[220px] overflow-hidden rounded-md">
        <img src="./src/images/mode 2.jpg" className="w-full" alt="Produit 1" />
      </div>

      <div className="info p-3">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            Hommes Alias-N Regular
          </Link>
        </h6>
        <h3 className="text-[14px] title mt-1 font-[500] mb-1 text-[#000]">
          <Link to="/" className="link transition-all">
            Fit Spread Collar Shirt SGHWSRHSFDHFDH
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center">
          <h4 className="text-[16px] font-[600] text-[#FF5252]">
            <span className="oldPrice text-[14px] font-[400] text-[#000] line-through mr-4">
              1500 FCFA
            </span>
            2000 FCFA
          </h4>
        </div>
      </div>
    </div>
  );
};

export default produitsArticles;
