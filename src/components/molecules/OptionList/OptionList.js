import React from 'react'

export const OptionList = (props) => {
  return (
    <ul className='c-option-list'>
      {props.listItems.map((listItem, index) => {
        let boundItemChange = onItemChange.bind(this, listItem);
        return (
          <li
            className='c-option-list__item'
            key={`option-list-item-${index}`}
          >
            {console.log(props.label)}
            <label className='c-input-group' htmlFor={listItem.id}>
              <input
                id={listItem.id}
                type={listItem.type}
                name={listItem.name}
                value={listItem.value}
                className='c-input-group__control'
                checked={listItem.checked}
                disabled={listItem.disabled}
                readOnly={listItem.readonly}
                onChange={boundItemChange}
                aria-describedby={props.ariaDescribedBy}
                aria-labelledby={props.ariaLabelledBy}
              />
              <span className='c-input-group__text'>{listItem.text}</span>
            </label>
          </li>
        )
      })}
    </ul>
  );

}

OptionList.defaultProps = {
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
}
