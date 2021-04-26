import React, { useEffect, useState } from 'react'

export default function Finance() {

    const [orderList, setOrderList] = useState([])

    const [employerList, setEmployerList] = useState([])

    const [status, setstatus] = useState([])
    
     useEffect(() => {
         fetch("http://localhost:3030/api/financeStatus")
         .then(data=> data.json())
         .then(infos =>{
             setstatus(infos.status[0]);
             setEmployerList(infos.employerList);
             setOrderList(infos.orderList);
         })},[])

    return (
        <div>
            <div className="finance-status">
                <h2>Financial Status</h2>
                <h3>Total Balance: <span>{status.totalBalance}</span></h3>
                <h3>Orders On Queue: <span>{status.ordersOnQueue}</span></h3>
                <h3>Monthly Expense: <span>{status.monthlyExpense}</span></h3>
            </div>
            <div>
            <h1>Orders</h1>
            <ul>
              {
                  orderList.map(order => <OrderLister key={order.orderId} orderId={order.orderId} typeOfOrder={order.typeOfOrder} due={order.due}/>)
              }
            </ul>                
            </div>
            <div>
                <h1>Employers</h1>
                <ul>
               {
                   employerList.map(employer =>(<EmployerLister key={employer.E_ID} E_ID={employer.E_ID} Name={employer.Name}/>))
               }
            </ul>
            </div>
        </div>
    )
}


function OrderLister(props){
    return(
        <li> 
            <p>Order ID: {props.orderId}</p>
            <p>Type Of Order: {props.typeOfOrder}</p>
            <p>Payment Status: {props.due == 0 ? "Paid":`Due ${props.due} Bdt`}</p>
        </li>
    )
 }

   function EmployerLister(props){
    return(
        <li> 
            <p>Employer ID: {props.E_ID}</p>
            <p>Name: {props.Name}</p>
            <button>Pay Salary</button>
        </li>
    )
   }