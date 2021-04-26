function employerList(req,res){
    let list = [
        {E_ID:"e001",Name: "Sakibor rahman", Role:"Android Developer",MemberSince:"25/12/2015"},
        {E_ID:"e002",Name: "Sakiborr rahman", Role:"Android Developerr",MemberSince:"25/12/2015"},
        {E_ID:"e003",Name: "Sakiborrr rahman", Role:"Android Developerrr",MemberSince:"25/12/2015"},
        {E_ID:"e004",Name: "Sakiborrrr rahman", Role:"Android Developerrrr",MemberSince:"25/12/2015"},
        {E_ID:"e005",Name: "Sakiborrrrr rahman", Role:"Android Developerrrrr",MemberSince:"25/12/2015"},
    ]

    res.json(list);
}

module.exports = employerList;