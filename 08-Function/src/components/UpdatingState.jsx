import React, { useState } from 'react'

const UpdatingState = () => {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Increase</button>
        </div>
    )
}

export default UpdatingState