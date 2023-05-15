import React, { useRef } from 'react'
import { FaPlus } from "react-icons/fa";

function AddItem({ newitem, setnewitem, handleSubmit }) {
    const inputRef=useRef()
    return (
        <form className='addform' onSubmit={handleSubmit}>
            {/* <label htmlFor="addItem">Add Item</label> */}
            <input type="text" id="addItem" ref={inputRef} placeholder='Add Item' autoFocus required value={newitem} onChange={(e) => setnewitem(e.target.value)} />
            <button type='submit' aria-label='Add Item' onClick={()=>inputRef.current.focus()}><FaPlus /></button>

        </form>
    )
}

export default AddItem