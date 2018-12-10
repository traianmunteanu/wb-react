import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3AKkkPrGaHODRAejhOTM9xIXpAjsuKGE",
    authDomain: "catch-of-the-day-12345.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-12345.firebaseio.com",
})
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;