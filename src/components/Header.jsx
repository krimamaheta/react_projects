import Button from './Ui/button';
import logoImg from '../assets/logo.jpg'
import CartContext from '../store/cartcontext';
import { useContext } from 'react';
import UserprogressContext from '../store/userprogresscontext';

function Header(){
    const cntx=useContext(CartContext)
    const progresscntx=useContext(UserprogressContext);

    const totalcartitem=cntx.items.reduce((totalitems,item)=>{
        return totalitems+item.quantity
    },0)
    function handleshowcart(){
        progresscntx.showCart()
    }
    return(
        <Header id='main-header'>
        <div id='title'> 
            <img src={logoImg} alt='a arestaurant'></img>
            <h1>React Food</h1>
        </div>
        <nav>
            <Button typeonly onClick={handleshowcart}>Cart ({totalcartitem})</Button>
        </nav>
        <h1>hello it is food application</h1>
    </Header>   
    )
}

export default Header;