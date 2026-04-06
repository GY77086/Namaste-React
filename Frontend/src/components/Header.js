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
        <div className="header justify-between flex bg-[rgb(164,181,237)] w-auto h-[100px] shadow-lg mb-3 ">
            <div className="logo">
                <img className="logo-pic w-[100px] h-[100px] rounded-md" src={LOGO_URL} alt="logo-pic"></img>
            </div>
            <div className="nav-items flex items-center ">
                <ul className="nav-list flex ">
                    <li className="px-3 py-1"> Net: {internetStatus ? "🟢" : "🔴"}</li>
                    <li className="px-3 py-1 hover:text-blue-800"><Link to="/"> Home🏠 </Link></li>
                    <li className="px-3 py-1 hover:text-blue-800"><Link to="/AboutUs"> About us👨🏻 </Link></li>
                    <li className="px-3 py-1 hover:text-blue-800"><Link to="/ContactUs"> Contact us📞 </Link></li>
                    <li className="px-3 py-1 hover:text-blue-800"><Link to="/Grocery"> Grocery🛍️ </Link></li>
                    <li className="px-3 py-1 hover:text-blue-800"><Link to="Cart"> Cart🛒 </Link></li>
                </ul>
                <button className="login-button hover:text-white hover:bg-[rgb(230,167,100)] bg-orange-200 rounded-2xl px-3 py-1 mx-2" onClick= 
                    {
                        () => 
                        {
                            loginButton === "Login" ? setLoginButton ("Logout") : setLoginButton ("Login");
                        }
                    }>
                    {loginButton}
                </button>
            </div>
        </div>
    );
}  

export default Header;