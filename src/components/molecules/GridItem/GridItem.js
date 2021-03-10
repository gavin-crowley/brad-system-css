import React from 'react';
import classnames from 'classnames';
import './GridItem.scss';

export const GridItem = (props) => {
  const { className, children, span, ...other } = props;

  const componentClassName = classnames('l-grid__item', className, {
    'l-grid__item--span-2': span == 2
  })

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  )
}

