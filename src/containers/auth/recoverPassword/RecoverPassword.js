import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import * as actions from "../../../actions";

import {
    FormWrapper,
    StyledForm,
    FormHeader,
    SignupWrapper,
    MessageWrapper,
} from "../../../hoc/containers";

import Input from "../../../components/ui/forms/input/input";
import Button from "../../../components/buttons/Button";
import Message from "../../../components/ui/message/Message";

let RecoverySchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid Email.")
        .required("An email is required."),
});

const RecoverPassword = ({ loading, error, recoverPassword }) => {
    return (
        <SignupWrapper>
            <Formik
                initialValues={{ email: "" }}
                validationSchema={RecoverySchema}
                onSubmit={ async (values, { setSubmitting }) => {
                    await recoverPassword(values);
                    setSubmitting(false);
                }}>
                {({ isSubmitting, isValid }) => (
                    <FormWrapper>
                        <FormHeader>
                            <h3>Recover Your Password</h3>
                            <p>Type in your email to recover your password.</p>
                        </FormHeader>
                        <StyledForm>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Your email..."
                                component={Input}
                            />
                            <Button
                                disabled={!isValid || isSubmitting}
                                type="submit"
                                title={loading ? "Sending to your email address" : "Recover Password"}
                            />
                        </StyledForm>
                        <MessageWrapper>
                            <Message error show={error}>
                                {error} 
                            </Message>
                            <Message success show={error === false}>
                                Email sent successfully.
                            </Message>
                        </MessageWrapper>
                    </FormWrapper>
                )}
            </Formik>
        </SignupWrapper>
    );
};

const mapStateToProps = ({ auth }) => ({
    loading: auth.recoverPassword.loading,
    error: auth.recoverPassword.error
});
const mapDispatchToProps = {
    recoverPassword: actions.recoverPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
