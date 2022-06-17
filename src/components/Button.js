import React from 'react'
import './Button.css'
function Button({ buttonType, size, type, children }) {
  let classes = buttonType ? buttonType : 'contained'
  classes += ` btn ${size ? size : 'medium'}`
  return (
    <button type={`${type || 'button'}`} className={classes}>
      {children}
    </button>
  )
}

export default Button
