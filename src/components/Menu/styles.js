import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  width: 65px;
  flex-direction: column;
  background-color: #315395;
  height: 100%;

  @media (max-width: 560px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  height: 64px;
  width: 65px;
  flex-direction: column;
  background-color: #6e8bc6;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.09, "#6e8bc6")};
  }
`;
