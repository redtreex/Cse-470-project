import React, { useEffect, useState } from 'react'

export default function Order() {

    const [orderList, setOrderList] = useState([]);
    
     useEffect(() => { 
       fetch("http://localhost:3030/api/orderList")
       .then(data=>data.json())
       .then(orders =>setOrderList(orders))
     }, [])
    
    return (    
        <div>
            Order pageeee
            
            <ul>
              {
                  orderList.map(order => <OrderLister key={order.orderId} orderId={order.orderId} typeOfOrder={order.typeOfOrder} due={order.due}/>)
              }
            </ul>
        </div>
    )
}

function OrderLister(props){
 return(
     <li> 
         <p>Order ID: {props.orderId}</p>
         <p>Type Of Order: {props.typeOfOrder ==0 ?"Mobile Application": props.typeOfOrder == 1?"Web Application":props.typeOfOrder==2?"Desktop Application":"Full System"}</p>
         <p>Payment Status: {props.due == 0 ? "Paid":`Due ${props.due} Bdt`}</p>
         <button>Confirm</button>
         <button>Cancel</button>
         <button>Deliver</button>
     </li>
 )
}
