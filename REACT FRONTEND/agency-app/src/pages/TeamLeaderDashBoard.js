import React, { useEffect, useState } from 'react'

export default function TeamLeader() {

    const [currentOrder, setcurrentOrder] = useState({
        orderId: "ord001",
        billStatus: true,
        typeOfOrder: "Android App for School",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.`,
        deliveryDate: "12/6/2021"
    });

    const [memberMessages, setmemberMessages] = useState([])

    useEffect(() => {
        fetch("http://localhost:3030/api/groupChat")
        .then(data => data.json())
        .then(messages => setmemberMessages(messages))
    }, [])
    return (
        <div>
            <div>
                <h2>--Current Order--</h2>
                <h4>Order Title: {currentOrder.typeOfOrder}</h4>
                <h5>Order ID: {currentOrder.orderId} <br /> Order Bill Status: {currentOrder.billStatus ? "Paid" : "Due"}</h5>
                <p><span>Description: </span>{currentOrder.description}</p>
                <h4>Delivery Date: {currentOrder.deliveryDate}</h4>
            </div>

            <div>
                <h2>Messages from client DIV</h2>
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
                    <input type="text"/>
                    <button>Send</button>
                </div>

            </div>
           <br/>
            <div>
                <button>Drop Project</button>
                <button>Deliver Project</button>
                <button>Contact Client</button>
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