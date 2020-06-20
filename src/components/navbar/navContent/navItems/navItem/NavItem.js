import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Li = styled.li`
    display: flex;
    height: 100%
`
const StyledLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    text-transform: uppercase;
    align-items: center;
    border-bottom: ${props =>
    props.mobile ? "1px solid transparent" : "2px solid transparent"};
    font-size: 1.6rem;
    // padding: 1rem;
    margin: ${props => (props.mobile ? "2rem 0" : "0 1rem")};
    font-weight: 400;
    color: ${props => props.mobile ? "#FFF" : "var(--color-heading)"};
    transition: all 0.2s;

    &:hover {
    border-bottom: ${props =>
        props.mobile
        ? "1px solid #000"
        : "3px solid #000"};
    };
    &.active {
    border-bottom: ${props =>
        props.mobile
        ? "1px solid #000"
        : "3px solid #000"};
    };
`;



const NavItem = ({ title, clicked, mobile, link }) => {
    return (
        <Li>
            <StyledLink
                mobile={mobile}
                onClick={clicked}
                exact
                to={link}
                activeClassName="active" 
                >
                {title}
            </StyledLink>
        </Li>
    );
};


export default NavItem;