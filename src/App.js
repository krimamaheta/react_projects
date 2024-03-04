import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'

const Shop = () => {
  return (
    <h1>this is shop</h1>
  )
}

const Contact = () => {
  return (
    <h1>this is contact page</h1>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path='/shop' element={<Shop />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}
// function App() {
//   return (
//     <Routes>
//         <Route path='/' element={<shop/>}>
//         </Route>
//     </Routes>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
