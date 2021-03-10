import React from 'react'
import classnames from 'classnames'
import './Grid.scss'

export const Grid = (props) => {

  const {
    className,
    variant,
    children,
    gap,
    colGap,
    rowGap,
    ...other
  } = props;

  const componentClassName = classnames('l-grid', className, {
    'l-grid--2up': variant == '2up',
    'l-grid--side-by-side': variant == 'side-by-side',
    'l-grid--1-to-3up': variant == '1-to-3up',
    'l-grid--3up': variant == '3up',
    'l-grid--4up': variant == '4up',
    'l-grid--spacing-none': gap == 'none',
    'l-grid--spacing-small': gap == 'small',
    'l-grid--spacing-large': gap == 'large',
    'l-grid--spacing-xl': gap == 'xl',
    'l-grid--row-spacing-none': rowGap == 'none',
    'l-grid--row-spacing-small': rowGap == 'small',
    'l-grid--row-spacing-large': rowGap == 'large',
    'l-grid--row-spacing-xl': rowGap == 'xl',
    'l-grid--column-spacing-none': colGap == 'none',
    'l-grid--column-spacing-small': colGap == 'small',
    'l-grid--column-spacing-large': colGap == 'large',
    'l-grid--column-spacing-xl': colGap == 'xl'
  })

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  )
}

