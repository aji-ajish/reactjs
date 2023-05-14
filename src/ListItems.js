import React from 'react'
import LineItem from './LineItem';

function ListItems({ items, handleCheck, handleDelete }) {
    return (
        <ul>
            {items.map((item) => {
                let text_style = item.checked === true ? 'line-through' : 'none';
                let text_color = item.checked === true ? '#5658db' : '#56db77';
                return (
                    <LineItem
                        text_style={text_style}
                        text_color={text_color}
                        key={item.id}
                        item={item}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete} />
                )
            })}
        </ul>
    )
}

export default ListItems