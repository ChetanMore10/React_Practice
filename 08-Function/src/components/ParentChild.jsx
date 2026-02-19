import React from 'react'

const ParentChild = () => {

    function parent() {
        alert("Called from Child")
    }

    function Child({ trigger }) {
        return <button onClick={trigger}>Call Parent</button>
    }

    return (
        <Child trigger={parent} />
    )
}

export default ParentChild