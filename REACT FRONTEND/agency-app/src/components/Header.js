import React, { useState } from 'react'

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    return (
        <div className="header">
            <h1 className="header-text">Red IT Agency</h1>
            {isLoggedIn && <button className="logOut">Log out</button>}           
        </div>
    )
}
