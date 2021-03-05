import React from 'react'
import './Hero.css';

export const Hero = (props) => {
  return (
    <div className="c-hero" {...props}>
      <img className="c-hero__img" src={props.heroimgsrc} alt={props.heroimgalt} />
      <div className="c-hero__body">
        <h2 className="c-hero__title">{props.title}</h2>
        <p className="c-hero__description">{props.description}</p>
      </div>
    </div>
  )
}








