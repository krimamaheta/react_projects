import Button from "./Ui/button";
import formatnumber from "../utill/formatting";
import CartContext from "../store/cartcontext";
import { useContext } from "react";

function MealItem({meal})
{
    const cntx=useContext(CartContext)
    function handleaddmiltocart()
    {
        cntx.addItem(meal)
    }
    return(
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
                <div >
                        <h3>{meal.name}</h3>
                        <p className="meal-item-price">{formatnumber.format(meal.price)}</p>
                        <p className="meal-item-description">{meal.description}</p>
                </div>

                <div className="meal-item-action">
                        <Button onClick={handleaddmiltocart}> add to cart</Button>
                </div>
            </article>
        </li>
    )
}

export default MealItem;