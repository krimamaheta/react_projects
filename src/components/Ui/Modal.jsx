import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function Modal({children,open,className=''})
{
    const dialog=useRef();
    useEffect(()=>{
        if(open){
            dialog.current.showModal();
        }
        return ()=>dialog.current.close();
    },[open])
    return createPortal(<dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,document.getElementById('modal'))
    
}
export default Modal;


// const [meal,setmeal]=useState([])
// useEffect(()=>{
//     async function getdata(){
//         const response=await fetch("");
//         const data=await response.json();
//         setmeal(data)
//     }
//     getdata();
// },[])
//className="modal" static 
//dynamic className={`modal$  {className}`}