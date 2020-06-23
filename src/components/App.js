import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import "../App.css";
import Layout from "./layout/Layout";
import HomeScreen from "../containers/home/HomeScreen";
import ProfileScreen from "../containers/profile/ProfileScreen";
import ContactScreen from "../containers/contact/ContactScreen";
// import SignupScreen from "../containers/auth/authScreen";
import SigninForm from "../containers/auth/signin/signinForm/SigninForm";
import SignUpForm from "../containers/auth/signup/signUpForm/SignUpForm";
import Logout from "../containers/auth/logout/Logout";
import VerifyEmail from "../containers/auth/verifyEmail/VerifyEmail";
import RecoverPassword from "../containers/auth/recoverPassword/RecoverPassword";
// import JobsScreen from "../containers/jobsScreen/JobsScreen";


const App = ({loggedIn, emailVerified}) => {
    let routes;
    if (loggedIn && !emailVerified) {
        routes = (
            <Switch>
                <Route exact path="/verify-email"
                    component={VerifyEmail}/>
                <Route exact path="/logout"
                    component={Logout}/>
                <Redirect exact to="/verify-email"/>
            </Switch>
        );
    } else if (loggedIn && emailVerified) {
        routes = (
            <Switch>
                <Route exact path="/"
                    component={HomeScreen}/>
                <Route exact path="/profile"
                    component={ProfileScreen}/>
                <Route exact path="/contact"
                    component={ContactScreen}/>
                <Route exact path="/logout"
                    component={Logout}/>
                <Redirect exact to="/"/>
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route exact path="/"
                    component={HomeScreen}/>
                <Route exact path="/signup"
                    component={SignUpForm}/>
                <Route exact path="/login"
                    component={SigninForm}/>
                <Route exact path="/recover"
                    component={RecoverPassword}/>
                <Redirect exact to="/"/>

            </Switch>
        );
    }

    return (
        <div id="App">
            <Layout>{routes}</Layout>
        </div>
    );
};

const mapStateToProps = ({firebase}) => ({loggedIn: firebase.auth.uid, emailVerified: firebase.auth.emailVerified});

export default connect(mapStateToProps)(App);
