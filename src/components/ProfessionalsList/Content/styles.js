import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: max-content;
  grid-gap: 20px;
  width: 100%;
  height: calc(100% - 60px);
  background-color: #f1f0ef;
  max-width: 1855px;
  padding: 20px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1300px) {
    flex-direction: column;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1600px) {
    flex-direction: column;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1090px) {
    flex-direction: column;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;
