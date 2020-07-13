import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCsGe7onMjpIgdxn2Jh1kdgeoYkoRiKTxc",
    authDomain: "high-chart-proj.firebaseapp.com",
    databaseURL: "https://high-chart-proj.firebaseio.com",
    projectId: "high-chart-proj",
    storageBucket: "high-chart-proj.appspot.com",
    messagingSenderId: "782034832049",
    appId: "1:782034832049:web:44469169924ed9dabf7090",
    measurementId: "G-B8ZLV7PHQM"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);