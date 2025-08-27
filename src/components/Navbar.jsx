import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='nav_bar'>
        <Link to={'/'} className='left'></Link>
        <div className='right'>
            <Link to={'/meal'} >Meal</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/courses'} >Courses</Link>
            <Link to={'/team'} >Team</Link>
            <Link to={'/contact'} >Contact</Link>
            <Link></Link>
        </div>
    </div>
  )
}

