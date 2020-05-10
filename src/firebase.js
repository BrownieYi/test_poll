import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAXsDJx7NKnNOfgHEmGyY3oFKVMpHdY95c",
    authDomain: "poll-30195.firebaseapp.com",
    databaseURL: "https://poll-30195.firebaseio.com",
};
firebase.initializeApp(config);
export default firebase;