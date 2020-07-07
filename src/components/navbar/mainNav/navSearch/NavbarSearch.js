import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import NavInput from "../../../inputs/NavInput";
import Button from "../../../buttons/Button";

import { connect } from "react-redux";
import * as actions from "../../../../actions";

const SearchWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;
  padding: 3rem;
  border-bottom: 1px solid var(--shadow);

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    // justify-items: start;
  }
`;

const NavbarSearch = ({ jobs, fetchData, loading, error, submitted }) => {
  const [jobTerm, setJobTerm] = useState("");
  const [placeTerm, setPlaceTerm] = useState("");

  const whatRef = useRef(null);
  const whereRef = useRef(null);
  const submitRef = useRef(null);
  

  const handleWhereRef = e => {
    e.key === "Enter" && e.preventDefault();
    if(e.key === "Enter") {
      whereRef.current.focus();
    };
  };

  const handleWhatRef = e => {
    e.key === "Enter" && e.preventDefault();
    if(e.key === "Enter") {
      submitRef.current.focus();
    };
  };

  const handleJobChange = (e) => {
    setJobTerm(e.target.value);
  };

  const handlePlaceChange = (e) => {
    setPlaceTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobTerm(jobTerm);
    setPlaceTerm(placeTerm);

    fetchData(jobTerm, placeTerm);
    setJobTerm("");
    setPlaceTerm("");
  };

  if (!jobs) {
    return null;
  }

  return (
    <>
      <SearchWrapper id="formForNav" onSubmit={handleSubmit}>
        <NavInput
          value={jobTerm}
          handleChange={handleJobChange}
          placeholder="What?"
          type="text"
          focusRef={whatRef}
          keyDown={handleWhereRef}
        />
        <NavInput
          value={placeTerm}
          handleChange={handlePlaceChange}
          placeholder="Where?"
          type="text"
          focusRef={whereRef}
          keyDown={handleWhatRef}
        />
        <Button
          disabled={loading}
          animateStyle="animate__fadeInUp"
          title={loading ? "Searching..." : "Search"}
          type="submit"
          onClick={error === false ? submitted : null}
          focusRef={submitRef}
          keyDown={handleSubmit}
        />
      </SearchWrapper>
    </>
  );
};

const mapDispatchToProps = {
  fetchData: actions.fetchData,
};

const mapStateToProps = ({ jobs }) => ({
  loading: jobs.loading,
  error: jobs.error,
  jobs: jobs.jobs,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarSearch);
