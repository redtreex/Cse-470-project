const { emmitter, orderConfirm, orderCancel, orderDelivery, checkBilling, addEmployee, remEmployee, editEmployee } = require("../model/Admin");

test('Testing Admin Class', () => {
    emmitter.on("dueAmount",(amount) =>{
        expect(amount).toBe(8000)
    });
    checkBilling("ord231");

    // emmitter.on("orderConfirm",(result) =>{
    //     expect(result).toBe("confirmed");
    // })
    // orderConfirm("ord789");

    // emmitter.on("orderCancel",(result) =>{
    //     expect(result).toBe("cancelled");
    // });
    // orderCancel("ord789")

    // emmitter.on("orderDelivered",(result) =>{
    //     expect(result).toBe("delivered");
    // });
    // orderCancel("ord890")

    // emmitter.on("addEmployee", (result) => {
    //     expect(result).toBe("employeeAdded");
    // });
    // addEmployee(
    //     {
    //         "FirstName": "Marufurur",
    //         "LastName": "Rahman",
    //         "Mail": "maruf69@gmail.com",
    //         "Address": "Chittagong",
    //         "NID": "NID",
    //         "BirthDate": "12/7/1999",
    //         "ContactNo": "017239232312",
    //         "Password": "1234",
    //         "Role": "Android Developer",
    //         "MemberSince": "27/4/2021",
    //         "E_ID": "E2104010",
    //         "TeamLead": "Bodda Ahmed",
    //         "level": 2,
    //         "salary": 15000
    //     }
    // );

    // emmitter.on("removeEmployee",(result) =>{
    //     expect(result).toBe("removed");
    // });
    // remEmployee("E2104010")

    // emmitter.on("editEmployee",(result) =>{
    //     expect(result).toBe("updated");
    // });
    // remEmployee("E2104002",{ $set: {name: "Mahfuzur"}})

})


//dueAmount done
//orderConfirm done
//orderCancel done
//orderDelivered done
//addEmployee done
//removeEmployee done
//editEmployee done
