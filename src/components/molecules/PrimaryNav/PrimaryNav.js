import React from 'react'
import './PrimaryNav.css'

export const PrimaryNav = (props) => {
  return (
    <nav className="c-primary-nav { this.props.styleModifier }">
      <ul className="c-primary-nav__list">
        {props.listItems.map(function (listItem, index) {
          return <li className="c-primary-nav__item" key={`c-primary-nav__item-${index}`}>
            <a href={listItem.href}>
              {listItem.text}
            </a>
          </li>
        })}
      </ul>
    </nav>
  )
}



