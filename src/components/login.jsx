
 import { useRef, useState} from "react";   

function Login()
{
    const[invalidemail,seteinvalidemail]=useState(false);
    const email=useRef();
    const password=useRef();

 const handleclick=(event)=>{
    event.preventDefault();
    console.log('jay')

    const enteremail=email.current.value;
    const enterpassword=password.current.value;
  //  console.log(enteremail,enterpassword)
   const emialisvalid=enteremail.includes('@')
   if(!emialisvalid)
   {
    seteinvalidemail(true);
    return
   }
   seteinvalidemail(false);
   console.log('send http request')

 }
 
    return(
        <form onSubmit={handleclick}>
            <h2>Login</h2>
            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" ref={email}/>
                    <div className="control-error">{invalidemail && <p>please set valid email</p>}</div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"  ref={password}/>
                </div>
            </div>

            <p className="form-action">
                <button className="button button-flat">reset</button>
                <button className="button" >Log in</button>
            </p>
        </form>
    )
}


export default Login;