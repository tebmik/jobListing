import React, { useState } from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Button from "../../../../buttons/Button";
import Loader from "../../../../ui/loader/Loader";

import { Redirect, Route } from "react-router-dom";


const HeaderWrapper = styled.div`
  position: relative;
  min-height: 15rem;
  max-height: 25rem;
  width: 100%;
  background-color: var(--color-white);
  padding: 20px;
  border-bottom: 1px solid #c5c8d5;
  color: var(--color-heading);
`;

const Align = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  position: relative;
`;

const CallToActionWrapper = styled.div`
  display: flex;
  align-content: center;
  padding-top: 2rem;
  align-items: center;
`;

const IconContainer = styled.div`
  background-color: #ececec;
  margin-left: 2rem;
  position: relative;
  display: flex;
  align-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid #ececec;
  transition: all 0.25s ease-in-out;

  &:hover {
    border: 2px solid #c5c5c5;
  }
`;

const StyledHeartIcon = styled(FavoriteBorderIcon)`
  color: var(--color-heading);
`;

const Header = ({ job, title }) => {

  if (!job) {
    return (
      <HeaderWrapper>
        <Align>
          <Loader />
        </Align>
      </HeaderWrapper>
    );
  }

  return (
    <>
      <HeaderWrapper className="animate__animated animate__fadeIn">
        <h3>{title}</h3>
        <div style={{ display: "flex" }}>
          <p style={{ fontWeight: "700" }}>
            {!job.company.display_name
              ? job.location.area[1]
              : job.company.display_name}
          </p>
          <span style={{ color: "var(--color-text)" }}>
            {!job.location.area[2]
              ? `- ${job.location.area[1]}`
              : `- ${job.location.area[2]}`}
          </span>
        </div>
        <CallToActionWrapper>
          <a href={job.redirect_url} rel="noopener noreferrer" target="_blank">
            <Button 
              type="submit" 
              title="Apply"
            />
          </a>
          <IconContainer>
            <StyledHeartIcon style={{ fontSize: "3rem" }} />
          </IconContainer>
        </CallToActionWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
