import React,{ useContext, useState } from 'react'
import "../styles/Login.css"
import loginBanner from "../images/login-page-banner.png"
import {UserContext} from "../App"
import { useHistory } from 'react-router-dom'
export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {logIn} = useContext(UserContext);


    function signIn(){
        logIn(email,password,history);
    }

    return (
        <div className="Login-container">
            <div className="input-div">
            <label>Email:</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
            <br/> <br/>
            <label>Password:</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <br/> <br/>
            <button onClick={signIn}>Log-In</button>           
            </div>
            <div className="loginBanner">
               <img src={loginBanner} alt="login-page-banner"/>
            </div>
        </div>
        
    )
}
