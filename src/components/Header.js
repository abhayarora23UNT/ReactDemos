import { useState } from "react"
import appLogo from "../asset/appLogo.png"

const Header = () => {

    //let btnName="Login"
    const [btnName, setBtnName] = useState("Login")
    console.log("Header render")
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo" src={appLogo} alt="company-logo" >

                </img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("LogOut") : setBtnName("LogIn")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header