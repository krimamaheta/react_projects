import { createContext ,useReducer} from "react";

const CartContext=createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(id)=>{},
})
function CartReducer(state,action){
    if(action.type==='ADD_ITEAM')
    {
        //update
        //add the value
        //state.item.push(action.item);

        const existingcartitemindex=state.iteams.findIndex((item)=>item.id===action.item.id)
        //existing value
        const updateitems=[...state.iteams]
        if(existingcartitemindex>-1)
        {
            //existing 
            const existingitem=state.iteams[existingcartitemindex]
            const updateitem={
             
                ...existingitem,
                quantity:existingitem.quantity+1
            }
            updateitems[existingcartitemindex]=updateitem
        }
        else{
                //not existing
                updateitems.push({...action.item,quantity:1})
        }
        return{...state,iteams:[updateitems]}
    }
    if(action.type==='REMOVE_ITEAM')
    {
        //remove value
        const existingcartitemindex=state.iteams.findIndex((item)=>item.id===action.item.id)
        const existingcartitem=state.iteams[existingcartitemindex]
        
        const updateiteams=[...state.iteams];
        if(existingcartitem.quantity===1)
        {
            updateiteams.splice(existingcartitemindex,1);
        }
        else{
            const updateitem={
                ...existingcartitem,
                quantity:existingcartitem.quantity-1,
            }
            updateiteams[existingcartitemindex]=updateitem
        }
        return {...state,iteams:updateiteams}
    }
    return state;
}
export function CartContextProvider({children}){
    const[cart,dispactchaction]=useReducer(CartReducer,{items:[]});
    function addItem(item){
        dispactchaction({type:'ADD_ITEAM',item:item})
    }
    function removeItem(id){
        dispactchaction({type:'REMOVE_ITEAM',id:id})
    }
    const cartcontext={
        items:cart.items,
        addItem,
        removeItem
    }
    console.log(CartContext);
    return(
        <cartcontext.Provider value={cartcontext}>{children}</cartcontext.Provider>
    )
}


export default CartContext