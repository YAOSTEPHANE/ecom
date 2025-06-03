import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css"; // Assuming you have a CSS file for styles

const Navigation = () => {

  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

 



  return (
    <>
    <nav className="py-2">
      <div className="container flex items-center justify-end gap-8">
        <div className="col_1 w-[20%]">
          <Button className="!text-[black] gap-2 w-full" onClick={openCategoryPanel}>
            <RiMenu2Fill className="text-[18px]" /> Catégories{" "}
            <TfiAngleDown className="text-[13px] ml-auto font-bold" />
          </Button>
        </div>
        <div className="col_2 w-[60%]">
          <ul className="flex items-center gap-1">
            <li className="list-none">
              <Link to="/" className="link transition text-[13px] font-[500]">
                <Button className="link transition font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#FF5252] ">
                  Accueil
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[13px] font-[500]">
                <Button className="link transition font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#FF5252]">
                  Mode
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[13px] font-[500]">
                <Button className="link transition font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#FF5252] ">
                  Electroniques
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[13px] font-[500]">
                <Button className="link transition font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#FF5252] ">
                  Hygiène
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[13px] font-[500]">
                <Button className="link transition font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#FF5252] ">
                  Maison
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[13px] font-[500]">
                <Button className="link transition font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#FF5252] ">
                  Electromenager{" "}
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[13px] font-[500]">
                <Button className="link transition font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#FF5252] ">
                  Informatique
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[13px] font-[500]">
                <Button className="link transition font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#FF5252] ">
                  Beauté
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[13px] font-[500]">
                <Button className="link transition font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] ">
                  Bureau
                </Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col_3 w-[20%]">
          <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
            <GoRocket className="text-[18px]" />
            Livraison rapide en 24H
          </p>
        </div>
      </div>
    </nav>




    <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}  />
    </>
  );
};

export default Navigation;
