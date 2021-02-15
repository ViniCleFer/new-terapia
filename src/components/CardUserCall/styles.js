import styled from "styled-components";
import { Flex } from "@chakra-ui/core";

export const Container = styled(Flex)`
  flex-direction: column;
  background-color: #fff;
  height: 140px;
  width: 284px;
  padding: 20px;
  display: flex;
  border-radius: 4px;

  @media (max-width: 1300px) {
    width: 100%;

    & + div {
      margin-left: 0;
    }
  }
`;
