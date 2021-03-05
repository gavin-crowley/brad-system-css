import React from 'react'
import "./InlineForm.css";
import { Button } from '../../atoms/Button/Button'

export const InlineForm = (props) => {
    return (
        <form
            className="c-inline-form"
            method={props.method}
            action={props.action}
        >
            <label htmlFor={props.id} className="c-inline-form__label u-is-vishidden">{props.label}</label>
            <input
                id={props.id}
                className="c-inline-form__input"
                placeholder={props.placeholder}
            />
            <Button text={props.cta} />
        </form>
    )
}


