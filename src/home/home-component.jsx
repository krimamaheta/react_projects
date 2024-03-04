import { Outlet } from "react-router-dom";

const Home=()=>{
    return(
        <div>
            <Outlet/>
            <h2>hello new page</h2>
        </div>
    )
}

export default Home;