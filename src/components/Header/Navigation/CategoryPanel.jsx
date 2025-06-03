import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMinusSquare } from "react-icons/fi";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[18px] font-[500] flex items-center justify-between">
        Par Catégories{" "}
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                Mode
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                      Vêtements
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 0 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu absolute top-[100%] left-[0%] w-full pl-3">
                      <li className="list-none relative">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Chemises
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          pantalons
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Robes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          T-shirts
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Vestes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Shorts
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Jupes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Chapeaux
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Ceintures
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Gants
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Écharpes
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                Electroniques
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                      Vêtements
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 0 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu absolute top-[100%] left-[0%] w-full pl-3">
                      <li className="list-none relative">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Chemises
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          pantalons
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Robes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          T-shirts
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Vestes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Shorts
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Jupes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Chapeaux
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Ceintures
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Gants
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Écharpes
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
