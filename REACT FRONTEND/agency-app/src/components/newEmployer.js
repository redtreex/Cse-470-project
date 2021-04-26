import React from 'react'

export default function newEmployer() {
    return (
        <div>
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
            <label>Role:</label>
            <input type="text"/>
            <br/><br/>
            </div>

            <div>
            <label>Team Leader ID: </label>
            <input type="text"/>
            <br/><br/>
            </div>

            <div>
                <button>Add</button>
            </div>
        </div>
    )
}
