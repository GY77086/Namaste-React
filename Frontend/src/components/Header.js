import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Header = () =>
{
    const [loginButton, setLoginButton] = useState ("Login");
    console.log("Header rendered");
    const internetStatus = useOnlineStatus ();
    // if no dependency array is provided, useEffect will run after every render of the component.
    // if an empty dependency array is provided, useEffect will run only once after the initial render of the component.
    // if a dependency array is provided with some state variables, useEffect will run after the initial render and after every update of the specified state variables.
    return (
            <div className="header">
                <div className="logo">
                    <img className="logo-pic" src={LOGO_URL} alt="logo-pic"></img>
                </div>
                <div className="nav-items">
                    
                    <ul>
                        <li> Net: {internetStatus ? "🟢" : "🔴"}</li>
                        <li className="li-item"><Link to="/"> Home🏠 </Link></li>
                        <li className="li-item"><Link to="/AboutUs"> About us👨🏻 </Link></li>
                        <li className="li-item"><Link to="/ContactUs"> Contact us📞</Link></li>
                        <li className="li-item"><Link to="/Grocery"> Grocery 🛍️</Link></li>
                        <li className="li-item"><Link to="Cart"> Cart🛒 </Link></li>
                        <button className="login-button" onClick= 
                        {
                            () => 
                            {
                                loginButton === "Login" ? setLoginButton ("Logout") : setLoginButton ("Login");
                            }
                        }>
                        {loginButton}
                        </button>
                    </ul>
                </div>
            </div>
        );
}  

export default Header;