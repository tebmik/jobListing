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
    visability: ${({ opened }) => (opened ? "visable" : "hidden")};
    transition: all .2s ease-in-out;
    display: ${({ opened }) => (opened ? "block" : "none")};
`;


const Backdrop = ({ opened, close }) => {
    return (
        <Wrapper opened={opened} onClick={close} />
    );
}

export default Backdrop;