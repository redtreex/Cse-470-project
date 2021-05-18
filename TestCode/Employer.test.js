const {emmitter, viewOrder, sendStatus } = require('../model/Employer');

test('Employer class test', () => {
    emmitter.on("viewOrder",(result) =>{
          expect(result).toBe("[Object object]")
    })
    viewOrder("ord231")

    emmitter.on("sendStatus",(result) =>{
          expect(result).toBe(1)
    })
    sendStatus("ord231");
})
