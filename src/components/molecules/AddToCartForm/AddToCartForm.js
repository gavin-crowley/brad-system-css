import React from 'react';
import classnames from 'classnames';
import { TextField } from '../../molecules/TextField/TextField'
import { Button } from '../../atoms/Button/Button'
import './AddToCartForm.scss';

export const AddToCartForm = (props) => {

  const { className, children, ...other } = props;

  const componentClassName = classnames('c-add-to-cart-form', className, {});
  return (
    <div className={componentClassName} {...other}>
      <TextField label='Quantity' type='number' />
      <Button text='Add to Cart' className='c-btn--large' />
    </div>
  )
}



