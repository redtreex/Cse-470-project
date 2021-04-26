import React from 'react'
import "../styles/SignUp.css"

export default function SignUp() {
    return (
        <div className="sign-up-container">
            <div className="sign-up-input-div">
    
            <div>
            <label>First Name:</label>
            <input type="text"/>
            <br/><br/>
            </div>
           
           <div>
            <label>Last Name:</label>
            <input type="text"/>
            <br/><br/>
           </div>

           <div>
            <label>Address:</label>
            <input type="text"/>
            <br/><br/>
            </div>

            <div>
            <label>National ID Card No:</label>
            <input type="text"/>
            <br/><br/>
            </div>
            
            <div>
            <label>Birth Date:</label>
            <input type="date"/>
            <br/><br/>
            </div>
            
            <div>
            <label>Contact No:</label>
            <input className="contact-no-input" type="number"/>
            <br/><br/>
            </div>

            <div>
            <label>Email:</label>
            <input type="email"/>
            <br/><br/>
            </div>

            <div>
            <label>Password:</label>
            <input type="password"/>
            <br/><br/>
            </div>


            <div>
            <label>Set User Name:</label>
            <input type="text"/>
            <br/><br/>
            </div>

            <button className="submit-button">Submit</button>
            
            </div>    
        </div>
    )
}
