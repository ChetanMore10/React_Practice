import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num + 1)
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  function increase5Num() {
    setNum(num + 5)
  }

  function decrease5Num() {
    setNum(num - 5)
  }

  return (
    <div className="container">
      <h1 className="title">Counter App</h1>
      <div className="counter-display">{num}</div>
      <div className="button-group">
        <button className="btn btn-increase" onClick={increaseNum}>Increase</button>
        <button className="btn btn-decrease" onClick={decreaseNum}>Decrease</button>
        <button className="btn btn-add5" onClick={increase5Num}>Add 5</button>
        <button className="btn btn-remove5" onClick={decrease5Num}>Remove 5</button>
      </div>
    </div>
  )
}

export default App
