
import { useState } from "react";   
import Input from "./input";
import { isNotEmpty,isEmail,hasMinLength } from "../utills/validation";

function Login()
{
const[entervalue,setenterevalue]=useState({
    email:'',
    password:'',
})

const [didedit,setdidedit]=useState({
    email:false,
    password:false,
})
 const handleclick=(event)=>{
    event.preventDefault();
    console.log('jay')
    //console.log(enteredemail,enteredpassword)

    //reset mate
   console.log(entervalue);
   setenterevalue({
    email:'',
    password:'',
   })
    
 }
 function inputchange(identifier,value)
 {
        setenterevalue(prevvalue=>({
            ...prevvalue,
            [identifier]:value,
        }))

        setdidedit((prevedit)=>({
            ...prevedit,
            [identifier]:false,
        }))
 }

//  const invalidemail=didedit.email&&!entervalue.email.includes('@');
//  const invalidpassword=didedit.password&& !entervalue.password.trim().length<6;

const invalidemail=didedit.email && !isEmail(entervalue.email) && !isNotEmpty(entervalue.email)
const invalidpassword=didedit.password && !hasMinLength(entervalue.password,6);
 function handleinputblur(identifier)
    {
        setdidedit((editprev)=>({
            ...editprev,
            [identifier]:true,
        }))
    }
 

// const[enteredemail,setenteredemail]=useState('');
// const[enteredpassword,setenterepassword]=useState('')

//  function changeemail(event){
//         setenteredemail(event.target.value)
//  }

//  function changepassword(event){
//     setenterepassword(event.target.value)
//  }
 
    return(
        <form onSubmit={handleclick}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                name='email'
                id='email'
                password='email'
                type='email'
                error={invalidemail && 'please enter valid email'}
                onBlur={()=>handleinputblur('email')} onChange={(event)=>inputchange('email',event.target.value)} value={entervalue.email}
                />
           
             
                <Input
                name='password'
                id='password'
                password='password'
                type='password'
                error={invalidpassword && 'please enter valid password'}
                onBlur={()=>handleinputblur('password')} onChange={(event)=>inputchange('password',event.target.value)} value={entervalue.password}
                />
            </div>

            <p className="form-action">
                <button className="button button-flat">reset</button>
                <button className="button" >Log in</button>
            </p>
        </form>
    )
}

 

export default Login;

//<input type="email" id="email" name="email" onChange={(event)=>inputchange('email',event.target.value)} value={entervalue.email}/>
// <input type="password" id="password" name="password" onChange={(event)=>inputchange('password',event.target.value)} value={entervalue.password}/>


//<input type="email" id="email" name="email" onChange={changeemail} value={enteredemail}/>
//  <input type="password" id="password" name="password" onChange={changepassword} value={enteredpassword}/>

// const invalidemail=entervalue.email!==''&&!entervalue.email.includes('@');


//   <div className="control no-margin">
{/* <label htmlFor="email">Email</label>
<input type="email" id="email" 
onBlur={()=>handleinputblur('email')} name="email" onChange={(event)=>inputchange('email',event.target.value)} value={entervalue.email}/>
</div>
<div className="control-error">{invalidemail &&<p>please enter valid email address</p>}</div> */}

{/* 
<div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(event)=>inputchange('password',event.target.value)} value={entervalue.password}/>
                </div> */}