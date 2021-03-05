import React from 'react'
import './Footer.css'
import { InlineForm } from '../../molecules/InlineForm/InlineForm'
import { FooterNav } from '../../molecules/FooterNav/FooterNav'
import { LayoutContainer } from '../../molecules/LayoutContainer/LayoutContainer'
import globals from '../../../data/globals.json'

export const Footer = (props) => {
    return (
        <footer className="c-footer" {...props}>
            <LayoutContainer>
                <InlineForm
                    method="post"
                    action="#"
                    placeholder="name@email.com"
                    cta="Join our newsletter"
                    id="search-form"
                    label="Email address"
                />

                <FooterNav />

                <p className="c-footer__copyright">&copy; {(new Date()).getFullYear()} {globals.company.name}</p>
            </LayoutContainer>
        </footer>
    )
}

