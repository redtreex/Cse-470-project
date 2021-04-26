function finance (req,res){

    let response = {
        employerList:[
            {E_ID:"e001",Name: "Sakibor rahman", Role:"Android Developer",MemberSince:"25/12/2015"},
            {E_ID:"e002",Name: "Sakiborr rahman", Role:"Android Developerr",MemberSince:"25/12/2015"},
            {E_ID:"e003",Name: "Sakiborrr rahman", Role:"Android Developerrr",MemberSince:"25/12/2015"},
            {E_ID:"e004",Name: "Sakiborrrr rahman", Role:"Android Developerrrr",MemberSince:"25/12/2015"},
            {E_ID:"e005",Name: "Sakiborrrrr rahman", Role:"Android Developerrrrr",MemberSince:"25/12/2015"},
        ],
        orderList:[{ orderId: "ord001", due: 0, typeOfOrder: "Android App" },
        { orderId: "ord002", due: 0, typeOfOrder: "Android App" },
        { orderId: "ord003", due: 600, typeOfOrder: "Android App" },
        { orderId: "ord004", due: 0, typeOfOrder: "Android App" },
        { orderId: "ord005", due: 0, typeOfOrder: "Android App" },
        ],
        status:[{
            totalBalance: 500000,
            ordersOnQueue: 5,
            monthlyExpense: 10000
        }]
    }

    res.json(response);
}

module.exports = finance;