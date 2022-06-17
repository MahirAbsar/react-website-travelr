import React from 'react'
import './Hero.css'
import Button from './Button'
function Hero() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <div className='hero-banner'>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='btn-container'>
          <Button size='medium' buttonType='outlined'>
            Explore
          </Button>
          <Button>
            Watch Trailer
            <i className='fa-solid fa-play'></i>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
