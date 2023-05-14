import React from 'react'
import ListItems from './ListItems';

function Content2({ items, handleCheck, handleDelete }) {

    return (
        <div className='content2' >
            {(items.length) ? (
                <ListItems
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}

                />
            ) : (<p>Your list is empty</p>)}

        </div>
    )
}

export default Content2