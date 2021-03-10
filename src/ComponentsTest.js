import React from 'react'

// Atoms 
import { TextPassage } from './components/atoms/TextPassage/TextPassage'
import { Button } from './components/atoms/Button/Button'
import { Label } from './components/atoms/Label/Label'

// Molecules
import { Card } from './components/molecules/Card/Card'
import { CheckboxField } from './components/molecules/CheckboxField/CheckboxField'
import { Field } from './components/molecules/Field/Field'
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

            <CheckboxField
                required={true}
                listItems={[
                    {
                        id: 'checkbox-1',
                        name: 'checkbox-example',
                        text: 'Checkbox 1',
                        type: 'checkbox'
                    },
                    {
                        id: 'checkbox-2',
                        name: 'checkbox-example',
                        text: 'Checkbox 2',
                        type: 'checkbox'
                    },
                    {
                        id: 'checkbox-3',
                        name: 'checkbox-example',
                        text: 'Checkbox 3',
                        type: 'checkbox'
                    }
                ]}
                fieldNote='This is a required field'
            />
        </>
    )
}

export default ComponentsTest
