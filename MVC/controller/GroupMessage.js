function teamGroupChat(req,res){
      function getDate(){
        let d = new Date();
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return (`${da}/${mo}/${ye}`);
      }
    const messages = [
        {E_ID: "e001",Name: "Itadori Yuji",message:" Sukuna finger where?",date: getDate()},
        {E_ID: "e002",Name: "Mahito",message:" Sukuna finger Here",date: getDate()},
        {E_ID: "e003",Name: "Fushiguro",message:"BAAAKAAAAAA",date: getDate()},
        {E_ID: "e004",Name: "Gojo Satoru",message:"Daijobouu",date: getDate()},
    ]
    res.json(messages);   
}

module.exports = teamGroupChat;