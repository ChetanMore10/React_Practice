import React from 'react'
import './App.css'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted..!");
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Registration Form</h2>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name"
            placeholder='Enter Name :' 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address"
            placeholder='Enter Address' 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input 
            type="text" 
            id="age"
            placeholder='Enter Age' 
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default App
