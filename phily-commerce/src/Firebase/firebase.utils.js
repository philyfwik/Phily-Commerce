import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA9giipmJpJ4Lg-TIpNVU8XcuvKBACo5pU",
  authDomain: "phily-commerce-db.firebaseapp.com",
  projectId: "phily-commerce-db",
  storageBucket: "phily-commerce-db.appspot.com",
  messagingSenderId: "869657808459",
  appId: "1:869657808459:web:325abcb6ed60825ad2c7ce",
  measurementId: "G-WMMGBT8TR3"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  //  if user doesn't exist, create new user in db
  if(!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
}

//export default firebase;