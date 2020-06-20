import React from "react";
import styled from "styled-components";

import Logo from "../navContent/logo/Logo";
import NavItems from "../navContent/navItems/NavItems";
// import NavbarSearch from "./navSearch/NavbarSearch";

import { connect } from "react-redux";

const Wrapper = styled.div`
  height: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  height: 100%;
  align-content: center;
  justify-content: space-between;
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
`;

const MainNav = ({ jobs, error, loading, loggedIn, emailVerified }) => {
  return (
    <Wrapper id="bigNav">
      <Container>
        <div style={{ display: "flex" }}>
          <Logo link="/" />
          {/* {jobs.results ? <NavbarSearch jobs={jobs} /> : null} */}
        </div>
        <NavItems loggedIn={loggedIn} emailVerified={emailVerified} />
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
  error: state.jobs.error,
  loading: state.jobs.loading,
});

export default connect(mapStateToProps)(MainNav);
