import React from 'react'
import navLogo from "/src/images/nav-logo.png"

export default function Navbar() {
    return(
        <nav className="nav">
            <div className="nav-items">
                <img src={navLogo} alt="logo" />
                <p className="nav-text">my travel journal.</p>
            </div>
        </nav>
    )
}