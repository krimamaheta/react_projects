import { useContext } from "react";
import Modal from "./Modal";
import CartContext, { CartContextProvider } from "../../store/cartcontext";
import formatnumber from "../../utill/formatting";
import Input from "./input";
import Button from "./button";
import UserprogressContext from "../../store/userprogresscontext";

function Checkout()
{  
    const carcntx=useContext(CartContext)
    const userprogresscnt=useContext(UserprogressContext)
    function handleclick(){
        userprogresscnt.hideCheckout();
    }

    function handlesubmit(eve){
        eve.preventdefault();
        const fd=new FormData(eve.target);
        const data=Object.fromEntries(fd.entries());
      //  console.log(data);

      fetch("http://localhost:3000/order",{
        method:'post',
        header:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            order:{
                items:carcntx.items,
                custemer:data,
            }
        })
      });

    }
    const carttotal=cntx.items.reduce((totalprice,item)=>totalprice+item.price*item.quantity,0)
    return(

    <Modal open={userprogresscnt.progress==='checkout'}>
    <form onsubmit={handlesubmit}>
        <h2>checkout </h2>
        <p>total amount: {formatnumber.format(carttotal)}</p>
        <Input type="text" label="fullname"id="full-name"  />
        <Input type="email" label="email"id="email"  />
        <Input type="text" label="street"id="full-name"  />

        <div className="control-row">
        <Input type="text" label="city"id="city"  />
        <Input type="text" label="postal-code"id="postal-code"  />
        </div>
        <div className="modal-action">
            <Button type="button" typeonly onClick={handleclick}></Button>
            <Button>submit order</Button>
        </div>
    </form>
</Modal>
    )
}

export default Checkout;