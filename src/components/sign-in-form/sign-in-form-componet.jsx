import { useContext, useState } from "react";
import FormInput from "../form-input/form-input-component";
import { createAuthUserWithEmailAndPassword,signinUserWithEmailAndPassword,signInWithGooglePopup ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utills";
import './sign-in-form.scss';
import Button from "../button/button-comaponents";
import { UserContext } from "../../Context/user-context";



const defaultFormFiels={
    displayName:'',
    email:'',
    password:'',
    confirmpassword:'',
}
const SignInForm=()=>{

    const [FormFiels,setFormFields]=useState(defaultFormFiels);
    const{email,password}=FormFiels;
    console.log(FormFiels);

    const {setcurrentuser}=useContext(UserContext)

    const resetFormfield=()=>{
        setFormFields(defaultFormFiels);
    }

    const signinwithgoogle=async()=>{
        const {user}= await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
}



    const  handlesubmit=async(event)=>{
        event.preventDefault();
        
          
            try{
                const {user}=await signinUserWithEmailAndPassword(email,password)
                //console.log(reponse);
                setcurrentuser(user)
                resetFormfield();
            }
            
          
            catch(error)
            //auth/too-many-requests
            //auth/too-many-requests
            {
                if(error.code==='auth/too-many-requests')
               {alert('incorrect password for email')}
               else if(error.code==='auth/user-not-found')
               {alert('incorrect email id')}
                
            //     console.log(error);
            }
        }

    const handlechange=(event)=>{
        const{name,value}=event.target;
      //  const f1=FormFiels[name]+value
        setFormFields({...FormFiels,[name]:value})
    }

    return(
        <div className="sign-up-container">
            <h2>Alredy  have an account ? </h2>
            <span>sign in with your email and password</span>
            <form onSubmit={handlesubmit}>
                
             

            
                < FormInput label="Email" type="email" required onChange={handlechange} name="email" value={email}/>

                
                <FormInput label="Password" type="password" required onChange={handlechange} name="password" value={password}/>

                
              
                <div className="buttons-conatiner">
                <Button buttontype='inverted' type="submit">Sign In</Button>
                <Button type='button' buttontype='google'  onClick={signinwithgoogle}>Sign In with google</Button>
                </div>
                
            </form>
        </div>
        
    )
}

export default SignInForm;