import React, { useState } from 'react'

function Content() {
    const [name, setName] = useState('Ajish')
    function handleNamechange() {
        const names = ['Ajish', 'Aji', 'Jenisha', 'Jeni']
        const int = Math.floor(Math.random() * names.length)
        setName(names[int])
    }

    const [count, setCount] = useState(0)
    function increment() {
        // setCount(count + 1)
        setCount((preCount) => { return preCount + 1 })
    }
    function decrement() {
        if (count <= 0) {
            setCount(0)
        } else {
            setCount((preCount) => { return preCount - 1 })
        }


    }
    return (
        <div>
            <p>Your Name is <span style={{ color: '#67ae11' }}>{name}</span></p>
            <button onClick={handleNamechange}>Click</button>
            <br />

            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Content