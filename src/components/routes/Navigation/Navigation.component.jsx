import { Outlet ,Link} from "react-router-dom"
import { Fragment ,useContext} from "react";
//import {ReactComponent as CrownLogo} from '../../../assets/crown1.svg';
import { ReactSVG } from "react-svg";
import './Navigation.styles.scss';
import { UserContext } from "../../../Context/user-context"
import { signoutuser } from "../../../utils/firebase/firebase.utills";


const Navigation = () => {
  const {currentuser,setcurrentuser}=useContext(UserContext)
  //console.log(currentuser);

  const signouthandler=async()=>{
    await signoutuser();
    setcurrentuser(null);


  }
    return (
      <Fragment>
        <div className="navigation">
                <Link className="logo-container" to='/'>
                    {/* <CrownLogo  className='logo'/> */}
                        <div>HOME</div>
                    <ReactSVG src='../../../assets/crown1.svg'/>

                    </Link>
                <div className="nav-links-container">
                        <Link className="nav-link " to='/shop'>SHOP
                        </Link>
                        {
                          currentuser ? (
                            <span className="nav-link" onClick={signouthandler}>sign out</span>
                          ):( <Link className="nav-link " to='/auth'>SIGNIN
                          </Link>)
                        }
                      
                </div>
            </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;
  