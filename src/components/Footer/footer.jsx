import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { GoGift } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { Link } from "react-router-dom";
import { PiChats } from "react-icons/pi";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className=" py-6 bg-[#fafafa] ">
        <div className="container">
          <div className="flex justify-center items-center gap-2 pb-4 py-8">
            <div className="col flex flex-col items-center justify-center group w-[20%]">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[18px] font-[600] mt-3">Livraison rapide</h3>
              <p className="text-[14px] font-[500]">
                Livraison rapide et partout en Côte d'Ivoire
              </p>
            </div>

            <div className="col flex flex-col items-center justify-center group w-[20%]">
              <IoWalletOutline className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[18px] font-[600] mt-3">Paiement Sécurisé</h3>
              <p className="text-[14px] font-[500]">
                Les paiements Mobile et par Carte Prépayés sont disponibles
              </p>
            </div>

            <div className="col flex flex-col items-center justify-center group w-[20%]">
              <GiReturnArrow className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[18px] font-[600] mt-3">
                Retour sous 30 jours
              </h3>
              <p className="text-[14px] font-[500]">
                pour les produits defectueux vous pouvez les retournés
              </p>
            </div>

            <div className="col flex flex-col items-center justify-center group w-[20%]">
              <GoGift className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[18px] font-[600] mt-3">Bonus espécial</h3>
              <p className="text-[14px] font-[500]">
                Chaque Mois nous avons des bonus pour les clients les plus
                fidèles
              </p>
            </div>

            <div className="col flex flex-col items-center justify-center group w-[20%]">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[18px] font-[600] mt-3">
                Servive Client 24/7
              </h3>
              <p className="text-[14px] font-[500]">
                Nous sommes a l'écoute pour vos plaintes et difficultés
              </p>
            </div>
          </div>
          <br />
          <hr />
          <div className="footer flex py-8">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[20px] font-[600] mb-4">Contactez-Nous</h2>
              <p className="text-[13px] font-[400] pb-4">
                digitalpro solution angre chateau
              </p>
              <Link
                className="link text-[13px]"
                to="mailto:someone@example.com"
              >
                digitalprosolution@gmail.com
              </Link>
              <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary">
                +225 0748976031
              </span>

              <div className="flex items-center gap-2">
                <PiChats className="text-[40px] text-primary" />
                <span className="text-[16px] font-[600] pl-5">
                  Chat en ligne <br />
                  Obtenez l’aide d’un expert
                </span>
              </div>
            </div>
            <div className="part2 w-[50%] flex pl-8 ">
              <div className="part2_col1">
                <h2 className="text-[20px] font-[600] mb-4">Produits</h2>
                <ul className="list text-[14px] w-full mb-1">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Les prix baissent
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Nouveaux produits
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Produits en vedette
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Promotions
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Meilleures ventes
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Blog
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Contactez-Nous
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part2 w-[40%] flex ">
              <div className="part2_col1">
                <h2 className="text-[20px] font-[600] mb-4">
                  Notre entreprise
                </h2>
                <ul className="list text-[14px] w-full mb-1">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Livraison
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Mentions légales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Termes et conditions d’utilisation
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Qui sommes-nous ?
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Paiement sécurisé
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Connectez-vous
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part2 w-[50%] flex flex-col pl-8 ">
              <h2 className="text-[20px] font-[600] mb-4">
                S’abonner à la newsletter
              </h2>
              <p className="text-[13px]">
                Abonnez-vous à notre dernière newsletter pour recevoir des
                nouvelles sur les remises spéciales.
              </p>

              <form className="mt-5">
                <input
                  type="text"
                  placeholder="Entrez votre email"
                  className="w-full h-[45px]  border outline-none  rounded-md  pl-4 pr-4 mb-4 focus:border-[#000] focus:border-2"
                />
                <Button type="submit" className="btn-org">
                  S’abonner
                </Button>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="J’accepte les termes et conditions et la politique de confidentialité"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
        <div className="container flex items-center justify-between py-4">
          <ul className="flex items-center gap-3">
            <li className="list-none">
              <Link
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-primary group-hover:text-white transition-all duration-300"
                to="/"
                target="_blank"
              >
                <FaFacebook className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-primary group-hover:text-white transition-all duration-300"
                to="/"
                target="_blank"
              >
                <FaTwitter className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-primary group-hover:text-white transition-all duration-300"
                to="/"
                target="_blank"
              >
                <FaInstagram className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-primary group-hover:text-white transition-all duration-300"
                to="/"
                target="_blank"
              >
                <FaLinkedin  className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-primary group-hover:text-white transition-all duration-300"
                to="/"
                target="_blank"
              >
                <AiFillTikTok  className="text-[15px] group-hover:text-white" />
              </Link>
            </li>

          </ul>

          <p className="text-[14px] text-center mb-0">
            © 2025 DigitalPro Solution. Tous droits réservés.
          </p>


          <div className="flex items-center">
            <img
              src="src/images/carte_bleue.png"
              alt="DigitalPro Solution Logo"
              className=""
            />
            <img
              src="src/images/carte_bleue.png"
              alt="DigitalPro Solution Logo"
              className=""
            />
            <img
              src="src/images/master_card.png"
              alt="DigitalPro Solution Logo"
              className=""
            />
            <img
              src="src/images/visa.png"
              alt="DigitalPro Solution Logo"
              className=""
            />
            <img
              src="src/images/paypal.png"
              alt="DigitalPro Solution Logo"
              className=""
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Footer;
