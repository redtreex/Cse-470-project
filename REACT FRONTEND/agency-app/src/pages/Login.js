import React from 'react'
import "../styles/Login.css"
import loginBanner from "../images/login-page-banner.png"
export default function Login() {
    return (
        <div className="Login-container">
            <div className="input-div">
            <label>Email:</label>
            <input type="text"/>
            <br/> <br/>
            <label>Password:</label>
            <input type="password"/>
            <br/> <br/>
            <button>Log-In</button>           
            </div>
            <div className="loginBanner">
               <img src={loginBanner} alt="login-page-banner"/>
            </div>
        </div>
        
    )
}
