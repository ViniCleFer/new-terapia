import React from "react";
import { Flex, Heading } from "@chakra-ui/core";


function TopSideBar() {
  return (
    // <div>
      <Flex className="top-sidebar" gridArea="topsidebar" flex="1" alignItems="center" ml="24px">
        <Heading
          fontWeight="500"
          fontSize="20px"
          lineHeight="1.33"
          mt="6px"
          color="#252423s"
        >
          Profissionais
        </Heading>
      </Flex>
    // </div>
  );
}

export default TopSideBar;
