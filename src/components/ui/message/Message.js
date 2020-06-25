import React from "react";
import styled from "styled-components";

const P = styled.p`
  position: relative;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${({ error, success }) => {
    if (error) return "var(--color-danger)";
    if (success) return "var(--color-success)";
    else return "var(--color-text)";
  }};

  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "2rem" : "0rem")});
  transition: all 0.25s ease-in-out;
`;

const Message = ({ children, error, success, show }) => {
  return (
    <P error={error} success={success} show={show}>
      {children}
    </P>
  );
};

export default Message;
