import { createContext, useState,useEffect} from "react"
import  {onAuthStateChangedListener,signoutuser}from '../utils/firebase/firebase.utills';

export const UserContext=createContext({
    currentuser:null,
    setcurrentuser:()=>null,
})
useEffect(()=>{
   const unsubscribe= onAuthStateChangedListener=(user)=>{
    console.log(user);
   }
   return unsubscribe;
},[])
export const Userprovider=({children})=>{
        const[currentuser,setcurrentuser]=useState(null);
        const value={currentuser,setcurrentuser};

        signoutuser();

        return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

