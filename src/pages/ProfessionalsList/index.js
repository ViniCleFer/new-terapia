/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Grid } from "@chakra-ui/core";

import TopSidebar from "../../components/ProfessionalsList/TopSideBar";
import Content from "../../components/ProfessionalsList/Content";
import BodyBar from "../../components/ProfessionalsList/BodyBar";
import SideBar from "../../components/ProfessionalsList/Sidebar";

export default function ProfessionalsList() {
  return (
    <Grid
      height="100vh"
      width="100vw"
      templateColumns="260px 1fr"
      templateRows="60px 1fr"
      templateAreas="
      ' topsidebar bodybar'
      ' sidebar  content'
      "
    >
      <TopSidebar />

      <SideBar />
      <Content />

      <BodyBar />
    </Grid>
  );
}
