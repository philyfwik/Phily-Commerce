import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9giipmJpJ4Lg-TIpNVU8XcuvKBACo5pU",
  authDomain: "phily-commerce-db.firebaseapp.com",
  projectId: "phily-commerce-db",
  storageBucket: "phily-commerce-db.appspot.com",
  messagingSenderId: "869657808459",
  appId: "1:869657808459:web:325abcb6ed60825ad2c7ce",
  measurementId: "G-WMMGBT8TR3"
};

const app = initializeApp(firebaseConfig);
getFirestore(app);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
