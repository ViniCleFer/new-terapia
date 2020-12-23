/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Grid } from "@chakra-ui/core";

// import TopSidebar from "../../components/ProfessionalsList/TopSideBar";
import Content from "../../components/ProfessionalsList/Content";
import BodyBar from "../../components/ProfessionalsList/BodyBar";
// import SideBar from "../../components/ProfessionalsList/Sidebar";

// import './styles.css'

export default function ProfessionalsList() {
  return (
    // <div className="div-grid">
      <Grid
        height="100%"
        width="100%"
        // templateColumns="260px 1fr"
        templateRows="60px 1fr"
        templateAreas="
        ' bodybar'
        ' content'
        "
      >
        {/* <div className="top-sidebar">
          <TopSidebar />
        </div>

        <div className="sidebar">
          <SideBar />
        </div> */}

        <Content />

        <BodyBar />
      </Grid>
    // </div>
  );
}
