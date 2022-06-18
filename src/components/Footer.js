import React from 'react'
import './Footer.css'
import Button from './Button'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer>
      <div className='footer-top'>
        <p className='footer-title'>
          Join Our Newsletter to receive adventurous Offers
        </p>
        <p className='footer-subtitle'>
          You Can Unsubscribe anytime when you Want!
        </p>
        <form>
          <input type='email' className='form-input' placeholder='Your Email' />
          <Button buttonType='outline' size='small'>
            Subscribe
          </Button>
        </form>
      </div>
      <div className='footer-middle'>
        <div className='footer-link-wrapper'>
          <article className='footer-links'>
            <h1>About Us</h1>
            <Link to='/'>How It Works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
          </article>
          <article className='footer-links'>
            <h1>Contact Us</h1>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </article>
          <article className='footer-links'>
            <h1>Videos</h1>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </article>
          <article className='footer-links'>
            <h1>Social Media</h1>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </article>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>travelR @ 2022</p>
        <div className='social-icon-container'>
          <i className='fa-brands fa-instagram-square icon'></i>
          <i className='fa-brands fa-facebook icon'></i>
          <i className='fa-brands fa-youtube icon'></i>
          <i className='fa-brands fa-twitter-square icon'></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer
