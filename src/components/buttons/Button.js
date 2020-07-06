import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const StyledTitle = styled.p`
  font-size: 1.6rem;
`;

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      display: "flex",
      justifyItems: "center",
      width: "100%",
    },
  },
}));

const ButtonComponent = ({
  jobs,
  title,
  type,
  //   loading,
  animateStyle,
  focusRef,
  disabled,
  onClick,
  link,
}) => {
  const classes = useStyles();

  return (
    <div classes={{ root: classes.root }}>
      {disabled ? (
        <Button
          style={{ width: "100%" }}
          ref={focusRef}
          type={type}
          variant="contained"
          disabled
        >
          <StyledTitle>{title}</StyledTitle>
        </Button>
      ) : (
        <Button
          style={{ width: "100%" }}
          ref={focusRef}
          className={jobs.results ? `animated ${animateStyle}` : null}
          type={type}
          variant="contained"
          color="primary"
          onClick={onClick}
        >
          <StyledTitle>{title}</StyledTitle>
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = ({ jobs }) => ({
  jobs: jobs.jobs,
});

export default connect(mapStateToProps)(ButtonComponent);
