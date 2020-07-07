import React, { useState } from "react";
import styled from "styled-components";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const StyledContainer = styled.div`
  border: 1px solid #c5c8d5;
  border-radius: 10px;
  padding: ${(props) => (props.remove ? "0" : "20px")};
  min-width: 290px;
  min-height: ${(props) => (props.remove ? "60px" : "300px")};
  height: ${(props) => (props.remove ? "60px" : "0")};
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  transition: 0.25s cubic-bezier(0.17, 0.67, 0.83, 0.67);
`;

const UndoWrapper = styled.div`
  position: relative;
  display: ${(props) => (props.remove ? "flex" : "none")};
  opacity: ${(props) => (props.remove ? "1" : "0")};
  color: blue;
  font-weight: 700;
  font-size: 1.6rem;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-right: 20px;
`;

const Undo = styled.p`
  cursor: pointer;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: ${(props) => (props.remove ? "none" : "flex")};
  flex-direction: column;
  padding: 20px;
  z-index: 100;
`;

const StyledHeartIcon = styled(FavoriteBorderIcon)`
  position: relative;
  margin-bottom: 10px;
  cursor: pointer;
  color: var(--color-heading);
`;

const StyleOffIcon = styled(HighlightOffIcon)`
  position: relative;
  cursor: pointer;
  color: var(--color-heading);
`;

const JobArticle = styled.div`
  display: ${(props) => (props.remove ? "none" : "grid")};
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  cursor: pointer;
  font-size: 1.6rem;
`;

const TitleContainer = styled.div`
  max-width: 25rem;
  color: var(--color-heading);
`;

const Title = styled.h2``;

const DescriptionStyle = styled.div`
  padding-left: 20px;
  color: var(--color-text);
`;

const P = styled.p`
  // flex: 1;

  // white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const DateStyle = styled.div`
  display: flex;
`;

const ContractStyle = styled.div`
  display: flex;
`;

const JobItem = ({
  job,
  remove,
  isOpened,
  setIsOpened,
  clicked,
  setSelectedItem,
}) => {
  const [removeItem, setRemoveItem] = useState(false);

  const salaryMin = job.salary_min;
  const salaryMax = job.salary_max;

  // compare date from job Post date to current date;
  let todaysDate = new Date();
  let year = todaysDate.getFullYear();
  let month = todaysDate.getMonth() + 1;
  let day = todaysDate.getDate();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  let date = `${year}-${month}-${day}`;

  let today = date.split("-").reverse().join("/");
  // console.log(today);

  let created = job.created;
  created = created.split("T");
  let datePosted = created[0];
  // console.log(`${datePosted}`);

  const revDate = datePosted.split("-").reverse().join("/");
  // console.log(revDate);

  const handleRemoveItem = ({ remove }) => {
    console.log("clicked");
    setRemoveItem(true);
  };

  let strippedTitle = job.title.replace(/(<([^>]+)>)/gi, "");
  let strippedDescription = job.description.replace(/(<([^>]+)>)/gi, "");

  return (
    <>
      <StyledContainer
        remove={removeItem}
        className="animate__animated animate__fadeInUp"
      >
        <UndoWrapper remove={removeItem}>
          <Undo onClick={() => setRemoveItem(false)}>Undo Remove</Undo>
        </UndoWrapper>
        <IconContainer remove={removeItem}>
          <StyledHeartIcon style={{ fontSize: "2.8rem" }} />
          <StyleOffIcon
            style={{ fontSize: "2.8rem" }}
            onClick={handleRemoveItem}
          />
        </IconContainer>
        <JobArticle
          remove={removeItem}
          onClick={() => (setIsOpened(!isOpened), setSelectedItem(clicked))}
        >
          <TitleContainer>
            <Title>{strippedTitle}</Title>
            <h4>{job.company.display_name}</h4>
            <h4>{job.location.area[1]}</h4>
          </TitleContainer>
          {`£${salaryMin.toLocaleString("en")} - £${salaryMax.toLocaleString(
            "en"
          )}`}
          <DescriptionStyle>
            <P>{strippedDescription}</P>
          </DescriptionStyle>
          <ContractStyle>
            {!job.contract_time || !job.contract_type ? null : (
              <p>{`${job.contract_time} / ${job.contract_type}`}</p>
            )}
          </ContractStyle>
          <DateStyle>
            <p>{`${revDate === today ? "Today" : revDate} - save job`}</p>
          </DateStyle>
        </JobArticle>
      </StyledContainer>
    </>
  );
};

export default JobItem;
