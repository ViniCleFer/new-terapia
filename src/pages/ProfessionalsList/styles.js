import styled from 'styled-components';
import { Flex } from "@chakra-ui/core";

export const Container = styled(Flex)`
  flex-direction: column;
  background-color: #f00;
  height: 140px;
  width: 284px;
  padding: 20px;

  & + div {
    margin-left: 20px;
  }

  @media (max-width: 1300px) {
    & + div {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

// div .div-grid {
//   display: flex;
//   /* margin-top: 20px; */

//   @media (max-width: 560px) {
//     display: none;
//     height: 0;
//     width: 0;
//   }
// }

// div .top-sidebar {
//   display: flex;
//   /* margin-top: 20px; */

//   @media (max-width: 560px) {
//     display: none;
//     height: 0;
//     width: 0;
//   }
// }

// div div .sidebar {
//   display: flex;
//   /* margin-top: 20px; */

//   @media (max-width: 560px) {
//     display: none;
//     height: 0;
//     width: 0;
//   }
// }
