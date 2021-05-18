const {submitProject, emmitter, cancelProject, contactClient} = require("../model/TeamLead");

test('TeamLead Class Test', () => {
    emmitter.on("orderCancelled",(result) =>{
        expect(result).toBe("cancelled");
    })
    cancelProject("ord231");

    emmitter.on("contactClient",(result) =>{
        expect(result).toBe("01537234543");
    });
    contactClient("ord890");

    emmitter.on("submitProject",(result) =>{
        expect(result).toBe("submitted");
    });
    submitProject("ord890");
 
})
