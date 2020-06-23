import React from "react";
import styled from "styled-components";

import NavItem from "./navItem/NavItem";

const Wrapper = styled.div `
  display: flex;
`;

const Ul = styled.ul `
  display: flex;
  flex-direction: ${
    (props) => (props.mobile ? "column" : "row")
};
  align-items: ${
    (props) => (props.mobile ? "start" : "center")
};
  justify-content: ${
    (props) => (props.mobile ? "space-around" : "end")
};
  height: 100%;
`;

const NavItems = ({clicked, mobile, loggedIn, emailVerified}) => {
    let links;
    if (loggedIn && !emailVerified) {
        links = (
            <> {/* <NavItem mobile={mobile} clicked={clicked} title="Home" link="/" /> */}
                <NavItem mobile={mobile}
                    clicked={clicked}
                    title="Logout"
                    link="/logout"/>
            </>
        );
    } else if (loggedIn && emailVerified) {
        links = (
            <>
                <NavItem mobile={mobile}
                    clicked={clicked}
                    title="Home"
                    link="/"/>
                <NavItem mobile={mobile}
                    clicked={clicked}
                    title="Profile"
                    link="/profile"/> {/* <NavItem
          mobile={mobile}
          clicked={clicked}
          title="Contact"
          link="/contact"
        /> */}
                <NavItem mobile={mobile}
                    clicked={clicked}
                    title="Logout"
                    link="/logout"/>
            </>
        );
    } else {
        links = (
            <>
                <NavItem mobile={mobile}
                    clicked={clicked}
                    title="Home"
                    link="/"/>
                <NavItem mobile={mobile}
                    clicked={clicked}
                    title="Signup"
                    link="/signup"/>
            </>
        );
    }

    return (
        <Wrapper mobile={mobile}>
            <Ul mobile={mobile}>
                {links}</Ul>
        </Wrapper>
    );
};

export default NavItems;
