import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 3.5rem;
  }
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
  background-color: var(--color-Main);
  // border: none;
  font-size: 1.4rem;
  font-weight: 500;
  width: 100%;
`;

const Error = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(${({ show }) => (show ? "2.5rem" : "1.5rem")});
  visability: ${({ show }) => (show ? "visable" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: all 0.25s ease-in-out;
  color: var(--color-danger);
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0rem 2rem;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export default Input;
