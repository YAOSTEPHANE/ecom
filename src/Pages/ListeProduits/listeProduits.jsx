import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProduitsArticles from "../../components/Produits/produitsArticles";
import ProduitsArticlesVoir from "../../components/ProduitsVoir/produitsArticlesVoir";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { IoGrid } from "react-icons/io5";
import { LuLayoutList } from "react-icons/lu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { useState } from "react";

const ListeProduits = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isItemView, setIsItemView] = useState("grid");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white ">
            <Sidebar />
          </div>

          <div className="rightcontent w-[80%] py-3">
            <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center itemViewActions">
                <Button
                  className={`!w-[45px] !h-[45px] !min-w-[45px] !rounded-full !text-[#000] ${isItemView === "list" && "active"}`}
                  onClick={() => setIsItemView("grid")}
                >
                  <IoGrid className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <Button
                  className={`!w-[45px] !h-[45px] !min-w-[45px] !rounded-full !text-[#000] ${isItemView === "grid" && "active"}`}
                  onClick={() => setIsItemView("list")}
                >
                  <LuLayoutList className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  Il y a 16 produits.
                </span>
              </div>
              <div className="col2 ml-auto items-center justify-end gap-3 pr-4">
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  Trier par :
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-[12px] !text-[#000] !capitalize !border-2 !border-[#000]"
                >
                  Pertinence
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Ventes, ordre décroissant
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Pertinence
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    A-Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Z-A
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Prix décroissant
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Prix croissant
                  </MenuItem>
                </Menu>
              </div>
            </div>

            <div
              className={`grid ${isItemView === "grid" ? "grid grid-cols-4 md:grid-cols-4" : 'grid grid-cols-1 md:grid-cols-1'
                } gap-4`}
            >
              {isItemView === "grid" ? (
                <>
                  <ProduitsArticles isItemView={isItemView} />
                  <ProduitsArticles isItemView={isItemView} />
                  <ProduitsArticles isItemView={isItemView} />
                  <ProduitsArticles isItemView={isItemView} />
                  <ProduitsArticles isItemView={isItemView} />
                  <ProduitsArticles isItemView={isItemView} />
                  <ProduitsArticles isItemView={isItemView} />
                  <ProduitsArticles isItemView={isItemView} />
                </>
              ) : (
                <>
                  <ProduitsArticlesVoir isItemView={isItemView} />
                  <ProduitsArticlesVoir isItemView={isItemView} />
                  <ProduitsArticlesVoir isItemView={isItemView} />
                  <ProduitsArticlesVoir isItemView={isItemView} />
                  <ProduitsArticlesVoir isItemView={isItemView} />
                  <ProduitsArticlesVoir isItemView={isItemView} />
                  <ProduitsArticlesVoir isItemView={isItemView} />
                  <ProduitsArticlesVoir isItemView={isItemView} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Pagination count={10} showFirstButton showLastButton />
      </div>
    </section>
  );
};

export default ListeProduits;
