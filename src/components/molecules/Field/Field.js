import React from 'react'
import classnames from 'classnames'
import { Label } from '../../atoms/Label/Label'
import './Field.scss'

export const Field = (props) => {
  const fieldClass = classnames('c-field', props.className, {
    'has-error': props.hasError,
    'is-disabled': props.disabled
  })
  return (
    <div className={fieldClass}>
      <Label
        htmlFor={props.id}
        labelText={props.label}
        required={props.required}
        id={props.ariaLabelledBy}
        tag={props.tag}
      />
      <div className='c-field__body'>{props.children}</div>
      {props.fieldNote && (
        <div className='c-field__note' id={props.ariaDescribedBy}>
          {props.fieldNote}
        </div>
      )}
    </div>
  )
}

// Field.defaultProps = {
//   id: 'field-1',
//   label: 'Label',
//   fieldNote: 'This is a fieldnote.'
// };

