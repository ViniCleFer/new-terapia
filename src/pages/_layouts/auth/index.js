import React from "react";
import PropType from "prop-types";
import { Wrapper, Content, Container } from "./styles";

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
}

AuthLayout.propType = {
  children: PropType.element.isRequired,
};
