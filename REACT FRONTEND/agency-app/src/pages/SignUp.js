import React, { useState } from 'react'
import "../styles/SignUp.css"

export default function SignUp() {

    const [firstName, setfirstName] = useState()
    const [lastName, setlastName] = useState()
    const [address, setaddress] = useState()
    const [nid, setnid] = useState()
    const [birthDate, setbirthDate] = useState()
    const [contact, setcontact] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [userName, setuserName] = useState()

    function register(){
        let user = {
            firstName,lastName,address,nid,birthDate,contact,email,password,userName,level:3
        };
        console.log(user);
        fetch("http://localhost:4000/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(res => res.text()).then(data=> console.log(data));
    }


    return (
        <div className="sign-up-container">
            <div className="sign-up-input-div">
    
            <div>
            <label>First Name:</label>
            <input type="text" onChange={(e)=>setfirstName(e.target.value)}/>
            <br/><br/>
            </div>
           
           <div>
            <label>Last Name:</label>
            <input type="text" onChange={(e)=>setlastName(e.target.value)}/>
            <br/><br/>
           </div>

           <div>
            <label>Address:</label>
            <input type="text" onChange={(e)=>setaddress(e.target.value)}/>
            <br/><br/>
            </div>

            <div>
            <label>National ID Card No:</label>
            <input type="text" onChange={(e)=>setnid(e.target.value)}/>
            <br/><br/>
            </div>
            
            <div>
            <label>Birth Date:</label>
            <input type="date" onChange={(e)=>setbirthDate(e.target.value)}/>
            <br/><br/>
            </div>
            
            <div>
            <label>Contact No:</label>
            <input className="contact-no-input" type="number" onChange={(e)=>setcontact(e.target.value)}/>
            <br/><br/>
            </div>

            <div>
            <label>Email:</label>
            <input type="email" onChange={(e)=>setemail(e.target.value)}/>
            <br/><br/>
            </div>

            <div>
            <label>Password:</label>
            <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
            <br/><br/>
            </div>


            <div>
            <label>Set User Name:</label>
            <input type="text" onChange={(e)=>setuserName(e.target.value)}/>
            <br/><br/>
            </div>

            <button className="submit-button" onClick={register}>Submit</button>
            
            </div>    
        </div>
    )
}
