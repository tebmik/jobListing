import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Field } from "formik";




import { 
    SignupWrapper, 
    FormWrapper, 
    FormHeader, 
    StyledForm, 
    MessageWrapper,
    Header,
    HeaderP,
    H3 } from "../../hoc/containers";

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
    transition: all .25s ease-in-out;

    &:hover {
        transform: translateY(-0.25rem);
    }

    &:active {
        transform: translateY(0.25rem);
    }
`;

const PasswordWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(36.51rem, 1fr));
    grid-gap: 2rem;
    margin-bottom: 3rem;
`;

const DeleteButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 2rem;
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

const ProfileScreen = ({ 
    loading, 
    error, 
    updateProfile, 
    cleanUp, 
    firebase, 
    deleteUser,
    deleteError,
    deleteLoading }) => {
  
  useEffect(() => {
    return () => {
      cleanUp()
    }
  }, [cleanUp]) 
  
  const [ modelOpened, setModalOpened ] = useState(false);


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
                    <Header 
                        >
                        <H3>Personal Information</H3>
                        <HeaderP>Update Your account information.</HeaderP>
                    </Header>
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
                        <PasswordWrapper>
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
                        </PasswordWrapper>
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
        <Modal opened={modelOpened} close={() => setModalOpened(false)}>
            <FormHeader>
                <h3>Delete your Account</h3>
                <p>Do you really want to delete your account.</p>
            </FormHeader>
            <DeleteButtonWrapper>
                <Button 
                    type="submit"
                    title={deleteLoading ? "Deleting..." : "Delete"}
                    disabled={deleteLoading}
                    onClick={() => deleteUser()}
                    />
                <Button
                    type="submit"
                    title="Cancel"
                    onClick={() => setModalOpened(false)} />
                <MessageWrapper>
                    <Message errro show={error}>
                        {deleteError}
                    </Message>
                    <Message success show={error === false}>
                        Thankyou, Profile was updated!
                    </Message>
                </MessageWrapper>
            </DeleteButtonWrapper>
        </Modal>
    </SignupWrapper>
  );
};

const mapStateToProps = ({ auth, firebase }) => ({
  loading: auth.updateProfile.loading,
  error: auth.updateProfile.error, 
  firebase,
  deleteError: auth.deleteUser.error,
  deleteLoading: auth.deleteUser.loading
});
const mapDispatchToProps = {
  updateProfile: actions.updateProfile,
  deleteUser: actions.deleteUser,
  cleanUp: actions.cleanUp
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
