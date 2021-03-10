import React from 'react'
import './Section.scss';

export const Section = (props) => {
  return (
    <section className="c-section">
      <header className="c-section__header">
        <h2 className="c-section__title">{props.title}</h2>
        <p className="c-section__description">{props.description}</p>
      </header>
      <div className="c-section__body">
        {props.children}
      </div>
    </section>
  )
}



