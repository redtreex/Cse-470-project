function orderQueue(req,res){
    let orderQueue = [       
        { orderId: "ord001", Due: 0, typeOfOrder: "Android App" },
        { orderId: "ord002", Due: 25000, typeOfOrder: "Android App" },
    ]
   res.json(orderQueue);
}

module.exports = orderQueue;