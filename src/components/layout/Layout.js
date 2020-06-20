import React from "react";
import styled from "styled-components";
import Container from "../../containers/Container";
import Navbar from "../../components/navbar/Navbar";

import { connect } from "react-redux";

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
  max-height: 100%;
  // z-index: 5000;
`;

const Layout = ({ children, loggedIn, emailVerified }) => {
  // console.log(children);
  return (
    <>
      <div id="layout">
        <Navbar id="navbar" loggedIn={loggedIn} emailVerified={emailVerified} />
        <MainWrapper id="page-content">
          <Container>{children}</Container>
        </MainWrapper>
      </div>
    </>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(Layout);
