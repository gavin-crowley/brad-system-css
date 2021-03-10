import React from 'react'
import { Icon } from '../Icon/Icon'
import './IconGrid.scss'

export const IconGrid = (props) => {
  return (
    <ul className='icon-grid'>
      {props.listItems.map(function (item, index) {
        return (
          <li className='icon-grid__item' key={`icon-grid-item-${index}`}>
            <Icon iconname={item.iconname} />
            <span className='icon-grid__text'>{item.iconname}</span>
          </li>
        )
      })}
    </ul>
  )
}

IconGrid.defaultProps = {
  listItems: [
    {
      iconname: 'minus'
    },
    {
      iconname: 'plus'
    },
    {
      iconname: 'search'
    },
    {
      iconname: 'shopping-cart'
    },
    {
      iconname: 'triangle-down'
    },
    {
      iconname: 'triangle-left'
    },
    {
      iconname: 'triangle-right'
    },
    {
      iconname: 'triangle-up'
    }
  ]
}
