import './App.css';
import { useContext } from 'react';
import globaldata from './App'
import SuperChild from './superchild';
function OtherChild() {
    const {appcolor}=useContext(globaldata)
    console.warn('appcolor',appcolor)
  return (
    <div className="App">
      <h2 style={{color:appcolor}}>Other Child components</h2>
      <SuperChild/>
    </div>
  );
}

export default OtherChild;