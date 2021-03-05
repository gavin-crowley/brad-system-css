import React from 'react'
import './Button.css'
import classnames from 'classnames'

export const Button = (props) => {
    console.log(props)
    const btnClass = classnames('c-btn', props.className, {
        'c-btn--secondary': props.isSecondary
    });
    return (
        <button
            className={btnClass}
            disabled={props.disabled}
            {...props}
        >
            {props.text}
        </button>
    )
}

