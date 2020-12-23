import React from "react";
import { Heading, Button } from "@chakra-ui/core";
import {useDispatch} from 'react-redux'

import history from "../../../services/history";

import {clearProfileById} from '../../../store/modules/list/actions';

import { Container } from './styles';

function BodyBar() {
  const dispatch = useDispatch();

  function handleGoBack() {
    dispatch(clearProfileById());
    history.push("professionals");
  }

  return (
    <Container gridArea="bodybar">
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

    </Container>
  );
}

export default BodyBar;
