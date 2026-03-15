import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
const Header = () =>
{
    const [loginButton, setLoginButton] = useState ("Login");
    console.log("Header rendered");
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-pic" src={LOGO_URL} alt="logo-pic"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
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