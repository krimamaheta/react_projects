import { useState } from "react";
import { createContext } from "react";

 const UserprogressContext=createContext({
    progress:'',
    showModal:()=>{},
    hidemodal:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{},
 })

 export function UserprogressContextProvider({children}){
    const [userstate,setuserstate]=useState(' ');

    function showModal(){
        setuserstate('cart')
    }

    function hidemodal(){
        setuserstate('')
    }
    function showCheckout(){
        setuserstate('checkout')
    }
    function hideCheckout()
    {
        setuserstate('')
    }

    const userprogressctx={
        progress:userstate,
        showModal,
        hidemodal,
        showCheckout,hideCheckout
    }
        return(
            <UserprogressContext.Provider value={userprogressctx}>{children}</UserprogressContext.Provider>
        )
 }

 export default UserprogressContext
