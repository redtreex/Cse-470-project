function clientHistory(req, res) {
    let history = [
        { orderId: "ord001", typeOfOrder: "Android App", status: "Delivered" },
        { orderId: "ord002", typeOfOrder: "Nut Nut App", status: "Delivered" },
        { orderId: "ord003", typeOfOrder: "Coco choccy App", status: "Delivered" },
        { orderId: "ord004", typeOfOrder: "Android App", status: "Delivered" },
        { orderId: "ord005", typeOfOrder: "Android App", status: "Delivered" },
    ]


    res.json(history);
}

module.exports = clientHistory;