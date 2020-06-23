import React, { useEffect } from "react";

import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import {
    FormWrapper,
    StyledForm,
    FormHeader,
    SignupWrapper,
} from "../../../../hoc/containers";

import Input from "../../../../components/ui/forms/input/input";
import Button from "../../../../components/buttons/Button";
import { MessageWrapper } from "../../../../hoc/containers";
import Message from "../../../../components/ui/message/Message";
import Link from "../../../../components/links/Link";

import * as actions from "../../../../actions";

let SignupSchema = Yup.object().shape({
    userName: Yup.string()
        .required("Please supply a user name.")
        .min(3, "Must contain at least 3 characters."),
    email: Yup.string()
        .email("Invalid Email.")
        .required("An email is required."),
    password: Yup.string()
        .required("A password is required")
        .min(8, "Password must be at least 8 characters."),
    confirmPassword: Yup.string()
        .required("Please confirm.")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignUpForm = ({ signUp, loading, error, cleanUp, handleClick }) => {
    useEffect(() => {
        return () => {
            cleanUp();
        };
    }, [cleanUp]);

    return (
        <SignupWrapper>
            <Formik
                initialValues={{
                    userName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    await signUp(values);
                    setSubmitting(false);
                }}>
                {({ isSubmitting, isValid }) => (
                    <FormWrapper>
                        <FormHeader>
                            <h3>Signup</h3>
                            <p>Signup to find your new career.</p>
                        </FormHeader>
                        <StyledForm>
                            <Field
                                type="text"
                                name="userName"
                                placeholder="Your user name..."
                                component={Input}
                            />
                            <Field
                                type="email"
                                name="email"
                                placeholder="Your email..."
                                component={Input}
                            />
                            <Field
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                component={Input}
                            />
                            <Field
                                type="password"
                                name="confirmPassword"
                                placeholder="Re-type Password..."
                                component={Input}
                            />
                            <Button
                                disabled={!isValid || isSubmitting}
                                type="submit"
                                title={loading ? "Signing up..." : "Signup"}
                            />
                            <MessageWrapper>
                                <Message error show={error}>
                                    {error}
                                </Message>
                            </MessageWrapper>
                        </StyledForm>
                        <p>Already Signed up</p>
                        <Link title="Signin Instead" link="/login" />
                    </FormWrapper>
                )}
            </Formik>
        </SignupWrapper>
    );
};

const mapStateToProps = ({ auth }) => ({
    error: auth.error,
    loading: auth.loading,
});

const mapDispatchToProps = {
    signUp: actions.signUp,
    cleanUp: actions.cleanUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
