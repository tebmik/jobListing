import React, { useState } from "react";
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
        />
        <NavInput
          value={placeTerm}
          handleChange={handlePlaceChange}
          placeholder="Where?"
          type="text"
        />
        <Button
          disabled={loading}
          animateStyle="animate__fadeInUp"
          title={loading ? "Searching..." : "Search"}
          type="submit"
          onClick={error === false ? submitted : null}
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
