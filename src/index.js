import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import history from "./hoc/history";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global";
import { ThemeProvider } from "styled-components";

import App from "./components/App";
import Loader from "../src/components/ui/loader/Loader";

const root = document.querySelector("#root");

const StyledReadyWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StyledReadyWrapper>
      <Loader />
    </StyledReadyWrapper>
  </ThemeProvider>,
  root
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <>
            <App />
            <GlobalStyles />
          </>
        </ThemeProvider>
      </Router>
    </Provider>,
    root
  );
});
