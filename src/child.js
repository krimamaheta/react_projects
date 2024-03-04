import './App.css';
import { useContext } from 'react';
import globaldata from './App'

import SuperChild from './superchild';
function Child() {
    const {appcolor,getColor}=useContext(globaldata)
    console.warn('appcolor',appcolor)
  return (
    <div className="App">
      <h2 style={{color:appcolor}}>Child components</h2>
      <button onClick={()=>getColor('pink')}>color change</button>
      <SuperChild/>
    </div>
  );
}

export default Child;