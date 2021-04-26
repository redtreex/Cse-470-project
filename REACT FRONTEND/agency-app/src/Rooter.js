import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import AdminDashboard from "./pages/AdminDashboard"
import TeamLeaderDashBoard from "./pages/TeamLeaderDashBoard"
import DebdashBoard from "./pages/DebdashBoard"
import ClientDashboard from "./pages/Client"

import Order from "./components/Order"
import Finance from "./components/Finance"
import Employers from "./components/Employers"
import newEmployer from "./components/newEmployer"
import newOrder from "./components/newOrder"
import orderRevision from "./components/orderRevision"

export default function Rooter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/signUp" component={SignUp} exact />

                <Route path="/adminDashboard" component={AdminDashboard} exact />
                <Route path="/teamLeadDashboard" component={TeamLeaderDashBoard} exact />
                <Route path="/debdashBoard" component={DebdashBoard} exact />
                <Route path="/clientDashboard" component={ClientDashboard} exact />
                
                <Route path="/adminDashboard/orderManagement" component={Order} exact />
                <Route path="/adminDashboard/financeManagement" component={Finance} exact />
                <Route path="/adminDashboard/employers" component={Employers} exact />                              
                <Route path="/adminDashboard/employers/newEmployer" component={newEmployer} exact />                              
                <Route path="/clientDashboard/newOrder" component={newOrder} exact />                              
                <Route path="/clientDashboard/orderRevision" component={orderRevision} exact />                              

            </Switch>
        </BrowserRouter>
    )
}
