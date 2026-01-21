import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <div>BharatNow</div>
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Business">Business</NavLink>
            <NavLink to="/Politics">Politics</NavLink>
            <NavLink to="/Technology">Technology</NavLink>
            <NavLink to="/Sports">Sports</NavLink>
        </div>
    </div>
    </div>
  )
}

export default Header
