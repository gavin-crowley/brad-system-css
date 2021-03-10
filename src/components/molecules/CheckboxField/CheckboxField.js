import React from 'react'
import { Field } from '../Field/Field'
import { OptionList } from '../OptionList/OptionList'
import './CheckboxField.scss'

export const CheckboxField = (props) => {

  const fieldClass = 'c-checkbox-field'

  return (
    <Field
      className={fieldClass}
      id={props.id}
      label={props.label}
      hasError={props.hasError}
      disabled={props.disabled}
      required={props.required}
      fieldNote={props.fieldNote}
      title={props.title}
      ariaDescribedBy={props.ariaDescribedBy}
      ariaLabelledBy={props.ariaLabelledBy}
      tag={props.tag}
    >
      <OptionList
        listItems={props.listItems}
        inputChange={handleInputChange}
        ariaDescribedBy={props.ariaDescribedBy}
        ariaLabelledBy={props.ariaLabelledBy}
      />
    </Field>
  )
}


