
import { GlobalDataContext} from "./App"
import { useContext } from "react"
export const Child=()=>{
    const{languages,language,setlanguages}=useContext(GlobalDataContext);
    let currentIndex=languages.indexOf(language);
    console.log(currentIndex)
    const togglelanuage=()=>{
        //alert('welcome');
       
      currentIndex===languages.length-1?setlanguages(languages[0]):setlanguages(languages[currentIndex+1])
   
    }

    return(
        <div>child comaponents
            <h2>{`favorite programming lanuage ${language}`}</h2>
            <button onClick={togglelanuage}>toggle button</button>


        </div>
    )
}