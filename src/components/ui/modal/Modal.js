import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Backdrop from "./backdrop/Backdrop";

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 .5rem 3.5rem var(--shadow);
    border-radius: .5rem;
    width: 100%;
    max-width: 50rem;
    background-color: var(--color-white);
    opacity: ${({ opened }) => (opened ? "1" : "0")};
    visability: ${({ opened }) => (opened ? "visable" : "hidden")};
    transition: all .2s ease-in-out;
    z-index: 1001;
    padding: 2rem;
`;


const Modal = ({ children, opened, close }) => {
    return ReactDOM.createPortal(
        <>
            <Backdrop close={close} opened={opened} />
            <ModalWrapper opened={opened} >
                {children}
            </ModalWrapper>
        </>, 
        document.querySelector("#root-modal"))
};

export default Modal;