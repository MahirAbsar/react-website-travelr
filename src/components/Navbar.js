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
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link
              to='/'
              onClick={() => setIsLinkOpen(false)}
              className='nav-logo'
            >
              TRAVEL<span>R</span>
              <i className='fa-solid fa-splotch'></i>
            </Link>
            {isLinkOpen ? (
              <button className='nav-close' onClick={handleClick}>
                <i className='fa-solid fa-xmark'></i>
              </button>
            ) : (
              <button className='nav-toggle' onClick={handleClick}>
                <i className='fa-solid fa-bars'></i>
              </button>
            )}
          </div>
          <ul className={`links ${isLinkOpen ? 'show-links' : ''}`}>
            <li className='nav-item'>
              <Link
                to='/'
                onClick={() => setIsLinkOpen(false)}
                className='nav-item-link'
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                onClick={() => setIsLinkOpen(false)}
                className='nav-item-link'
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                onClick={() => setIsLinkOpen(false)}
                className='nav-item-link'
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/signup'
                onClick={() => setIsLinkOpen(false)}
                className='nav-item-link'
              >
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
