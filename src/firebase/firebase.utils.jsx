import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDTFWO_VYdfXKEhQ7sYBYqnBXo_2wEhEUU",
  authDomain: "chai-wala-b9167.firebaseapp.com",
  databaseURL: "https://chai-wala-b9167.firebaseio.com",
  projectId: "chai-wala-b9167",
  storageBucket: "chai-wala-b9167.appspot.com",
  messagingSenderId: "1084592732199",
  appId: "1:1084592732199:web:b62363787b75268ded3602",
  measurementId: "G-Z617R5EJDK",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;