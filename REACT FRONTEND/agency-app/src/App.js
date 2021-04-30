import React, { useState } from 'react'
import Rooter from "./Rooter"
import Header from "./components/Header"

export const UserContext = React.createContext()

export default function App() {
    const [user, setUser] = useState();
    const [history,setHistory] = useState();
    function logIn(email, password, history) {
        
        fetch("http://localhost:4000/users?email=" + email + "&password=" + password)
            .then(res => res.json()).then(data => {
                console.log(data);
                if (data.length) {
                    setUser(data[0]);
                    setHistory(history);
                    switch (data[0].level) {
                        case 0:
                            history.push("/adminDashboard")
                            break
                        case 1:
                            history.push("/teamLeadDashboard")
                            break
                        case 2:
                            history.push("/debdashboard")
                            break
                        case 3:
                            history.push("/clientDashboard")
                            break
                        default:
                            break
                    }
                    alert("login success");
                } else {
                    alert("Incorrect info");
                }
            });
    }

    function logOut(){
        setUser([]);
        history.push("/login")
    }
    return (
        <div>
            <UserContext.Provider value={{ user, logIn }}>

                <Header name={user?user.firstName:false} logOut={logOut}/>
                <Rooter />

            </UserContext.Provider>
        </div>
    )
}
