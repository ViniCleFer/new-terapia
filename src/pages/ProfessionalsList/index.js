/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import Content from "../../components/ProfessionalsList/Content";
import BodyBar from "../../components/ProfessionalsList/BodyBar";

import { Container } from "./styles";

export default function ProfessionalsList() {
  return (
    <Container>
      <BodyBar />
      <Content />
    </Container>
  );
}
