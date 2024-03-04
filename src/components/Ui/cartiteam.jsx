import formatnumber from "../../utill/formatting";
function CartItem({name,price,qty,onincrese,ondecrese})
{
    return(
        <li className="cart-item">
            <p>
                {name}-{qty}*{formatnumber.format(price)}    
            </p>
            <p className="cart-item-actions">
                <button onClick={ondecrese}>-</button>
                <span>{qty}</span>
                <button onClick={onincrese}>+</button>
            </p>
        </li>
    )
}
export default CartItem;