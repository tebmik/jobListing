import React from "react";
import styled from "styled-components";

import { FormWrapper } from "../../../hoc/containers";
import Button from "../../../components/buttons/Button";

const WindowWrapper = styled.div`
  height: 100%;
  min-width: 30rem;
  background-color: green;
  z-index: 2000;
  position: absolute;
  top: 50%;
  right: 0;
  //   transform: translate(-50%, -50%);
`;

const Window = () => {
  return (
    <WindowWrapper>
      <FormWrapper>
        <p>Already have an account?</p>
        <Button title="Signin instead" />
      </FormWrapper>
    </WindowWrapper>
  );
};

export default Window;
