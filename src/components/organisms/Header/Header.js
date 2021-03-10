import React from 'react'
import classnames from 'classnames';
import { Logo } from '../../molecules/Logo/Logo';
import { PrimaryNav } from '../../molecules/PrimaryNav/PrimaryNav';
import { InlineForm } from '../../molecules/InlineForm/InlineForm';
import { LayoutContainer } from '../../molecules/LayoutContainer/LayoutContainer';
import './Header.scss';

export const Header = (props) => {
  const { className } = props;
  const componentClassName = classnames('c-header', props.joke, {});

  return (
    <header className={componentClassName} {...props}>
      <LayoutContainer className='c-header__inner'>
        <Logo href='/' />

        <PrimaryNav
          listItems={[
            {
              "href": "#",
              "text": "Nav Item 1"
            },
            {
              "href": "#",
              "text": "Nav Item 2"
            },
            {
              "href": "#",
              "text": "Nav Item 3"
            }
          ]}
        />

        <InlineForm
          method='post'
          action='#'
          placeholder='Search the site'
          cta='Search'
          id='search-form'
          label='Search the site'
        />
      </LayoutContainer>
    </header>
  )
}



