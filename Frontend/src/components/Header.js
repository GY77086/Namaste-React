import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import {Link} from "react-router-dom";
const Header = () =>
{
    const [loginButton, setLoginButton] = useState ("Login");
    console.log("Header rendered");
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
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/AboutUs"> About us </Link></li>
                    <li> <Link to="ContactUs"> Contact us </Link></li>
                    <li><Link to="Cart"> Cart </Link></li>
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