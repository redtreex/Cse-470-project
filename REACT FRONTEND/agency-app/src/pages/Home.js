import React from 'react'
import {useHistory} from "react-router"
import homeBanner from '../images/Home-banner.png'
import "../styles/Home.css"

export default function Home() {
    const history = useHistory();

    function loadLoginPage(){
      history.push("/login");
    }
    function loadSignUpPage(){
        history.push("/signUp");
    }
    return (
        <div className="container">
            <div className="sign-in-button-class">
                <button className="log-in" onClick={loadLoginPage}>Log In</button>
                <button className="sign-up" onClick={loadSignUpPage}>Sign Up</button>
            </div>
            
            <div className="banner-class">
               <img className="banner" src={homeBanner} alt="Home-Banner"></img>
            </div>
        </div>
    )
}
