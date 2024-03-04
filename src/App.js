//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const[error,seterror]=useState(null);

  const SaveUser=async()=>{
    try{
      const response= await fetch("https://api.example.com/saveUser",{
        method:'post',
        headers:{
          'Content-Type':'application.json'
        },
      })
      if(!response.ok)
      {
        throw new Error('fail to save user')
      }
    }
    catch(error)
    {
      seterror(error.message)
    }
  }
  
  // const[name,setname]=useState('');
  // const[email,setemail]=useState('');
  // const[mobilenu,setmobilenu]=useState('');
  // function SaveUser()
  // {
  //     console.warn({name,email,mobilenu});
  //     let data={name,email,mobilenu}
  //     fetch("https://api.example.com/saveUser",{method:'post',
  //     headers:{
  //       'accept':'application/json',
  //       'Content-Type':'application-json'
  //     },
  //     body:JSON.stringify(data)
  //   }
  //     ).then((result)=>{
  //       console.warn('res',result);
  //     })
  // }
  return (
    <div className='App'>
     
      <button type="button" onClick={SaveUser}>submit me</button>
     <div>{error && <p>Error: {error}</p>}</div> 

    </div>
  );
}

export default App;

// <input name='name' value={name} onChange={(e)=>{setname(e.target.value)}}type='name' /><br/>
// <input name='email' value={email} type='email' onChange={(e)=>{setemail(e.target.value)}} /><br/>
// <input name='mobilenu' value={mobilenu} type='mobilenu' onChange={(e)=>{setmobilenu(e.target.value)}} /><br/>