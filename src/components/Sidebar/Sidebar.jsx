import React, { useState } from "react";
import "../Sidebar/style.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Sidebar = () => {
  const [isOpenCategoryFilter, SetIsOpenCategoryFilter] = useState(true);
  const [isOpenDispoFilter, SetIsOpenDispoFilter] = useState(true);
  const [isOpenTailleFilter, SetIsOpenTailleFilter] = useState(true);

  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="w-full mb-3 text-[18px] font-[600] flex items-center pr-5">
          Filtrer par
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => SetIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4 relative -left-[-13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Mode"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electroniques"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Hygiène"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Maison"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electromanagers"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Informatique"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauté"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bureau"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box">
        <h3 className="w-full mb-3 text-[18px] font-[600] flex items-center pr-5">
          Disponibilité
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => SetIsOpenDispoFilter(!isOpenDispoFilter)}
          >
            {isOpenDispoFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenDispoFilter}>
          <div className="scroll px-4 relative -left-[-13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Disponible (25)"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Stock (5)"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Pas disponible (12)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box">
        <h3 className="w-full mb-3 text-[18px] font-[600] flex items-center pr-5">
          Taille
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => SetIsOpenTailleFilter(!isOpenTailleFilter)}
          >
            {isOpenTailleFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenTailleFilter}>
          <div className="scroll px-4 relative -left-[-13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Petit (25)"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Moyen (5)"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Grand (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XXL (12)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[18px] font-[600] flex items-center pr-5">
          Filtrer par Prix
        </h3>
        <RangeSlider />
        <div className="flex pt-4 pb-2 priceRange">
          <span className="text-[13px]">
            à partir de: <strong className="text-dark">{1000} Fcfa</strong>
          </span>
          <span className="ml-auto text-[13px]">
            à: <strong className="text-dark">{5000} Fcfa</strong>
          </span>
        </div>
      </div>
      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[18px] font-[600] flex items-center pr-5">
          Filtrer par Mieux Notés
        </h3>
        <div className="w-full">
          <Rating name="size-small"
            defaultValue={5}
            size="small"
            readOnly
          />
          </div>
          <div className="w-full">
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
          </div>
          <div className="w-full">
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
          </div>
          
        <div className="w-full">
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
          </div>
          <div className="w-full">
          <Rating name="size-small" defaultValue={1} size="small" readOnly />
          </div>
      </div>
    </aside>
  );
};

export default Sidebar;
