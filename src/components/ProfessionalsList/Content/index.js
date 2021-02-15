/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProfessionalsRequest } from "../../../store/modules/professionals/actions";

import CardUserCall from "../../../components/CardUserCall";

import { Container } from "./styles";

function Content() {
  const dispatch = useDispatch();

  const professionals = useSelector(
    (state) => state.professionals.professionals
  );

  useEffect(() => {
    dispatch(getAllProfessionalsRequest());
  }, []);

  return (
    <Container>
      {professionals.map((item, index) => {
        return <CardUserCall data={item} key={index} />;
      })}
    </Container>
  );
}

export default Content;
