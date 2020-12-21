import React from "react";
import {
  Flex,
  Heading,
  ButtonGroup,
  Button,
  Icon,
} from "@chakra-ui/core";
import history from "../../../services/history";

import { MdPerson } from "react-icons/md";

function SideBar() {
  return (
    <Flex gridArea="sidebar" bg="#fff">
      <ButtonGroup spacing={4} width="260px">
        <Button
          as="button"
          width="260px"
          rounded="0"
          justifyContent="flex-start"
          backgroundColor="white"
          _hover={{ bg: "#eae8e6" }}
          _focus={{ bg: "#eae8e6" }}
          onClick={() => history.push("/professionals")}
        >
          <Icon as={MdPerson} size="20px" color="black" mr="10px" ml="5px" />
          <Heading fontWeight="400" fontSize="16px" color="black">
            Contatos
          </Heading>
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default SideBar;
