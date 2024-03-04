//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/cartcontext';
import { UserprogressContextProvider } from './store/userprogresscontext';

function App() {
  return (
    <UserprogressContextProvider>   
    <CartContextProvider>
     <Header />
     <Meals />
    </CartContextProvider>
    </UserprogressContextProvider>

  );
}

export default App;
