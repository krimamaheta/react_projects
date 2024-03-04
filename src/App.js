//import logo from './logo.svg';
import './App.css';
//import { UseContext ,useState} from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { Child } from './child';

const languages=['javascript','python','next js ']

export const GlobalDataContext=createContext({
  languages,
  language:languages[0],
  setlanguages:()=>{},  
})
function App() {
  // const setlanguages=(newlanguage)=>{
  //   setlanguages(newlanguage);
  // }
  const[language, setlanguages]=useState(languages[0]);
  return (
    <GlobalDataContext.Provider value={{languages,language,setlanguages}}>
    <div className="App">
      <h1>example of create context api</h1>
      <Child/>
    </div>
    </GlobalDataContext.Provider>
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
