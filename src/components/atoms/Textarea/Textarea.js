import React from 'react'

export const Textarea = (props) => {
	return (
		<textarea
			className="c-field__control"
			id={props.id}
			name={props.name}
			placeholder={props.placeholder}
			value={props.value}
			rows={props.rows}
			disabled={props.disabled}
			readOnly={props.readOnly}
			required={props.required}
			aria-describedby={props.ariaDescribedBy}
			aria-labelledby={props.ariaLabelledBy}
			onBlur={props.blurAction}
			onChange={props.changeAction}
		/>
	)
}


Textarea.defaultProps = {
	id: "textarea-1",
	name: "default-textarea",
	placeholder: "Placeholder",
	rows: 5
};


