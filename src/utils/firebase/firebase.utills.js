import { initializeApp } from 'firebase/app';

import { getAuth, signInWithRedirect, signInWithPopup,signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword, GoogleAuthProvider,createUserWithEmailAndPassword } from 'firebase/auth';

//import database
import {
  getFirestore,
  doc, getDoc, setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDginbIvdHhsLOB35Pd7rlsH0sAm6hecN4",
  authDomain: "clothing-db-2d0f0.firebaseapp.com",
  projectId: "clothing-db-2d0f0",
  storageBucket: "clothing-db-2d0f0.appspot.com",
  messagingSenderId: "164355207529",
  appId: "1:164355207529:web:67a76c341eabc6265dcdf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//write the code here
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);



//db
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInfo={}) => {
  if(!userAuth)return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  //console.log(userDocRef);

  const usersnapshot = await getDoc(userDocRef)
  //console.log(usersnapshot);
  //console.log(usersnapshot.exists() );

  if(!usersnapshot.exists())
  {
    const{displayName,email}=userAuth;
    const CreatedAt=new Date();

    try{
      await setDoc(userDocRef,{
        displayName
        ,email
        ,CreatedAt,
        ...additionalInfo,  
      })

    }
    catch(error)
    {
      console.log('error create user'.error.message);
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword=async(email,password)=>{
  if(!email || !password)return;
  return await createUserWithEmailAndPassword(auth,email,password);
}


export const signinUserWithEmailAndPassword=async(email,password)=>{
  if(!email || !password)return;
  return await signInWithEmailAndPassword(auth,email,password);
}

export const signoutuser=async()=>await signOut(auth);


export const  onAuthStateChangedListener=(callback)=>{
  onAuthStateChanged(auth,callback);
}