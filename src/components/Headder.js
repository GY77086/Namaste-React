import { LOGO_URL } from "../utils/constants.js";
const Header = () =>
{
    return (
        <div className="header">
            <div>
                <img className="logo-pic" src={LOGO_URL} alt="logo-pic"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login-button">Login</button>
                </ul>
            </div>
        </div>
        
    );
}  

export default Header;