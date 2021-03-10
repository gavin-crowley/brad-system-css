import React from 'react'
import { OptionList } from '../../molecules/OptionList/OptionList';
import { Field } from '../../molecules/Field/Field';
import './RadioField.scss';

export const RadioField = (props) => {
  const fieldClass = 'c-radio-field';

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
      tag={props.tag}
      ariaDescribedBy={props.ariaDescribedBy}
      ariaLabelledBy={props.ariaLabelledBy}
    >
      <OptionList
        listItems={props.listItems}
        ariaDescribedBy={props.ariaDescribedBy}
        ariaLabelledBy={props.ariaLabelledBy}
      />
    </Field>
  )
}


RadioField.defaultProps = {
  tag: 'h4',
  ariaDescribedBy: 'radio-field-1',
  ariaLabelledBy: 'radio-field-1-label',
  listItems: [
    {
      id: 'radio-1',
      name: 'radioexample',
      text: 'Radio 1',
      type: 'radio'
    },
    {
      id: 'radio-2',
      name: 'radioexample',
      text: 'Radio 2',
      type: 'radio'
    },
    {
      id: 'radio-3',
      name: 'radioexample',
      text: 'Radio 3',
      type: 'radio'
    }
  ]
};


