import React from 'react'
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import { FiMinusSquare } from "react-icons/fi";
import { useState } from "react";
const CatégorieCollapse = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
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
  return (
    <>
        <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
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
              <ul className="submenu w-full pl-3">
                <li className="list-none flex items-center relative flex-col">
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
                    <ul className="inner_submenu w-full pl-3">
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

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                Electroniques
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                      Telephones & Tablettes
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 1 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Smartphones
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Tablettes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Accessoires
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Chargeurs
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Écouteurs
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full link w-full !text-left !justify-start px-3 transition !text-[14px]"
                        >
                          Montres connectées
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
    </>
  )
}

export default CatégorieCollapse