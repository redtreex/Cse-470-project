import React, { useContext, useState } from 'react'

export default function Header({name,logOut}) {
    return (
        <div className="header">
            <h1 className="header-text">Red IT Agency</h1>
            {name && <button className="logOut" onClick={logOut}>{name}, Log out</button>}           
        </div>
    )
}
