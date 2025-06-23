import React from "react";
import "../Produits/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating"; // Assuming you have a CS
import Button from "@mui/material/Button"; // Assuming you have a Button component
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
// S file for styling

const produitsArticles = () => {
  return (
    <div className="produitsArticles shadow-lg rounded-md overflow-hidden  border-1 border-[rgba(0,0,0,0.1)] shadow-md">
      <div className="group imgWrapper w-[100%] h-[220px] overflow-hidden rounded-md relative">
        <Link to="/" className="w-full h-full absolute top-0 left-0 z-10">
        <div className="img h-[200px] overflow-hidden">
          <img src="./src/images/mode 2.jpg" className="w-full" alt="Produit 1" />
          <img src="./src/images/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg" className="w-full transition-all duration-100 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105" alt="Produit 1" />
        </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg  p-1 text-[12px] font-[500]">-20%</span>
        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button  className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
           <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>
          <Button  className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
           <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>
          </div>
      </div>

      <div className="info p-3 py-5">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            Hommes Alias-N Regulier
          </Link>
        </h6>
        <h3 className="text-[13px] title mt-1 font-[500] mb-1 text-[#000]">
          <Link to="/" className="link transition-all">
            Fit Spread Collar Shirt
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font[500]">
              2500 FCFA
            </span>
            <span className="price text-primary  text-[15px] font-[500]">
              1500 FCFA
            </span>
           
        </div>
      </div>
    </div>
  );
};

export default produitsArticles;
