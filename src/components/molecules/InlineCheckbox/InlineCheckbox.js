import React from 'react'
import './InlineCheckbox.scss'

export const InlineCheckbox = (props) => {
  return (
    <label className='c-input-group' htmlFor={props.id}>
      <input
        id={props.id}
        type='checkbox'
        name={props.name}
        value={props.value}
        className='c-input-group__control'
        checked={props.checked}
      />
      <span className='c-input-group__text'>{props.label}</span>
    </label>
  )
}

InlineCheckbox.defaultProps = {
  id: 'inline-checkbox-1',
  name: 'inlinecheckbox',
  value: 'Value',
  label: 'Inline checkbox label'
};


