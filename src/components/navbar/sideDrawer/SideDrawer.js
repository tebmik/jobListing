import React, { useState } from "react";
import styled from "styled-components";

import Logo from "../navContent/logo/Logo";
import Hamburger from "./hamburger/Hamburger";
import NavItems from "../navContent/navItems/NavItems";
import MobileSearch from "../sideDrawer/mobileSearch/MobileSearch";

import { connect } from "react-redux";

const FixedWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  display: none;
  z-index: 1000;
  background-color: #fff;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  width: 100%;
`;

const Menu = styled.div`
  z-index: 1000;
  padding-left: 1rem;
  position: fixed;
  width: 70vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 8rem;
  background-color: #829fd9;
  transform: translateX(${(props) => (props.opened ? "0%" : "-100%")});
  transition: all 0.6s cubic-bezier(0.65, 0, 0.35, 1);
  box-shadow: ${(props) =>
    props.opened ? "10px 0 5px -2px rgba(0,0,0,.1)" : null};
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const MenuLeafOne = styled.div`
  z-index: 700;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  margin-top: 6rem;
  background-color: #5c73f2;
  transform: translateX(${(props) => (props.opened ? "0%" : "-100%")});
  transition: all 0.2s cubic-bezier(0.65, 0, 0.35, 1);
  box-shadow: ${(props) =>
    props.opened ? "10px 0 5px -2px rgba(0,0,0,.1)" : null};
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const MenuLeafTwo = styled.div`
  z-index: 800;
  position: fixed;
  width: 85vw;
  height: 100vh;
  left: 0;
  top: 0;
  margin-top: 6rem;
  background-color: #5c73f2;
  transform: translateX(${(props) => (props.opened ? "0%" : "-100%")});
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  box-shadow: ${(props) =>
    props.opened ? "10px 0 5px -2px rgba(0,0,0,.1)" : null};
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const StyledSearchField = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: ${({ searchOpen }) => (searchOpen ? "35rem" : "6rem")};
  background-color: var(--color-white);
  z-index: 200;
  overflow: hidden;
  display: none;
  transition: all 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const SideDrawer = ({ opened, jobs, searchOpen, loggedIn }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <div id="mobile-nav">
      <FixedWrapper>
        <Wrapper>
          <Logo clicked={() => setIsOpened(false)} link="/" />
          <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
        </Wrapper>
      </FixedWrapper>
      <div>
        <Menu opened={isOpened}>
          <NavItems
            loggedIn={loggedIn}
            mobile
            clicked={() => setIsOpened(false)}
          />
        </Menu>
        <MenuLeafOne opened={isOpened}></MenuLeafOne>
        <MenuLeafTwo opened={isOpened}></MenuLeafTwo>
      </div>
      {jobs.results ? (
        <StyledSearchField
          searchOpen={searchIsOpen}
          id="SearchField"
          className={jobs.results ? "animated animate__fadeInUp" : null}
        >
          <MobileSearch
            clicked={() => setSearchIsOpen(!searchIsOpen)}
            submitted={() => setSearchIsOpen(false)}
          />
        </StyledSearchField>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ jobs }) => ({
  jobs: jobs.jobs,
});

export default connect(mapStateToProps)(SideDrawer);
