import React from 'react'
import './CardItem.css'
import '../App.css'
import { Link } from 'react-router-dom'
function CardItem({ src, type, label, path }) {
  return (
    <Link to={path}>
      <article className='single-card'>
        <div className='img-container'>
          <img src={src} alt={type} />
          <p className='label'>{label}</p>
        </div>
        <p className='card-info'>{type}</p>
      </article>
    </Link>
  )
}

export default CardItem
