import styled from "styled-components";
import { Form, Input } from "@rocketseat/unform";
import { darken } from "polished";

export const Container = styled.div`
  flex: 1;
  margin: 60px 200px;
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  opacity: ${(props) => (props.past ? 0.6 : 1)};
  strong {
    display: block;
    color: ${(props) => (props.available ? "#999" : "#7159c1")};
    font-size: 20px;
    font-weight: normal;
  }
  span {
    display: block;
    margin-top: 3px;
    color: ${(props) => (props.available ? "#999" : "#7159c1")};
  }
`;

export const CardPeriod = styled.div`
  width: 524px;
  height: 192px;
  background: #ffffff;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.01);
  border-radius: 8px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const CardPeriodTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-left: 32px;
  margin-top: 24px;
  color: #2e384d;
`;

export const CardPeriodStartDateDesc = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin-left: 48px;
  margin-top: 28px;
  color: #a4aab8;
`;

export const CardPeriodStartDate = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #21252e;
  margin-top: 28px;
  margin-left: 89px;
`;

export const CardPeriodDurationDesc = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin-left: 48px;
  margin-top: 23px;
  color: #a4aab8;
`;

export const CardPeriodDuration = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #21252e;
  margin-top: 23px;
  margin-left: 103px;
`;

export const CardBioMass = styled.div`
  width: 524px;
  height: 192px;
  background: #ffffff;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.01);
  border-radius: 8px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const CardBioMassTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-left: 32px;
  margin-top: 24px;
  color: #2e384d;
`;

export const CardBioMassStartDesc = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin-left: 48px;
  margin-top: 28px;
  color: #a4aab8;
`;

export const CardBioMassStart = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #21252e;
  margin-top: 28px;
  margin-left: 89px;
`;

export const CardBioMassDurationDesc = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin-left: 48px;
  margin-top: 28px;
  color: #a4aab8;
`;

export const CardBioMassDuration = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #21252e;
  margin-top: 28px;
  margin-left: 92px;
`;

export const CardBioMassGainDesc = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin-left: 48px;
  margin-top: 28px;
  color: #a4aab8;
`;

export const CardBioMassGain = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #43cc40;
  margin-top: 28px;
  margin-left: 82px;
`;

export const CardView = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
`;

export const Card = styled.div`
  background-color: ${(props) => (props.active ? "white" : "#ECFAEC")};
  height: 118px;
  padding: 16px 16px 16px;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.02),
    0px 1px 4px rgba(0, 0, 0, 0.01);
  border-radius: 8px;

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CardTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const CardTankId = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.87);
`;

export const CardFeederId = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.6);
`;

export const CardViewDetails = styled.button`
  border: 0;
  color: #43cc40;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  background-color: ${(props) => (props.active ? "white" : "#ECFAEC")};
`;

export const ButtonAddTank = styled.button`
  border: 0;
  color: #43cc40;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  justify-content: flex-end;
  background-color: #f4f6fc;
  display: flex;
  align-items: center;
`;

export const ButtonAddTreatment = styled.button`
  border: 0;
  color: #43cc40;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  justify-content: flex-end;
  background-color: #ecfaec;
  display: flex;
  align-items: center;
`;

export const HeaderDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;

export const TextButton = styled.h1`
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;
  color: #a4aab8;
`;

export const HeaderModal = styled.h1`
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 17px;
  color: black;
`;
export const Title = styled.h1`
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 17px;
  color: #21252e;
  margin-bottom: 16px;
`;

export const StyledInput = styled(Input)`
  flex: 1;
  display: flex;
  background-color: white;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #21252e;
  width: 20vw;
`;

export const ModalCustom = styled.div`
  width: 100%;
  max-width: 480px;
  text-align: center;
  flex: 1;
  margin-top: 32px;

  form {
    display: flex;
    flex: 1;
    flex-direction: column;

    margin: 22px 76px;

    input {
      background: #fff;
      border: 1px solid #43cc40;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: black;
      margin: 0 0 10px;
      &::placeholder {
        color: black;
        opacity: 0.6;
      }
    }

    select {
      background: #fff;
      border: 1px solid #43cc40;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: rgba(0, 0, 0, 0.6);
      margin: 0 0 10px;
      font-size: 14px;
      &::placeholder {
        color: black;
        opacity: 0.6;
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #43cc40;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      margin-bottom: 15px;
      &:hover {
        background: ${darken(0.03, "#43CC40")};
      }
    }
    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
