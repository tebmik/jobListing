import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1400px;
    height: 100%;
`

const Container = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
};

export default Container;