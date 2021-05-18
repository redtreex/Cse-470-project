const { emmitter, placeOrder, checkOrderStatus, revisionReq, contactTeamLead, makePayment } = require("../model/Client");

test('Testing Client Class', () => {
    emmitter.on("placeOrder", (result) => {
        expect(result).toBe("orderPlaced")
    })
    placeOrder(
        {
            "DateOfOrder": { "date": "2021-04-27T19:11:48.707Z" },
            "due": 8000,
            "DeliveryDate": "1/12/2021",
            "OrderedBy": "Towsif",
            "ProjectManager": "E1904008",
            "OrderStatus": 1,
            "typeOfOrder": 3,
            "orderId": "ord231",
            "desc": "Lorem ipsum dolor siiquip ex ea com"
        });

    emmitter.on("orderStatus",(result)=>{
        expect(result).toBe("developing");
    })
    checkOrderStatus("ord231");

    emmitter.on("revisionReq",(result)=>{
        expect(result).toBe("requested");
    })
    revisionReq("ord231","please revise this asap");

    emmitter.on("contactTeamLead",(result)=>{
        expect(result).toBe("019239232312");
    })
    contactTeamLead("ord890");

    emmitter.on("orderPayment",(result)=>{
        expect(result).toBe("paid");
    })
    makePayment("ord890");

})


//orderplace Done
//checkOrderStatus Done
//revision Req DOne
//contactTeamLead Done
//makePayment Done