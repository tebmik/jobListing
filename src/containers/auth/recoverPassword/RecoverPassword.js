import React from "react";
import { Formik, Field } from "formik";
import {
    FormWrapper,
    StyledForm,
    FormHeader,
    SignupWrapper,
} from "../../../hoc/containers";
import * as Yup from "yup";
import Input from "../../../components/ui/forms/input/input";
import Button from "../../../components/buttons/Button";

// import {connect} from "react-redux";

let RecoverySchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid Email.")
        .required("An email is required."),
});

const RecoverPassword = () => {
    return (
        <SignupWrapper>
            <Formik
                initialValues={{ email: "" }}
                validationSchema={RecoverySchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    // setSubmitting(false)
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
                                title="Recover Password"
                            />
                        </StyledForm>
                    </FormWrapper>
                )}
            </Formik>
        </SignupWrapper>
    );
};

// const mapStateToProps = ({ auth }) => ({
//     loading: auth.
// })

export default RecoverPassword;
