import styled from "styled-components";
import {Form} from "formik";

export const PageWrapper = styled.div `
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${
    (props) => (props.formClose ? "none" : "grid")
};
`;

export const SignupWrapper = styled.div `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: 5rem;
  width: 100%;

  animation: fadeIn;
  animation-duration: 1s; /* don't forget to set a duration! */
`;

export const FormWrapper = styled.div `
  min-width: 32rem;
  max-width: 100rem;
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
  padding-bottom: 2rem;
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
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  width: 100%;
  padding: 5rem 4rem 10rem 4rem;
  position: relative;
  margin-bottom: 10rem;
`;

export const MessageWrapper = styled.div `
  position: absolute;
  bottom: 2rem;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  min-width: 28rem;
`;

export const StyledUserName = styled.span`
  font-weight: 700;
  font-style: italic;
  display: inline-block;
  margin: 0 0.5rem;
  
  animation: bounce;
  animation-duration: 1s; /* don't forget to set a duration! */
  animation-delay: .8s;
`;

export const HeaderP = styled.p`
    font-size: 1.4rem;
    color: var(--color-white);
`;

export const Header = styled.div`
    background-color: var(--color-info);
    width: 100%;
    padding: 2rem;
    borderBottom: 1px solid var(--shadow);
    marginBottom: 4rem;    
`;

export const H3 = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    color: var(--color-heading);
`;
