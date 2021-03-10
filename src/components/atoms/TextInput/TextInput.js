import React from 'react'

export const TextInput = (props) => {
	return (
		<input
			className="c-field__control"
			id={props.id}
			name={props.name}
			type={props.type}
			value={props.value}
			placeholder={props.placeholder}
			disabled={props.disabled}
			readOnly={props.readOnly}
			required={props.required}
			aria-describedby={props.ariaDescribedBy}
			aria-labelledby={props.ariaLabelledBy}
			onChange={props.action}
			onBlur={props.blurAction}
		/>
	)
}

TextInput.defaultProps = {
	disabled: false,
	type: "text"
}



