import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Recherche/Search.jsx";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header>
      <div
        className="top-strip py-
        2 border-t-[1px] border-gray-250 border-b-[1px]"
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font[500]">
                {" "}
                Obtenez jusqu’à 50 % de réduction , durée limitée
              </p>
            </div>

            <div className="col2 flex items-center justify-end ">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    className="text-[14px] link transition font[500]"
                    to="/aide "
                  >
                    Aide ?
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    className="text-[14px] link transition font[500]"
                    to="/commande "
                  >
                    Vos commandes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header py-3">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="src/images/logo.jpg" alt="logo" className="" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] items-center pl-7">
            <ul className="flex items-center w-full gap-3 justify-end">
              <li className="list-none">
                <Link
                  to="/se connecter"
                  className="link transition text-[15px] font-[500]"
                >
                  Se connecter
                </Link>{" "}
                | &nbsp;{" "}
                <Link
                  className="link transition text-[15px] font-[500]"
                  to="/creer un compte"
                >
                  Cree un compte
                </Link>
              </li>
              <li>
                <Tooltip title="Panier">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Favoris">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
