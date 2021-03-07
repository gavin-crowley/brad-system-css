import React from 'react'
import classnames from 'classnames';
import './LayoutContainer.scss';

export const LayoutContainer = (props) => {
  const { className, children, variant, align, ...other } = props;

  const componentClassName = classnames('l-container', className, {});
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  )
}


// comment 
// comment 

import React from 'react'

const LayoutContainer = () => {
  return (
    <div>

    </div>
  )
}

export default LayoutContainer
