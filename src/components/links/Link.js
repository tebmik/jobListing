import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const StyledLink = styled(NavLink)`
  //   display: flex;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  cursor: pointer;
  //   height: 100%;
  align-items: center;
  //   text-decoration: none;
  font-size: 1.6rem;
  //   margin-right: 4rem;
  font-size: 1.6rem;
  color: var(--color-text);
  //   background-color: green;
`;

const Link = ({ link, title, children }) => {
  return (
    <div style={{ height: "2rem", witdth: "5rem" }}>
      <StyledLink to={link}>{title}</StyledLink>
    </div>
  );
};

export default Link;
