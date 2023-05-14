import React from 'react'
import { FaPlus } from "react-icons/fa";

function AddItem() {
    return (
        <form className='addform'>
            <label htmlFor="addItem">Add Item</label>
            <input type="text" id="addItem" placeholder='Add Item' autoFocus required />
            <button type='submit' aria-label='Add Item'><FaPlus /></button>
        </form>
    )
}

export default AddItem