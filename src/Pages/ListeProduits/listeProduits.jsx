import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const ListeProduits = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className="link transition">
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
      </div>
      </div>
    </section>
  );
};

export default ListeProduits;
