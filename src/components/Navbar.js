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
      <nav class='navbar '>
        <div className='nav-center section'>
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
            <li>
              <Link to=''>Home</Link>
            </li>
            <li>
              <Link to=''>Offers</Link>
            </li>
            <li>
              <Link to=''>Packages</Link>
            </li>
            <li>
              <Link to=''>About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
