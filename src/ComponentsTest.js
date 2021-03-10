import React from 'react'

// Atoms 

import { Button } from './components/atoms/Button/Button'
import { Label } from './components/atoms/Label/Label'
import { Icon } from './components/atoms/Icon/Icon'
import { IconGrid } from './components/atoms/IconGrid/IconGrid'
import { Select } from './components/atoms/Select/Select'
import { Textarea } from './components/atoms/Textarea/Textarea'
import { TextPassage } from './components/atoms/TextPassage/TextPassage'

// Molecules
import { Card } from './components/molecules/Card/Card'
import { CheckboxField } from './components/molecules/CheckboxField/CheckboxField'
import { Field } from './components/molecules/Field/Field'
import { FooterNav } from './components/molecules/FooterNav/FooterNav'
import { Grid } from './components/molecules/Grid/Grid'
import { GridItem } from './components/molecules/GridItem/GridItem'
import { Hero } from './components/molecules/Hero/Hero'
import { InlineCheckbox } from './components/molecules/InlineCheckbox/InlineCheckbox'
import { InlineForm } from './components/molecules/InlineForm/InlineForm'
import { LayoutContainer } from './components/molecules/LayoutContainer/LayoutContainer'
import { Logo } from './components/molecules/Logo/Logo'
import { OptionList } from './components/molecules/OptionList/OptionList'
import { PageHeader } from './components/molecules/PageHeader/PageHeader'
import { PrimaryNav } from './components/molecules/PrimaryNav/PrimaryNav'
import { RadioField } from './components/molecules/RadioField/RadioField'
import { TextareaField } from './components/molecules/TextareaField/TextareaField'
import { TextField } from './components/molecules/TextField/TextField'



// Organisms 
import { CardList } from './components/organisms/CardList/CardList'
import { Footer } from './components/organisms/Footer/Footer'
import { Header } from './components/organisms/Header/Header'
import { Section } from './components/organisms/Section/Section'

//Images
import logoimg from './images/fpo-120x60.png'
import heroImg from './images/fpo-1200x650.png'


// Pages 
import { Homepage } from './pages/Homepage/Homepage'





const ComponentsTest = () => {
    return (
        <>
            <Homepage />
            {/* <Hero heroimgsrc={heroImg} heroimgalt="Alt Text" title="Hero Title" description="This is the hero description">
                Hello Hero
</Hero> */}
        </>
    )
}

export default ComponentsTest
