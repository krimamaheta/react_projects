//import logo from './logo.svg';
import './App.css';
import Child from './child';
import {createContext,useState}from 'react';
import OtherChild from './otherchild';

export const globaldata=createContext();
function App() {
  const[color,setcolor]=useState("orange");
  const[day,setday]=useState("monday");
  const getColor=(item)=>{
    console.warn(item);
    setcolor(item);
  }
  const getDay=(item)=>{
    console.warn(item);
    setday(item)
  }
  return (
    <globaldata.Provider value={{appcolor:color,getDay:getDay,getColor:getColor}}>
    <div className="App">
      <h2>app components{day}</h2>
      <Child />
      <OtherChild/>
    </div>
    </globaldata.Provider>
  );
}

export default App;
/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/