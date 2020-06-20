import React from "react";
import styled from "styled-components";

const StyledString = styled.p`
    color: var(--color-text);
    padding-left: 2rem;
`;



const ContractType = ({ job, placeholder }) => {
    return (
        <div style={{display: "flex"}}>
            {
                !job.contract_time 
                    || 
                !job.contract_type 
                    ? null 
                    : 
                <div style={{display: "flex"}}>
                    {placeholder}
                    <StyledString>{`${job.contract_time}, ${job.contract_type}`}</StyledString>
                </div>
            }
        </div>
    );
};

export default ContractType;