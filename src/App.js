/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { ToastContainer } from "react-toastify";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ThemeContainer from "../src/context/theme/ThemeContainer";
import { Global, css } from "@emotion/core";

import "./config/ReactotronConfig";

import Routes from "./routes/index";
import history from "./services/history";

import { store, persistor } from "./store";

import GlobalStyle from "./styles/global";

const StyleForChakra = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export default function App() {
  return (
    <ThemeContainer>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router history={history}>
              <Routes />
              <GlobalStyle />
              <Global styles={StyleForChakra} />
              <ToastContainer autoClose={3000} />
            </Router>
          </PersistGate>
      </Provider>
    </ThemeContainer>
  );
}
