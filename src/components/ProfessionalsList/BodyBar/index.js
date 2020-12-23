import React from "react";
import { Heading, Button } from "@chakra-ui/core";

import history from "../../../services/history";

import { Container } from './styles';

function BodyBar() {
  return (
    <Container gridArea="bodybar">
      <Heading
        fontWeight="500"
        fontSize="24px"
        mt="6px"
        color="black"
      >
        Lista de Profissionais
      </Heading>

      <Button onClick={() => history.push("add-contacts")} background="#6E8BC6" variant="solid" color="#fff">
        Adicionar +
      </Button>

    </Container>
  );
}

export default BodyBar;
