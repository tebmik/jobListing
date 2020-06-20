import React, { useState, useEffect, useRef } from "react";
import "animate.css";
import styled from "styled-components";

import Input from "../inputs/Input";
import Label from "../labels/Label";
import Button from "../buttons/Button";
import { FormHeader } from "../../hoc/containers";

import { connect } from "react-redux";
import * as actions from "../../actions";

const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.6rem;
  min-height: 50rem;
  min-width: 30rem;
  max-width: 50rem;
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;
  display: ${(props) => (props.formClose ? "none" : "block")};
  background-color: var(--color-white);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  // justify-items: center;
  align-self: center;
  padding: 2rem;
`;

const Form = ({ error, loading, fetchData, successFetch, jobs, userName }) => {
  const [jobTerm, setJobTerm] = useState("");
  const [placeTerm, setPlaceTerm] = useState("");
  const [close, setClose] = useState(false);

  //   const jobRef = useRef(null);
  //   const placeRef = useRef(null);
  //   const submitRef = useRef(null);

  //   useEffect(() => {
  //     jobRef.current.focus();
  //   }, []);

  // const handleJobKeydown = e => e.key === "Enter" ? placeRef.current.focus() : null;

  // const handlePlaceKeydown = e => e.key === "Enter" ? submitRef.current.focus() : null;

  // const handleSubmitKeydown = e => e.key === "Enter" ? console.log("form has been submitted") : null;

  const handleJobChange = (e) => {
    setJobTerm(e.target.value);
  };

  const handlePlaceChange = (e) => {
    setPlaceTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setJobTerm(jobTerm);
    setPlaceTerm(placeTerm);

    await fetchData(jobTerm, placeTerm);
    setJobTerm("");
    setPlaceTerm("");
  };

  return (
    <FormWrapper
      formClose={jobs.results ? () => setClose(!close) : false}
      id="formWrapper"
      className={jobs.results ? "animated animate__fadeOutDown" : null}
    >
      {userName ? (
        <FormHeader>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // marginTop: "10rem",
              position: "relative",
            }}
          >
            <p>
              Hi <p className="animate_animated animate__pulse">{userName}</p>,
              I wish you the best of luck, finding your next career.
            </p>
          </div>
        </FormHeader>
      ) : (
        <FormHeader>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // marginTop: "10rem",
              position: "relative",
            }}
          >
            Hi there, I wish you the best of luck, finding your next career.
          </div>
        </FormHeader>
      )}

      <StyledForm id="form" onSubmit={handleSubmit}>
        <Label title="What?" />
        <Input
          // onKeyDown={handleJobKeydown}
          handleChange={handleJobChange}
          value={jobTerm}
          type="text"
          placeholder="Type Career"
          //   focusRef={jobRef}
        />
        <Label title="Where?" />
        <Input
          // onKeyDown={handlePlaceKeydown}
          handleChange={handlePlaceChange}
          value={placeTerm}
          type="text"
          placeholder="Type Region"
          //   focusRef={placeRef}
        />
        <Button
          // onKeyDown={handleSubmitKeydown}
          disabled={loading}
          loading={loading}
          title={loading ? "Fetching..." : "Find Your Career"}
          type="submit"
          //   focusRef={submitRef}
          handleSubmit={handleSubmit}
        />

        {error ? <p>{error}</p> : null}
      </StyledForm>
    </FormWrapper>
  );
};

const mapStateToProps = ({ jobs }) => ({
  error: jobs.error,
  loading: jobs.loading,
  jobs: jobs.jobs,
});

const mapDispatchToProps = {
  fetchData: actions.fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
