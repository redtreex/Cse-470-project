import React, { useEffect, useState } from 'react'

export default function TeamLeader() {

    const [currentOrder, setcurrentOrder] = useState([]);

    const [memberMessages, setmemberMessages] = useState([])

    useEffect(() => {
        fetch("http://localhost:3030/api/groupChat")
            .then(data => data.json())
            .then(messages => setmemberMessages(messages))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3030/api/devCurrentOrder")
            .then(data => data.json())
            .then(order => setcurrentOrder(order))
    }, [])

    return (
        <div>
            <div>
                <h2>Current Order</h2>
                <h4>Order Type: {currentOrder.typeOfOrder === 0 ? "Mobile Application" : currentOrder.typeOfOrder === 1 ? "Web Application" : currentOrder.typeOfOrder === 2 ? "Desktop Application" : "Full System"}</h4>
                <h5>Order ID: {currentOrder.orderId} <br /> Order Bill Status: {currentOrder.due === 0 ? "Paid" : "Due" + currentOrder.due}</h5>
                <p><span>Description: </span>{currentOrder.desc}</p>
                <h4>Delivery Date: {currentOrder.DeliveryDate}</h4>
            </div>

            <div>

                <div>
                    <h3>Group Chat</h3>
                    <ul>
                        {
                            memberMessages.map(message => (<MessageList key={message.E_ID} Name={message.Name} Message={message.message} Date={message.date} />))
                        }
                    </ul>
                </div>

                <div>
                    <input type="text" />
                    <button>Send</button>
                </div>

            </div>
            <br />
            <div>
                <button>Drop Project</button>
                <button>Deliver To Admin</button>
            </div>

        </div>
    )
}

function MessageList(messages) {
    return (
        <li>
            <h5>{messages.Name}</h5>
            <p>Message: {messages.Message}</p>
            <p>{messages.Date}</p>
        </li>
    )
}