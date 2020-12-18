import React from "react";
import { Flex, Heading } from "@chakra-ui/core";

function TopSideBar() {
  return (
    <Flex gridArea="topsidebar" flex="1" alignItems="center" ml="24px">
      <Heading
        fontSize="20px"
        lineHeight="1.33"
        fontWeight="700"
        mt="6px"
        color="#252423s"
      >
        Profissionais
      </Heading>
    </Flex>
  );
}

export default TopSideBar;
