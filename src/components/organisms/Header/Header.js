import React from 'react'
import './Header.css'
import { Logo } from '../../molecules/Logo/Logo';
import { PrimaryNav } from '../../molecules/PrimaryNav/PrimaryNav'
import { InlineForm } from '../../molecules/InlineForm/InlineForm'
import logoImg from "../../../images/fpo-120x60.png";
import globals from "../../../data/globals.json";

export const Header = (props) => {
    return (
        <header className="c-header" {...props}>
            <Logo
                href="#"
                src={logoImg}
                alt={globals.company.name}
            />

            <PrimaryNav
                listItems={[
                    {
                        href: "#",
                        text: "Nav Item 1"
                    },
                    {
                        href: "#",
                        text: "Nav Item "
                    },
                    {
                        href: "#",
                        text: "Nav Item 3"
                    },
                    {
                        href: "#",
                        text: "Nav Item 4"
                    }
                ]}
            />

            <InlineForm
                method="post"
                action="#"
                placeholder="Search the site"
                cta="Search"
                id="search-form"
                label="Search the site"
            />
            {props.children}
        </header>
    );
}





