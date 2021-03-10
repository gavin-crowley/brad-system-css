import React from 'react'

export const Label = (props) => {

  const Label = props.tag;
  return (
    <Label
      className={`c-field__label ${props.className}`}
      htmlFor={props.htmlFor}
      id={props.id}
    >
      {props.labelText}
      {props.required && (
        <abbr className='c-field__required' title='required'>
          *
        </abbr>
      )}
    </Label>
  )
}


Label.defaultProps = {
  labelText: 'Label',
  tag: 'label'
}


