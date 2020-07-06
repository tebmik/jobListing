import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        width: '100%',
        fontSize: "2rem",
        height: "4.5rem",
      },
    },
  }));

const NavInput = ({ 
  jobs, 
  type, 
  placeholder, 
  handleChange, 
  value, 
  focusRef, 
  keyDown }) => {
    const classes = useStyles();
    return (
        <>
            <TextField
                onChange={handleChange}  
                value={value}
                classes={{root: classes.root}}
                id="outlined-basic" label={placeholder} variant="outlined"
                className={jobs.results ? "animate__animated animate__fadeInLeft" : null}
                autoComplete="off"
                type={type} 
                inputRef={focusRef}
                onKeyPress={keyDown}
            />
        </>
    );
};

const mapStateToProps = ({ jobs }) => ({
    jobs: jobs.jobs
});

export default connect(mapStateToProps)(NavInput);