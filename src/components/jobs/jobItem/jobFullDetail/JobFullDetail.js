import React from "react";
import styled from "styled-components";

// import Loader from "../../../../components/ui/loader/Loader";
import Header from "./header/Header";
import Body from "./body/Body";

import { connect } from "react-redux";
// import * as actions from "../../../../actions";

import NavbarSearch from "../../../navbar/mainNav/navSearch/NavbarSearch";

const Wrapper = styled.div`
  position: sticky;
  top: -9rem;
  border: 1px solid #c5c8d5;
  border-radius: 10px;
  margin: 0.5rem 1rem;
  max-height: 100vh;
  height: calc(100% - 7rem);
  overflow: hidden;
  font-size: 1.6rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledSearch = styled.div`
  display: flex,
  flex-direction: column,
  padding: 2rem,
  border-bottom: 1px solid var(--shadow);
`;

const JobFullDetail = ({ job, jobs }) => {
  // const [ defaultItem, setDefaultItem ] = useState(job[0]);
  console.log(jobs);

  if (!job) {
    return (
      <Wrapper>
        <StyledSearch>
          <NavbarSearch jobs={jobs} />
        </StyledSearch>
      </Wrapper>
    );
  }

  let title = job.title;
  let strippedTitle = title.replace(/(<([^>]+)>)/gi, "");

  return (
    <Wrapper>
      <StyledSearch>
        <NavbarSearch jobs={jobs} />
      </StyledSearch>
      <Header title={strippedTitle} job={job} />
      <Body title={strippedTitle} job={job} />
    </Wrapper>
  );
};

const mapStateToProps = ({ jobs }) => ({
  jobs: jobs.jobs,
});

export default connect(mapStateToProps)(JobFullDetail);
