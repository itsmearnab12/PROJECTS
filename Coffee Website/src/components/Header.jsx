import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="Navbar">
                <div className="Navbarleft">Coffee</div>
                <div className="Navbarright">
                    <NavLink className="Link" to="/">Home</NavLink>
                    <NavLink className="Link" to="/Menu">Menu</NavLink>
                    <NavLink className="Link" to="/Story">Story</NavLink>
                    <NavLink className="Link" to="/Contact">Contact</NavLink>
                </div>
            </div>
        </>
    )
}

export default Header
