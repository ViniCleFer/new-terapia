import styled from 'styled-components';
import { Flex, Input } from "@chakra-ui/core";

import theme from '../../../styles/theme';

export const Container = styled(Flex)`
  @media(max-width: 780px) {
    padding: 5px;
    padding-top: 20px;

    #btn {
      width: 80%;
    }
  }
`;

export const NewGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0%;
  
  @media(max-width: 780px) {
    flex-direction: column;
    padding: 0%;

    #flexName {
      width: 98%;
    }

    #flexBox {
      width: 95%;
    }
  }
`;

export const NewInput = styled(Input)`
  @media(max-width: 780px) {
    width: 100%;
    padding: 0;
  }
`;

export const NewGridEsp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  
  @media(max-width: 780px) {
    flex-direction: column;
    padding: 0;

    #flexName {
      width: 98%;
    }

    #flexBox {
      width: 93.5%;
    }
  }
`;

export const SubjectView = styled.div`
  margin-top: -15px;
  margin-bottom: 3px;
  width: 48.85%;
  background-color: #fff;
  z-index: 5000;
  margin-left: 11px;
`;

export const SubjectTouchable = styled.button`
  width: 100%;
  justify-content: center;
  margin-bottom: 0.5px;
  height: 40px;
  border-bottom-width: 0.5px;
  border-left-width: 0.5px;
  border-right-width: 0.5px;
  border-radius: 0.5%;
  border-color: rgba(0, 0, 0, 0.1);
  z-index: 5000;
  cursor: pointer;

  &:hover {
    background-color: #f2f1f3;
  }
`;

export const SubjectText = styled.p`
  font-size: 14px;
  color: ${theme.gray};
  align-items: flex-start;
  margin-left: 2%;
`;


export const TextAlert = styled.p`
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 1.5px;
  width: 80%;
  color: ${theme.colors.alert[404]};
`;
