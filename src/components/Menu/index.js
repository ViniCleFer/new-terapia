import React from "react";
import {
  Flex,
  Icon,
  Heading,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/core";
import { MdPerson } from "react-icons/md";

import history from "../../services/history";

function Menu() {
  return (
    <Flex
      backgroundColor="purple.500"
      flexDirection="column"
      height="100%"
      width="65px"
      flex="1"
      pb="20px"
    >
      <Tabs orientation="vertical">
        <TabList>
          <Tab
            as="button"
            height="64px"
            width="65px"
            flexDirection="column"
            _selected={{
              borderColor: "white",
              boxShadow: "none",
              border: "none",
              borderBottom: "0px",
              bg: "purple.600",
              shadow: "none",
            }}
            onClick={() => history.push("/professionals")}
          >
            <Icon as={MdPerson} size="30px" color="white" />
            <Heading fontWeight="500" fontSize="10px" mt="6px" color="white">
              Profissionais
            </Heading>
          </Tab>
        </TabList>
      </Tabs>
    </Flex>
  );
}

export default Menu;
