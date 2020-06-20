import React from "react";
import styled from "styled-components";

import SignUpForm from "./signup/signUpForm/SignUpForm";
import SigninForm from "./signin/signinForm/SigninForm";

const SignupWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: var(--shadow);
  min-height: 100vh;
  width: 100%;
`;

const AuthScreen = () => {
  return (
    <SignupWrapper>
      <SignUpForm />
      <SigninForm />
    </SignupWrapper>
  );
};

export default AuthScreen;
