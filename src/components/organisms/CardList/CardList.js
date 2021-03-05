import React from 'react'
import "./CardList.css";
import { Card } from '../../molecules/Card/Card'

export const CardList = (props) => {
    return (
        <ul className="c-card-list">
            {props.listItems.map(function (listItem, index) {
                return (
                    <Card
                        key={`c-card-${index}`}
                        theme={listItem.theme}
                        title={listItem.title}
                        description={listItem.description}
                    />
                )
            })}
        </ul>
    )
}

