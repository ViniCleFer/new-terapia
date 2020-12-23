import styled from 'styled-components';
import { Flex } from "@chakra-ui/core";

export const Container = styled(Flex)`
  flex-direction: column;
  background-color: #fff;
  height: 140px;
  width: 284px;
  padding: 20px;
  margin-top: 20px;

  & + div {
    margin-left: 20px;
  }

  @media (max-width: 1300px) {
    width: 100%;

    & + div {
      margin-left: 0;
    }
  }
`;
