import React, { useState, useEffect, useRef } from "react";
import "animate.css";
import styled from "styled-components";

import Input from "../inputs/Input";
// import Label from "../labels/Label";
import Button from "../buttons/Button";
import { PageWrapper, StyledUserName } from "../../hoc/containers";

import { connect } from "react-redux";
import * as actions from "../../actions";

const FormWrapper = styled.div`
  font-size: 1.6rem;
  min-height: 50rem;
  min-width: 30rem;
  max-width: 120rem;
  width: 100%;
  border-radius: 1rem;
  display: ${(props) => (props.formClose ? "none" : "grid")};
  background-color: var(--color-white);
  // box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  grid-template-columns: 1fr 1fr;
  justify-items: center;


  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
  width: calc(100% - 28%);
  align-self: center;
  padding: 2rem;
  height: 100%;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  background-color: var(--color-white);
  border-radius: 1rem;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  position: relative;
  align-items: center;
`;

const WelcomeWrapper = styled.div`
  padding: 2rem;
  width: calc(100% - 28%);
`;

const P = styled.p`
  font-size: 2.5vw;
  font-weight: 300;
  color: var(--color-text);
  animation: backInUp;
  animation-duration: 1s; /* don't forget to set a duration! */


  @media only screen and (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
  }

`;


const Form = ({ error, loading, fetchData, successFetch, jobs, userName }) => {
  const [jobTerm, setJobTerm] = useState("");
  const [placeTerm, setPlaceTerm] = useState("");
  const [close, setClose] = useState(false);

  useEffect(() => {
    whatRef.current.focus();
  }, []);
  const whatRef = useRef(null);
  const whereRef = useRef(null);
  const submitRef = useRef(null);


  const handleJobChange = (e) => {
    setJobTerm(e.target.value);
  };
  
  const handleWhatKeyEnter = (e) => {
    e.key === "Enter" && e.preventDefault();
    if(e.key === "Enter") {
      whereRef.current.focus();
    }
  };

  const handlePlaceChange = (e) => {
    setPlaceTerm(e.target.value);
  };

  const handleWhereKeyEnter = (e) => {
    e.key === "Enter" && e.preventDefault();
    if(e.key === "Enter") {
      submitRef.current.focus();
    }
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
    <PageWrapper
      formClose={jobs.results ? () => setClose(!close) : false}
    >

      <FormWrapper
        formClose={jobs.results ? () => setClose(!close) : false}
        id="formWrapper"
        className={jobs.results ? "animated animate__fadeOutDown" : null}
      >
        {userName ? (
          <WelcomeWrapper>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  // marginTop: "10rem",
                  position: "relative",
                }}
              >
                <P>
                  Hi <StyledUserName>{userName}</StyledUserName>,
                  best of luck finding a new career.
                </P>
              </div>
          </WelcomeWrapper>

        ) : (
          <WelcomeWrapper >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // marginTop: "10rem",
                position: "relative",
              }}
            >
              <P className="animate__animated animate__fadeInUp">
                Hi there, best of luck finding a new career.
              </P>
            </div>
          </WelcomeWrapper>
        )}

        <StyledForm id="form" onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              // onKeyDown={handleJobKeydown}
              handleChange={handleJobChange}
              value={jobTerm}
              type="text"
              placeholder="What"
              focusRef={whatRef}
              keyDown={handleWhatKeyEnter}
            />
            <Input
              // onKeyDown={handlePlaceKeydown}
              handleChange={handlePlaceChange}
              value={placeTerm}
              type="text"
              placeholder="Where"
              focusRef={whereRef}
              keyDown={handleWhereKeyEnter}
            />
            <Button
              keyDown={handleSubmit}
              disabled={loading}
              loading={loading}
              title={loading ? "Fetching..." : "Find Your Career"}
              type="submit"
              focusRef={submitRef}
            />  
          </InputWrapper>

          {error ? <p>{error}</p> : null}
        </StyledForm>
      </FormWrapper>
    </PageWrapper>
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
