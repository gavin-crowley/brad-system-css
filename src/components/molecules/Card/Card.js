import React from 'react'
import "./Card.css"
import classnames from "classnames"


export const Card = (props) => {

    let cardClass = classnames({
        "c-card": true,
        "c-card--dark": props.theme === "dark"
    })

    return (
        <div className={cardClass}>
            <header className="c-card__header">
                <h3 className="c-card__title">{props.title}</h3>
                <p className="c-card__description">
                    {props.description}
                </p>
            </header>
            <div className="c-card__body">{props.children}</div>
        </div>
    )
}

