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

import * as actions from "../../../../actions";

import Input from "../../../../components/ui/forms/input/input";
import Button from "../../../../components/buttons/Button";
import { MessageWrapper } from "../../../../hoc/containers";
import Message from "../../../../components/ui/message/Message";
import Link from "../../../../components/links/Link";

let SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email.").required("An email is required."),
  password: Yup.string()
    .required("A password is required")
    .min(8, "Password must be at least 8 characters."),
});

const SigninForm = ({ error, loading, login, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <SignupWrapper>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SigninSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await login(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <FormWrapper>
            <FormHeader>
              <h3>Signin</h3>
              <p>Signin and find your new career.</p>
            </FormHeader>
            <StyledForm>
              <Field
                type="email"
                name="email"
                placeholder="Your email..."
                component={Input}
                autoComplete="off"
              />
              <Field
                type="password"
                name="password"
                placeholder="Enter your Password"
                component={Input}
                autoComplete="off"
              />
              <Button
                type="submit"
                title={loading ? "Signing in..." : "Signin"}
                disabled={!isValid || isSubmitting}
              />

              <MessageWrapper>
                <Message errro show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
            <p>Not yet signed-up?</p>
            <Link title="Signup Here" link="/signup" />
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
  login: actions.signIn,
  cleanUp: actions.cleanUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
