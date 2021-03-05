import React from 'react'
import '../css/App.css'
import { TextPassage } from '../components/atoms/TextPassage/TextPassage'
import { Button } from '../components/atoms/Button/Button'
import { PrimaryNav } from '../components/molecules/PrimaryNav/PrimaryNav'
import { Logo } from '../components/molecules/Logo/Logo'
import logoimg from '../images/fpo-120x60.png'
import { InlineForm } from '../components/molecules/InlineForm/InlineForm'
import { Header } from '../components/organisms/Header/Header'
import { Card } from '../components/molecules/Card/Card'
import { CardList } from '../components/organisms/CardList/CardList'
import { Footer } from '../components/organisms/Footer/Footer'
import { Hero } from '../components/molecules/Hero/Hero'
import heroImg from '../images/fpo-1200x650.png'
import { Section } from '../components/organisms/Section/Section'



const BradHome = () => {
    return (
        <div className="App">
            <Header />

            <Hero title="This is my hero" description="This is the hero description text" heroimgsrc={heroImg} />


            <Section title="Hi I'm another section" description="This is a different description">
                <div className="l-linelength-container">
                    <TextPassage>
                        <p>A text passage contains arbitrary text that might come from a CMS. It should live within a container that caps the line length of the text to avoid a straining reading experience.</p>

                        <h2>Heading 2</h2>

                        <p>This is another paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <ul>
                            <li>Here is a unordered list item</li>
                            <li>Here is a unordered list item</li>
                            <li>Here is a unordered list item</li>
                            <li>Here is a unordered list item</li>
                        </ul>

                        <h3>Heading 3</h3>

                        <ol>
                            <li>Here is a unordered list item</li>
                            <li>Here is a unordered list item</li>
                            <li>Here is a unordered list item</li>
                            <li>Here is a unordered list item</li>
                        </ol>

                        <p><a href="#link">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <blockquote>
                            <p>This is a quotation from something.</p>
                            <cite>Cite source</cite>
                        </blockquote>

                        <p>That is all.</p>
                    </TextPassage>
                </div>{/* end l-linelength-container */}
            </Section>

            <Section title="Hi I'm a section title" description="This is a description of the section">
                <CardList listItems={[
                    {
                        "theme": "dark",
                        "title": "Squeeze Its",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        "title": "Capri Suns",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        "title": "Hugs",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        "title": "Hugs",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        "title": "Hugs",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        "href": "http://google.com",
                        "title": "Mondo",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    }
                ]} />

            </Section>
            <Footer />
        </div>
    )
}

export default BradHome

