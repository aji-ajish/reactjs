import React from 'react'

function Footer({ itemLength }) {
    const year = new Date();
    return (
        <footer>Copyright &copy; {year.getFullYear()} <br />{itemLength} items in your list</footer>
    )
}

export default Footer