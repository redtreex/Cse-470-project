import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import banner from '../images/clientPageBanner.jpg'
import "../styles/Client.css"

export default function Client() {

    const [orderHistory, setOrderHistory] = useState([])

    useEffect(() => {
        fetch("http://localhost:3030/api/orderListHistory")
            .then(data => data.json())
            .then(order => setOrderHistory(order));
    }, [])

    const [ordersQueue, setordersQueue] = useState([])

    useEffect(() => {
        fetch("http://localhost:3030/api/orderQueue")
            .then(data => data.json())
            .then(order => setordersQueue(order))
    }, [])

    return (
        <div>
            <div className="clientPageBanner">
                <img src={banner} alt="client-page-banner" />
            </div>

            <div className="ClientButtons">
                <Link className="tabs" to="/clientDashboard/newOrder">Place New Order</Link>
                <button>Contact</button>
                <Link className="tabs" to="/clientDashboard/orderRevision">Order Revision</Link>
            </div>

            <div className="ClientDashboard">
                <div className="CurrentOrderClient">
                    <h3>Current Orders</h3>
                    <ul>
                        {
                            ordersQueue.map(orders => (<OrderQueue key={orders.orderId} orderId={orders.orderId} Due={orders.due} typeOfOrder={orders.typeOfOrder} status={orders.OrderStatus} />))
                        }
                    </ul>
                </div>

                <div className="OrderHistoryClient">
                    <h3>Previous Orders</h3>
                    <ul>
                        {
                            orderHistory.map(order => <OrderLister key={order.orderId} orderId={order.orderId} typeOfOrder={order.typeOfOrder} status={order.OrderStatus} />)
                        }
                    </ul>
                </div>
            </div>



        </div>
    )
}

function OrderLister(props) {
    return (
        <li>
            <p>Order ID: {props.orderId}</p>
            <p>Type Of Order: {props.typeOfOrder ==0 ?"Mobile Application": props.typeOfOrder == 1?"Web Application":props.typeOfOrder==2?"Desktop Application":"Full System"}</p>
            <p>Status: {props.status==0?"Delivered":"Under Developement"}</p>
        </li>
    )
}

function OrderQueue(props) {
    return (
        <li>
            <p>Order ID: {props.orderId}</p>
            <p>Payment : {props.Due === 0 ? "Paid" : "Due " + props.Due + " BDT"}</p>
            <p>Type Of Order: {props.typeOfOrder ==0 ?"Mobile Application": props.typeOfOrder == 1?"Web Application":props.typeOfOrder==2?"Desktop Application":"Full System"}</p>
            <p>Status: {props.status==0?"Delivered":"Under Developement"}</p>
        </li>
    )
}