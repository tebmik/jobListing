import React from "react";
import { connect } from "react-redux";

const JobsScreen = ({ jobs }) => {

    console.log(jobs)

    return (
        <div>JobsScreen page</div>
    );
};

const mapStateToProps = ({ jobs }) => ({
    jobs: jobs.jobs
});

export default connect(mapStateToProps)(JobsScreen);