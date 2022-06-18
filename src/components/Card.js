import React from 'react'
import './Card.css'
import './CardItem'
import CardItem from './CardItem'
function Card() {
  return (
    <section className='card-section'>
      <h1 className='title'>Check Out These EPIC Destinations!</h1>
      <div className='card-container two-columns'>
        <CardItem
          label='Adventure'
          path='/services'
          src='/images/img-1.jpg'
          type='Explore The Amazing Vistas of this mountain'
        />
        <CardItem
          label='Adventure'
          path='/services'
          src='/images/img-2.jpg'
          type='Explore The Amazing Vistas of this mountain'
        />
      </div>
      <div className='three-columns'>
        <CardItem
          label='Adventure'
          path='/services'
          src='/images/img-3.jpg'
          type='Explore The Amazing Vistas of this mountain'
        />
        <CardItem
          label='Adventure'
          path='/services'
          src='/images/img-4.jpg'
          type='Explore The Amazing Vistas of this mountain'
        />
        <CardItem
          label='Adventure'
          path='/services'
          src='/images/img-5.jpg'
          type='Explore The Amazing Vistas of this mountain'
        />
      </div>
    </section>
  )
}

export default Card
