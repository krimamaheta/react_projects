//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const[count,setcount]=useState(1);

  function handleclick(){
   // setcount(count+1);

  //  const ran=Math.floor(Math.random()*10)
  //  //setcount(ran)
   
  //  setcount((pre)=>{
  //   console.warn(pre);
  //   if(pre<5){
  //     alert('low value')
  //   }
  //   return ran;
    
  //  })

  //setcount(count+5)
  for(let i=0; i<5; i++)
  {
    //setcount(count+1)
    setcount((pre)=>pre+1)
  }
  }
  return (
   <div className="App">
      <h3>previous value {count}</h3>
      <button onClick={handleclick}>click  me to update </button>
   </div>
  );
}

export default App;
