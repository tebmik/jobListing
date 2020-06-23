import * as actions from "./types";

// SIGN UP ACTION CREATOR

export const signUp = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: actions.AUTH_START });
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    // Send the verification email

    const user = await firebase.auth().currentUser;
    await user.sendEmailVerification();

    await firestore.collection("users").doc(res.user.uid).set({
      userName: data.userName,
      email: data.email,
      password: data.password,
    });
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: actions.AUTH_ERROR, payload: err.message });
  }
  dispatch({ type: actions.AUTH_END });
};

//SIGNIN ACTION CREATOR

export const signIn = (data) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actions.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: actions.AUTH_ERROR, payload: err.message });
  }
  dispatch({ type: actions.AUTH_END });
};

//SIGNOUT ACTION CREATOR

export const signout = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err.message);
  }
};

// CLEAN UP ACTION CREATOR

export const cleanUp = () => ({
  type: actions.CLEAN_UP,
});

// verify email action type

export const verifyEmail = () => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  dispatch({ type: actions.VERIFY_START });
  try {
    const user = await firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({ type: actions.VERIFY_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.VERIFY_ERROR, payload: err.message });
  }
  dispatch({ type: actions.VERIFY_END });
};


export const recoverPassword = (data) => async ( dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actions.RECOVER_START });
  try {
    const auth = firebase.auth();
    await auth.sendPasswordResetEmail(data.email);
    dispatch({ type: actions.RECOVER_SUCCESS });
  }catch(err) {
    dispatch({ type: actions.RECOVER_ERROR, payload: err.message })
  }
  // dispatch({ type: actions.RECOVER_END });
};