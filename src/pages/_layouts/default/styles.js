import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  div .menu {
    display: flex;

    @media (max-width: 560px) {
      display: none;
      width: 0;
    }
  }
`;
