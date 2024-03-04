import { useState,useContext } from "react";
import FormInput from "../form-input/form-input-component";
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utills";
import './sign-up-form.scss';
import Button from "../button/button-comaponents";
import { UserContext } from "../../Context/user-context";


const defaultFormFiels={
    displayName:'',
    email:'',
    password:'',
    confirmpassword:'',
}
const SignUpForm=()=>{

    const [FormFiels,setFormFields]=useState(defaultFormFiels);
    const{displayName,email,password,confirmpassword}=FormFiels;
    console.log(FormFiels);

    const val=useContext(UserContext);
    //console.log('laxman')

    const resetFormfield=()=>{
        setFormFields(defaultFormFiels);
    }


    const  handlesubmit=async(event)=>{
        event.preventDefault();
        
            if(password !==confirmpassword)
            {
                alert('password do not match');
                return;
            }
            try{
                const {user}=await createAuthUserWithEmailAndPassword(email,password);
                //console.log(response); 
                //setcurrentuser(user);

                await createUserDocumentFromAuth(user,{displayName});
                resetFormfield();
                
            }
          
            catch(error)
            {
                if(error.code==='auth/email-already-in-use')
                {
                        alert('cannot create user ,email already created.');     
                }
                else{
                    console.log('created error',error);
                }
            }
        }

    const handlechange=(event)=>{
        const{name,value}=event.target;
      //  const f1=FormFiels[name]+value
        setFormFields({...FormFiels,[name]:value})
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account ? </h2>
            <span>sign up with your email and password</span>
            <form onSubmit={handlesubmit}>
                
                <FormInput label="Display Name" type="text" required onChange={handlechange} name="displayName" value={displayName}/>

            
                < FormInput label="Email" type="email" required onChange={handlechange} name="email" value={email}/>

                
                <FormInput label="Password" type="password" required onChange={handlechange} name="password" value={password}/>

                
                <FormInput label="confirm password" type="password" required onChange={handlechange} name="confirmpassword" value={confirmpassword}/>

                <Button buttontype='inverted' type="submit">Sign Up</Button>
            </form>
        </div>
        
    )
}

export default SignUpForm;