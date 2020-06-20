import React, { useState } from "react";
import styled from "styled-components";

import JobFullDetail from "./jobItem/jobFullDetail/JobFullDetail";
import JobItemMobile from "./jobItem/jobItemMobile/JobItemMobile";
import JobItem from "./jobItem/JobItem";

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  padding-top: 6rem;
  grid-template-columns: ${(props) => (props.mobile ? "1fr" : "1fr 1fr")};
  grid-gap: 1rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    margin-bottom: 32rem;
  }
`;

const Content = styled.div`
  display: grid;
  // grig-gap: 1rem;
`;

const JobsList = ({ state, jobs, mobile }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  if (!jobs.results) {
    return null;
  }

  if (jobs.results < 1) {
    return (
      <Wrapper>
        Sorry, there are zero results for that search. Please try again.
        <JobFullDetail job={selectedItem} />
      </Wrapper>
    );
  }

  let mappedJob = jobs.results.map((job) => {
    return (
      <JobItem
        setSelectedItem={setSelectedItem}
        clicked={job}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        key={job.id}
        job={job}
      />
    );
  });

  return (
    <Wrapper>
      <Content id="item-container">{mappedJob}</Content>
      <JobItemMobile
        job={selectedItem}
        clicked={isOpened}
        setIsOpened={setIsOpened}
      />
      <JobFullDetail job={selectedItem} />
    </Wrapper>
  );
};

export default JobsList;
