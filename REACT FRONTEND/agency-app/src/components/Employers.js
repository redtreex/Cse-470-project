import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

export default function Employers() {
    const [employerList, setEmployerList] = useState([])

    useEffect(() => { 
        fetch("http://localhost:3030/api/employerList")
        .then(data=>data.json())
        .then(employers =>setEmployerList(employers))
      }, [])

    return (
        <div>
            <Link className="tabs" to="/adminDashboard/employers/newEmployer">Add New Employers</Link>
            <ul>
               {
                   employerList.map(employer =>(<EmployerLister key={employer.E_ID} E_ID={employer.E_ID} Name={employer.Name} Role={employer.Role} MemberSince={employer.MemberSince}/>))
               }
            </ul>
        </div>
    )
}

function EmployerLister(props){
    return(
        <li> 
            <p>Employer ID: {props.E_ID}</p>
            <p>Name: {props.Name}</p>
            <p>Role: {props.Role}</p>
            <p>Member Since: {props.MemberSince}</p>
            <button>Remove</button>
            <button>Edit</button>
        </li>
    )
}
