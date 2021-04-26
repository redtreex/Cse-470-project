function orderListHistory(req,res){
    let orders = [
        { orderId: "ord001", typeOfOrder: "Android App", status: "Delivered" },
        { orderId: "ord002", typeOfOrder: "School Website", status: "Delivered" },
        { orderId: "ord003", typeOfOrder: "IOS App", status: "Delivered" },
        { orderId: "ord004", typeOfOrder: "Nut Nut System", status: "Delivered" },
        { orderId: "ord005", typeOfOrder: "Android App", status: "Delivered" },    
    ]
    res.json(orders)
}

module.exports = orderListHistory;