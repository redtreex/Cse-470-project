import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch, Link, useRouteMatch } from 'react-router-dom'

import "../styles/AdminDashboard.css"
import adminImage from "../images/adminPage.jpg"



export default function AdminDashboard() {

    const [orderHistory, setOrderHistory] = useState([]);

    function FetchHistory() {
        console.log("fetching history");
            fetch("http://localhost:3030/api/clientHistory")
                .then(data => data.json())
                .then(orders => setOrderHistory(orders));
    }
    console.log(orderHistory);
    return (
        <div>
            <div className="NavTab">
                <Link className="tabs" to="/adminDashboard/orderManagement">ORDERS</Link>
                <Link className="tabs" to="/adminDashboard/employers">EMPLOYERS</Link>
                <Link className="tabs" to="/adminDashboard/financeManagement">FINANCE</Link>
            </div>

            <div className="adminBanner">
                <img src={adminImage} alt="admin-banner"></img>
            </div>

            <div>
                <h3> Order History</h3>
                <label>Enter Client ID: </label>
                <input type="text" />
                <button onClick={FetchHistory}>Check History</button>
                <ul>
                    {
                        orderHistory.map(order => <OrderLister key={order.orderId} orderId={order.orderId} typeOfOrder={order.typeOfOrder} status={order.OrderStatus} />)
                    }
                </ul>
            </div>
        </div>
    )
}

function OrderLister(props) {
    return (
        <li>
            <p>Order ID: {props.orderId}</p>
            <p>Type Of Order: {props.typeOfOrder ==0 ?"Mobile Application": props.typeOfOrder == 1?"Web Application":props.typeOfOrder==2?"Desktop Application":"Full System"}</p>
            <p>Status: {props.status == 0 ? "Delivered":"Under Developement"}</p>
        </li>
    )
}


