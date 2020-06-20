import React from "react";
// import Spinner from "../../../../components/ui/loader/Loader";
// import JobFullDetail from "../jobFullDetail/JobFullDetail";
import Header from "../jobFullDetail/header/Header";
import Body from "../jobFullDetail/body/Body";
import styled from "styled-components";

import CloseIcon from "@material-ui/icons/Close";

const Wrapper = styled.div`
  font-size: 1.6rem;
  position: fixed;
  left: 0;
  width: 100vw;
  top: 8rem;
  background-color: #fff;
  min-height: 100vh;
  // padding: 20px;
  z-index: 250;
  display: none;
  transform: ${(props) =>
    props.opened ? "translateX(0%)" : "translateX(100%)"};
  transition: all 0.2s cubic-bezier(0.65, 0, 0.35, 1);

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const StyledContainer = styled.div`
  display: grid;
  justify-items: center;
  position: relative;
  align-content: center;
  grid-gap: 1rem;
`;

const JobItemMobile = ({ opened, clicked, setIsOpened, job }) => {
  if (!job) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  }
  let title = job.title;
  let strippedTitle = title.replace(/(<([^>]+)>)/gi, "");
  return (
    <>
      <Wrapper opened={clicked}>
        <CloseIcon
          style={{
            fontSize: "4rem",
            marginLeft: "1.5rem",
            cursor: "pointer",
          }}
          onClick={() => setIsOpened(false)}
        />
        <StyledContainer>
          <Header title={strippedTitle} job={job} />
          <Body title={strippedTitle} job={job} />
        </StyledContainer>
      </Wrapper>
    </>
  );
};

export default JobItemMobile;
