import React from "react";
import styled from "styled-components";

import Form from "../../components/form/Form";
import JobsList from "../../components/jobs/JobsList";

import { connect } from "react-redux";
import * as actions from "../../actions";

import Loader from "../../components/ui/loader/Loader";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin-top: 2rem;
`;

const HomeScreen = ({
  isLoaded,
  loading,
  error,
  jobs,
  fetchData,
  state,
  userName,
}) => {
  // for another time... i will need to handle a success fetch
  // which returns 0 results. Dont want to be left with blank page

  // useEffect(() => {
  //     fetchData("it", "plymouth")
  // }, []);

  // useEffect(() => {
  //     console.log("loaded");
  // }, [jobs]);

  console.log(userName);

  return (
    <Wrapper id="HomeScreen">
      {!isLoaded ? <Loader /> : <Form loading userName={userName} />}
      <JobsList state={state} jobs={jobs} />
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({
  error: state.jobs.error,
  loading: state.jobs.loading,
  jobs: state.jobs.jobs,
  state: state,
  userName: state.firebase.profile.userName,
  isLoaded: state.firebase.profile.isLoaded,
});

const mapDispatchToProps = {
  fetchData: actions.fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
