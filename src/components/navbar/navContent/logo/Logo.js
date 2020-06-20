import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const StyledLogo = styled(NavLink)`
    display: flex;
    text-transform: uppercase;
    padding: .5rem 1rem;
    cursor: pointer;
    height: 100%;
    align-items: center;
    text-decoration: none;
    font-size: 1.6rem;
    margin-right: 4rem;
`

const Logo = ({clicked, link}) => {
    return (
        <StyledLogo onClick={clicked} to={link} ><div>Logo</div></StyledLogo>
    );
};

export default Logo;