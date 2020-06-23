import React, {useEffect} from "react";
import styled from "styled-components";
import {PageWrapper, FormWrapper, FormHeader, MessageWrapper} from "../../../hoc/containers";
import Button from "../../../components/buttons/Button";
import Message from "../../../components/ui/message/Message";

import {connect} from "react-redux";
import * as actions from "../../../actions";

const StyledContent = styled.div `
  min-height: 30rem;
`;

const VerifyEmail = ({sendVerification, error, loading, cleanUp}) => {

    useEffect(() => {
        return() => {
            cleanUp()
        };
    }, [cleanUp]);

    return (
        <PageWrapper>
            <FormWrapper>
                <FormHeader>Time to verify your email.</FormHeader>
                <StyledContent>
                    Verify you email and gain access to all functionality of this
                                                                      application.
                    <Button disabled={loading}
                        onClick={
                            () => sendVerification()
                        }
                        type="submit"
                        title={
                            loading ? "Sending Email..." : "Re-send verification email"
                        }/>
                </StyledContent>
                <MessageWrapper>
                    <Message error
                        show={error}>
                        {error} </Message>
                    <Message success
                        show={
                            error === false
                    }>
                        Email sent successfully.
                    </Message>
                </MessageWrapper>
            </FormWrapper>
        </PageWrapper>
    );
};

const mapStateToProps = ({auth}) => ({error: auth.verifyEmail.error, loading: auth.verifyEmail.loading});

const mapDispatchToProps = {
    sendVerification: actions.verifyEmail,
    cleanUp: actions.cleanUp
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
