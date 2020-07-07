import React from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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

const StyledInput = styled(TextField)`
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

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: "100%",
      fontSize: "2rem"
    },
  },
}));

const Input = ({ placeholder, field, form: { touched, errors }, ...props }) => {

  const classes = useStyles();
  return (
    <InputWrapper>
      <StyledInput {...field} {...props}
        classes={{root: classes.root}}
        autoComplete="off"
        id="standard-basic" 
        label={placeholder} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export default Input;
