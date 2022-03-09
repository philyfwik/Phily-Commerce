import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
//import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9giipmJpJ4Lg-TIpNVU8XcuvKBACo5pU",
  authDomain: "phily-commerce-db.firebaseapp.com",
  projectId: "phily-commerce-db",
  storageBucket: "phily-commerce-db.appspot.com",
  messagingSenderId: "869657808459",
  appId: "1:869657808459:web:325abcb6ed60825ad2c7ce",
  measurementId: "G-WMMGBT8TR3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
 
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
}

//const app = initializeApp(firebaseConfig);
//getFirestore(app);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;