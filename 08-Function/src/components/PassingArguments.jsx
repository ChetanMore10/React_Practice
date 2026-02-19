import React from 'react'

const PassingArguments = () => {

    function greet(name){
        alert(`Hello ${name}`)
    }

  return (
    <div>
        <button onClick={()=>greet("Chetan")}>
            Click Me...!
        </button>
    </div>
  )
}

export default PassingArguments