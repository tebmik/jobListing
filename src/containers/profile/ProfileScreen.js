import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Field } from "formik";

import { SignupWrapper, FormWrapper, FormHeader, StyledForm, MessageWrapper } from "../../hoc/containers";

import Input from "../../components/ui/forms/input/input";
import Button from "../../components/buttons/Button";
import Message from "../../components/ui/message/Message";
import Modal from "../../components/ui/modal/Modal";

import { connect } from "react-redux";
import * as actions from "../../actions";



const DeleteAccountP = styled.p`
    cursor: pointer;
    text-transform: uppercase;
    color: var(--color-danger);
    font-weight: 500;
    font-size: 1.6rem;
`;

let ProfileSchema = Yup.object().shape({
  userName: Yup.string()
        .required("Please supply a user name.")
        .min(3, "Must contain at least 3 characters."),
  email: Yup.string()
      .email("Invalid Email.")
      .required("An email is required."),
  password: Yup.string()
      .min(8, "Password must be at least 8 characters."),
  confirmPassword: Yup.string().when("password", {
      is: password => password > 0,
      then: Yup.string()
        .required("Please confirm.")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
  })
});

const ProfileScreen = ({ loading, error, updateProfile, cleanUp, firebase }) => {
  
  useEffect(() => {
    return () => {
      cleanUp()
    }
  }, [cleanUp]) 
  
  const [ modelOpened, setModalOpened ] = useState(false);


  if(!firebase.profile.isLoaded) return null;

  console.log(loading)
  console.log(error)
  return (
    <SignupWrapper>
            <Formik
                initialValues={{
                    userName: firebase.profile.userName,
                    email: firebase.auth.email,
                    password: "",
                    confirmPassword: ""
                }}
                validationSchema={ProfileSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    await updateProfile(values);
                    setSubmitting(false);
                }}>
                {({ isSubmitting, isValid }) => (
                    <FormWrapper>
                        <FormHeader>
                            <h3>Would you like to update your information.</h3>
                            <p>Fill out this form. Its that simple.</p>
                        </FormHeader>
                        <StyledForm>
                            <Field
                                type="text"
                                name="userName"
                                placeholder="Your new user name..."
                                component={Input}
                            />
                            <Field
                                type="email"
                                name="email"
                                placeholder="Your new email..."
                                component={Input}
                                autoComplete="off"
                            />
                            <Field
                                type="password"
                                name="password"
                                placeholder="Enter your new Password"
                                component={Input}
                                autoComplete="off"
                            />
                            <Field
                                type="password"
                                name="confirmPassword"
                                placeholder="Re-type you new Password..."
                                component={Input}
                            />
                            <Button
                                type="submit"
                                title={loading ? "Updating..." : "Update Profile"}
                                disabled={!isValid || isSubmitting}
                            />
                            </StyledForm>
                            <MessageWrapper>
                                <Message errro show={error}>
                                    {error}
                                </Message>
                                <Message success show={error === false}>
                                    Thankyou, Profile was updated!
                                </Message>
                            </MessageWrapper>
                            <DeleteAccountP onClick={() => setModalOpened(true)}>Delete Account</DeleteAccountP>
                    </FormWrapper>
                )}
            </Formik>
            <Modal opened={modelOpened} close={() => setModalOpened(false)}>Would you like to Delete you account</Modal>
        </SignupWrapper>
  );
};

const mapStateToProps = ({ auth, firebase }) => ({
  loading: auth.updateProfile.loading,
  error: auth.updateProfile.error, 
  firebase
});
const mapDispatchToProps = {
  updateProfile: actions.updateProfile,
  cleanUp: actions.cleanUp
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
