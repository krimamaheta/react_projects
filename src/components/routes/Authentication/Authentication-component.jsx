
//import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
//import signInWithGoogleRedirect
import './Authentication.style.scss';
import SignUpForm from "../../sign-up-form/sign-up.componet";
import SignInForm from "../../sign-in-form/sign-in-form-componet";
import { auth,signInWithGooglePopup ,createUserDocumentFromAuth} from "../../../utils/firebase/firebase.utills";
const Authentication=()=>{

    const loggoogleuser=async()=>{
            const {user}= await signInWithGooglePopup();
           //console.log(response);
          const userDocRef=await createUserDocumentFromAuth(user);
    }

//     const loggoogleredirectuser=async()=>{
//         const {user}= await signInWithGoogleRedirect();
//        console.log({user});
//      // const userDocRef=await createUserDocumentFromAuth(user);
// }


// useEffect(()=>{
//  const fun=async()=>{   const redirect=await getRedirectResult(auth);
//     if(redirect) {
//             await createUserDocumentFromAuth(redirect.user);}
// }
// fun();
//    // console.log(redirect);
// },[])


    return(
        <div className="authentication-container">
           
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;

//    <button onClick={signInWithGoogleRedirect}>sign in with googleredirect</button>