import React from "react"
import navlogo from "./img/navlogo.svg"
import "../Navbar/style.css"



export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={navlogo} alt="logoImg" className="logo-image" />
            </div>
            <div className="text">
             <h1 className="nav-title">my travel journal.</h1>
            </div>
        </nav>
    )
}