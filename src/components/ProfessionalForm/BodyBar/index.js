import React from "react";
import { Flex, Heading, Button } from "@chakra-ui/core";
import {useDispatch} from 'react-redux'

import history from "../../../services/history";

import {clearProfileById} from '../../../store/modules/list/actions';

function BodyBar() {
  const dispatch = useDispatch();

  function handleGoBack() {
    dispatch(clearProfileById());
    history.push("/professionals");
  }

  return (
    <Flex
      gridArea="bodybar"
      bg="red"
      flex="1"
      backgroundColor="#f1f0ef"
      borderBottomWidth="1px"
      justifyContent="space-between"
      alignItems="center"
      paddingLeft="20px"
      paddingRight="20px"
    >
      <Heading
        fontWeight="500"
        fontSize="24px"
        mt="6px"
        color="black"
      >
        Adicionar Profissionais
      </Heading>
      <Button onClick={() => handleGoBack()} background="#6E8BC6" variant="solid" color="#fff">
        Voltar 
      </Button>

    </Flex>
  );
}

export default BodyBar;
