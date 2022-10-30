import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
        <ul>
            <Link className='link' to="/">Agent Profile</Link>
            <Link className='link' to="/student-data">Student Data</Link>
            <Link className='link' to="/status">Status</Link>
        </ul>
    </div>
  )
}
