import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBp1DRIrJ5U56nxFA8kecNE636WrgKBdSc",
    authDomain: "crown-clothing-database-ee24c.firebaseapp.com",
    databaseURL: "https://crown-clothing-database-ee24c.firebaseio.com",
    projectId: "crown-clothing-database-ee24c",
    storageBucket: "crown-clothing-database-ee24c.appspot.com",
    messagingSenderId: "937241825596",
    appId: "1:937241825596:web:e3e881f326d25107c70e39",
    measurementId: "G-TXRRRRKXTH"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoodle = () => auth.signInWithPopup(provider);

export default firebase;