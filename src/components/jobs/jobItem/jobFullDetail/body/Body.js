import React from "react";
import styled from "styled-components";

import RoomIcon from "@material-ui/icons/Room";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import PaymentIcon from "@material-ui/icons/Payment";
import ContractType from "../types/contractType/ContractType";

const BodyWrapper = styled.div`
  height: 50vh;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  overflow: scroll;
  // height: 30rem;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Body = ({ job, title }) => {
  let desc = job.description;
  let strippedDesc = desc.replace(/(<([^>]+)>)/gi, "");

  const salaryMin = job.salary_min;
  const salaryMax = job.salary_max;

  const placeholder = {
    string: "Job Type:",
    icon: <WorkOutlineIcon style={{ fontSize: "3rem" }} />,
  };

  const StyledString = styled.p`
    color: var(--color-text);
    padding-left: 2rem;
  `;

  const StyledTitle = styled.p`
    font-weight: 700;
    margin-top: 2rem;
    color: var(--color-heading);
  `;

  const DescWrapper = styled.div``;

  const StyledDesc = styled.div`
    padding-left: 2rem;
    margin-top: 2rem;
    color: var(--color-text);
  `;

  const StyledContract = styled.div`
    margin-top: 2rem;
    padding-left: 2rem;
  `;

  return (
    <BodyWrapper className="animate__animated animate__fadeIn">
      <div style={{ display: "flex" }}>
        <RoomIcon style={{ fontSize: "3rem", color: "var(--color-text)" }} />
        <StyledString>
          {!job.location.area[2] ? job.location.area[1] : job.location.area[2]}
        </StyledString>
      </div>
      <div>
        <ContractType
          style={{ color: "var(--color-text)" }}
          placeholder={placeholder.icon}
          job={job}
        />
      </div>
      <div style={{ display: "flex" }}>
        <PaymentIcon style={{ fontSize: "3rem", color: "var(--color-text)" }} />
        <StyledString>{`£${salaryMin.toLocaleString(
          "en"
        )} - £${salaryMax.toLocaleString("en")}`}</StyledString>
      </div>
      <div>
        <StyledTitle>{`${title} - ${job.location.area[2]} ${job.location.area[0]}`}</StyledTitle>
      </div>
      <DescWrapper>
        <StyledDesc>
          <p style={{ marginBottom: "2rem" }}>Job Description: </p>
          {strippedDesc}
        </StyledDesc>
        <StyledContract>
          <ContractType placeholder={placeholder.string} job={job} />
        </StyledContract>
      </DescWrapper>
    </BodyWrapper>
  );
};

export default Body;
