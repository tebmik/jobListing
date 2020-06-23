import styled from "styled-components";
import {Form} from "formik";

export const PageWrapper = styled.div `
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupWrapper = styled.div `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: var(--shadow);
  min-height: 100vh;
  max-width: 50rem;
  margin: 0 auto;
`;

export const FormWrapper = styled.div `
  min-width: 32rem;
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: var(--color-white);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  overflow: hidden;
  position: relative;
  min-height: 60rem;
  display: ${
    (props) => (props.formClose ? "none" : "flex")
};
  position: relative;
`;

export const FormHeader = styled.div `
  height: 100%;
  background-color: var(--color-info);
  width: 100%;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  font-size: 1.6rem;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 2rem 10rem 2rem;
  position: relative;
`;

export const MessageWrapper = styled.div `
  position: absolute;
  bottom: 5.5rem;
  text-align: center;
`;
