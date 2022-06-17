import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [isLinkOpen, setIsLinkOpen] = useState(false)
  const handleClick = () => {
    setIsLinkOpen(!isLinkOpen)
  }
  return (
    <>
      <nav class='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/' className='nav-logo'>
              TRAVEL<span>R</span>
              <i class='fa-solid fa-splotch'></i>
            </Link>
            {isLinkOpen ? (
              <button class='nav-close' onClick={handleClick}>
                <i class='fa-solid fa-xmark'></i>
              </button>
            ) : (
              <button class='nav-toggle' onClick={handleClick}>
                <i class='fa-solid fa-bars'></i>
              </button>
            )}
          </div>
          <ul className={`links ${isLinkOpen ? 'show-links' : ''}`}>
            <li className='nav-item'>
              <Link to='' className='nav-item-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='' className='nav-item-link'>
                Offers
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='' className='nav-item-link'>
                Packages
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='' className='nav-item-link'>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='' className='nav-item-link'>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
