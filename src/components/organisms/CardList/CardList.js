import React from 'react'
import "./CardList.scss";
import { Card } from '../../molecules/Card/Card'

export const CardList = (props) => {
    console.log(props)
    return (
        <ul className="c-card-list">
            {props.cardListItems.map(function (listItem, index) {
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

