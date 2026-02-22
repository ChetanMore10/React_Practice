import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted..!");
    setTitle('')
  }

  return (
    <div>
      <form action="" onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter Name :' value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App