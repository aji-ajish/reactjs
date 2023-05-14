import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

function LineItem({ item, handleCheck, handleDelete, text_color, text_style }) {
    return (
        <li key={item.id}>
            <label onClick={() => handleCheck(item.id)} style={{ textDecoration: text_style, color: text_color }} >{item.item}</label>
            &nbsp;<FaTrashAlt onClick={() => handleDelete(item.id)} role='button' tabIndex='0' className='delete' aria-label={`Delete ${item.item}`} />
        </li>
    )
}

export default LineItem