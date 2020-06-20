import React from "react";
import styled from "styled-components";

import SearchIcon from "@material-ui/icons/Search";
import NavbarSearch from "../../mainNav/navSearch/NavbarSearch";

import { connect } from "react-redux";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  //   height: 100%;
`;

const IconContainer = styled.div`
  background-color: var(--color-info);
  border: 2px solid #5c73f2;
  min-width: 100vw;
  height: 6rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid #ececec;
  transition: all 0.3s ease-in-out;
  color: var(--color-heading);
  &: hover {
    color: var(--color-white);
    border: 2px solid #829fd9;
    background-color: #5c73f2;
  }
`;

const StyledIcon = styled(SearchIcon)`
  font-size: 3rem;
  transition: all 0.25s ease-in-out;
`;

const StyledForm = styled.div``;

const MobileSearch = ({ jobs, clicked, submitted }) => {
  return (
    <>
      {jobs.results ? (
        <StyledWrapper>
          <IconContainer onClick={clicked}>
            <StyledIcon style={{ fontSize: "3rem" }} />
          </IconContainer>
          <StyledForm id="searchField">
            <NavbarSearch jobs={jobs} submitted={submitted} />
          </StyledForm>
        </StyledWrapper>
      ) : null}
    </>
  );
};

const mapStateToProps = ({ jobs }) => ({
  jobs: jobs.jobs,
});

export default connect(mapStateToProps)(MobileSearch);
