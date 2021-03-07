import React from 'react'

// Atoms 
import { TextPassage } from './components/atoms/TextPassage/TextPassage'
import { Button } from './components/atoms/Button/Button'

// Molecules
import { Card } from './components/molecules/Card/Card'
import { FooterNav } from './components/molecules/FooterNav/FooterNav'
import { Hero } from './components/molecules/Hero/Hero'
import { InlineForm } from './components/molecules/InlineForm/InlineForm'
import { LayoutContainer } from './components/molecules/LayoutContainer/LayoutContainer'
import { Logo } from './components/molecules/Logo/Logo'
import { PrimaryNav } from './components/molecules/PrimaryNav/PrimaryNav'

// Organisms 
import { CardList } from './components/organisms/CardList/CardList'
import { Footer } from './components/organisms/Footer/Footer'
import { Header } from './components/organisms/Header/Header'
import { Section } from './components/organisms/Section/Section'

//Images
import logoimg from './images/fpo-120x60.png'
import heroImg from './images/fpo-1200x650.png'



const ComponentsTest = () => {
    return (
        <>
            <TextPassage>
                <p>A text passage contains arbitrary text that might come from a CMS. It should live within a container that caps the line length of the text to avoid a straining reading experience.</p>
            </TextPassage>
        </>
    )
}

export default ComponentsTest
