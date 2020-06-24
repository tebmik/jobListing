import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100vh;
    opacity: ${({ opened }) => (opened ? "1" : "0")};
    visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
    transition: all .2s ease-in-out;
`;


const Backdrop = ({ opened, close }) => {
    return (
        <Wrapper opened={opened} onClick={close} />
    );
}

export default Backdrop;