import React from 'react'
import './Logo.css'

export const Logo = (props) => {
  return (
    <a href={props.href} className="c-logo" rel="home" {...props}>
      <img className="c-logo__img" src={props.src} alt={props.alt} />
    </a>
  )
}


