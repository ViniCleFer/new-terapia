import styled from "styled-components";

export const Container = styled.div`
  background-color: #f1f0ef;
  border-bottom-width: 1px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  max-width: 1855px;
  flex-direction: row;
  display: flex;

  @media (max-width: 1300px) {
    height: 80px;
  }
`;
