import React from 'react'

export const Select = (props) => {
	return (
		<select
			className="c-field__control"
			id={props.id}
			multiple={props.multiple}
			disabled={props.disabled}
			value={props.value}
			onChange={props.changeAction}
			aria-describedby={props.ariaDescribedBy}
			aria-labelledby={props.ariaLabelledBy}
		>
			{props.listItems.map(function (listItem, index) {
				return listItem.optGroupLabel ? (
					<optgroup
						key={`option-${index}`}
						label={listItem.optGroupLabel}
					>
						{listItem.optGroupItems.map(function (
							optGroupItem,
							index
						) {
							return (
								<option
									key={`option-group-${index}`}
									value={optGroupItem.value}
								>
									{optGroupItem.option}
								</option>
							);
						})}
					</optgroup>
				) : (
					<option key={`option-${index}`} value={listItem.value}>
						{listItem.option}
					</option>
				);
			})}
		</select>
	)
}


Select.defaultProps = {
	listItems: [
		{
			value: "value-1",
			option: "Value 1"
		},
		{
			value: "value-2",
			option: "Value 2"
		}
	]
};






