import React from "react";
import { Icon, Heading } from "@chakra-ui/core";
import { MdPerson } from "react-icons/md";

import { Container, MenuButton } from "./styles";

import history from "../../services/history";

function Menu() {
  return (
    <Container>
      <MenuButton type="button" onClick={() => history.push("/professionals")}>
        <Icon as={MdPerson} size="30px" color="white" />
        <Heading fontWeight="500" fontSize="10px" mt="6px" color="white">
          Profissionais
        </Heading>
      </MenuButton>
    </Container>
  );
}

export default Menu;
