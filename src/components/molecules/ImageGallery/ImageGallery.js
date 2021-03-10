import React from 'react';
import classnames from 'classnames';
import './ImageGallery.scss';

export const ImageGallery = (props) => {

  const { className, children, ...other } = props;

  const componentClassName = classnames('c-image-gallery', className, {});
  return (
    <div className={componentClassName} {...other}>
      <img
        src='https://via.placeholder.com/600x400'
        alt={props.alt}
        className='c-image-gallery__main-img'
      />
      <ul className='c-image-gallery__thumb-list'>
        <li className='c-image-gallery__thumb-item'>
          <a href='' className='c-image-gallery__thumb-link'>
            <img
              src='https://via.placeholder.com/200x100'
              alt=''
              className='c-image-gallery__thumb-img'
            />
          </a>
        </li>
        <li className='c-image-gallery__thumb-item'>
          <a href='' className='c-image-gallery__thumb-link'>
            <img
              src='https://via.placeholder.com/200x100'
              alt=''
              className='c-image-gallery__thumb-img'
            />
          </a>
        </li>
        <li className='c-image-gallery__thumb-item'>
          <a href='' className='c-image-gallery__thumb-link'>
            <img
              src='https://via.placeholder.com/200x100'
              alt=''
              className='c-image-gallery__thumb-img'
            />
          </a>
        </li>
      </ul>
    </div>
  )
}






