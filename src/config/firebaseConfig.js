import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCaxzPTEQvwmUdzVKyp6hHK6K1Eo56cZfs",
    authDomain: "vibenote-4ca20.firebaseapp.com",
    projectId: "vibenote-4ca20",
    storageBucket: "vibenote-4ca20.appspot.com",
    messagingSenderId: "964315486606",
    appId: "1:964315486606:web:97d3a230e42cb30bc12cdf",
    measurementId: "G-H1D7B1VXED"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()

export default firebase