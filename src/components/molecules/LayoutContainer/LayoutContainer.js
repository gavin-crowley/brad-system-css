import React from 'react'
import classnames from 'classnames';
import './LayoutContainer.css';

export const LayoutContainer = (props) => {
  const { className, children, variant, align, ...other } = props;

  const componentClassName = classnames('l-container', className, {});
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  )
}

