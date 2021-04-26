function orderList(req, res) {
    let orders = [{ orderId: "ord001", due: 0, typeOfOrder: "Android App" },
    { orderId: "ord002", due: 0, typeOfOrder: "Android App" },
    { orderId: "ord003", due: 600, typeOfOrder: "Android App" },
    { orderId: "ord004", due: 0, typeOfOrder: "Android App" },
    { orderId: "ord005", due: 0, typeOfOrder: "Android App" },
    ]
    res.json(orders);
}

module.exports = orderList;