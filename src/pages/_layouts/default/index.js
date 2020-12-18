import React from "react";
import PropType from "prop-types";
import Header from "../../../components/Header";

import Menu from "../../../components/Menu";

import { Wrapper, Content } from "./styles";

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Menu />
        {children}
      </Content>
    </Wrapper>
  );
}

DefaultLayout.propType = {
  children: PropType.element.isRequired,
};
