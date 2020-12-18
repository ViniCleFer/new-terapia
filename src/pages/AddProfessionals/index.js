/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Grid } from "@chakra-ui/core";

import TopSidebar from "../../components/ProfessionalForm/TopSideBar";
import Content from "../../components/ProfessionalForm/Content";
import BodyBar from "../../components/ProfessionalForm/BodyBar";
import SidebarProfessionals from "../../components/ProfessionalForm/Sidebar";

export default function AddProfessionals() {
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

      <SidebarProfessionals />
      <Content />

      <BodyBar />
    </Grid>
  );
}
