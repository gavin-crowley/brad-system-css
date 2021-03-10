import React from 'react'
import './Icon.scss';

import icons from './icons.svg';

export const Icon = (props) => {

  return (
    <svg className={`c-icon ${props.iconclass}`}>
      <use xlinkHref={`${icons}#${props.iconname}`} />
    </svg>
  )
}

Icon.defaultProps = {
  iconclass: 'c-icon',
  iconname: 'search'
};





