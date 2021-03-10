import React from 'react'
import { Header } from '../../components/organisms/Header/Header'
import { Hero } from '../../components/molecules/Hero/Hero'
import { Section } from '../../components/organisms/Section/Section'
import { CardList } from '../../components/organisms/CardList/CardList'
import { Footer } from '../../components/organisms/Footer/Footer'

import heroImg from '../../images/fpo-1200x650.png'

export const Homepage = (props) => {
  return (
    <React.Fragment>
      <Header joke='u-margin-bottom-none' />

      <main role='main'>
        <Hero
          title={props.heroTitle}
          description={props.heroDescription}
          imgsrc={props.heroImgSrc}
          imgalt={props.heroImgAlt}
        />
        {/* <Hero heroimgsrc={heroImg} heroimgalt="Alt Text" title="Hero Title" description="This is the hero description">
            Hello Hero
</Hero> */}
        <Section
          title={props.section1Title}
          description={props.section1Description}
        >
          <CardList cardListItems={props.cardListItems} />
        </Section>
      </main>
      <Footer />
    </React.Fragment>
  )
}




Homepage.defaultProps = {
  heroTitle: 'Hero Title',
  heroDescription: 'this is the hero description',
  heroImgSrc: heroImg,
  heroImgAlt: 'Alt Text',
  section1Title: 'Section Title',
  section1Description: 'This is the section description',
  cardListItems: [
    {
      styleModifier: 'c-card--dark',
      title: 'Card 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]
};


