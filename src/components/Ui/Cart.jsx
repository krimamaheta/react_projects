//visisble cart data on the screen

import { useContext } from "react"
import Modal from "./Modal"
import CartContext from "../../store/cartcontext"
import formatnumber from "../../utill/formatting"
import Button from "./button"
import UserprogressContext, { UserprogressContextProvider } from "../../store/userprogresscontext"
import CartItem from "./cartiteam"

function Cart()
{
    const carttotal=cntx.items.reduce((totalprice,item)=>totalprice+item.price*item.quantity,0)
    const cntx=useContext(CartContext)
    const progressctx=useContext(UserprogressContext)

   function handleclose(){
    progressctx.hideCart();
   }
    return(
    <Modal className="cart" open={progressctx.progress==='cart'}>
    <h2>Your cart</h2>
    <ul>
        {cntx.items.map((item)=>(<CartItem key={item.id} name={item.name} qty={item.qty} price={item.price} 
        onincrese={()=>cntx.addItem(item)}
        ondecrese={()=>cntx.removeItem(item.id)}/>))}
    </ul>
    <p className="cart-total">{formatnumber.format(carttotal)}</p>
    <p className="modal-actions">
        <Button typeonly onClick={handleclose}>close</Button>
        {
            cntx.items.length>0 &&(<Button onClick={handleclose}>go to checkout</Button>)
        }
        <Button onClick={handleclose}>go to checkout</Button>
    </p>
   </Modal>
)
    
}

export default Cart

//{...iteam}

// //<ul>
// {cntx.items.map((item)=>(<li key={item.id}>{item.name}-{item.quantity}</li>))}
// </ul>