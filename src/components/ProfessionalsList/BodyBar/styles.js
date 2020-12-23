import styled from 'styled-components';
import { Flex } from "@chakra-ui/core";

export const Container = styled(Flex)`
  background-color: #f1f0ef;
  border-bottom-width: 1px;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media (max-width: 1300px) {
    height: 80px;
  }
`;
