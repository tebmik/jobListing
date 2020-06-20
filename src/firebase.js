import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { API_KEY } from "../src/config/config";

const config = {
    // apiKey: process.env.REACT_APP_APIKEY,
    apiKey: API_KEY,
    authDomain: "job-search-32939.firebaseapp.com",
    databaseURL: "https://job-search-32939.firebaseio.com",
    projectId: "job-search-32939",
    storageBucket: "job-search-32939.appspot.com",
    messagingSenderId: "461138609993",
    appId: "1:461138609993:web:b522ead39d877dcff4fc98",
    measurementId: "G-1HQTLNR6E9"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;