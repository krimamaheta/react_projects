import './App.css';
import { useContext } from 'react';
import globaldata from './App'
function SuperChild() {
    const {appcolor,getDay}=useContext(globaldata)
    console.warn('appcolor',appcolor)
    const day='sunday';
  return (
    <div className="App">
      <h2 style={{color:appcolor}}>SuperChild components</h2>
      <button onClick={()=>getDay(day)}></button>
    </div>
  );
}

export default SuperChild;