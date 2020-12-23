/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "@chakra-ui/core";

import {
  getAllProfessionalsRequest,
} from "../../../store/modules/professionals/actions";

import CardUserCall from "../../../components/CardUserCall";

function Content() {
  const dispatch = useDispatch();

  const professionals = useSelector((state) => state.professionals.professionals);

  useEffect(() => {
    dispatch(getAllProfessionalsRequest());
  }, []);

  return (
    <Flex
      p="20px"
      w="100%"
      bg="#f1f0ef"
      direction={['column', "column", 'column', 'column', 'row']}
    >
      {professionals.map((item, index) => {
        return <CardUserCall data={item} key={index} />;
      })}
    </Flex>
  );
}

export default Content;
