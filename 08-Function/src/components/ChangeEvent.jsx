import React, { useState } from 'react'

const ChangeEvent = () => {

  const [name, setName] = useState("")

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input type="text" placeholder='Enter Name :' onChange={handleChange}/>
      <h3>{name}</h3>
    </div>
  )
}

export default ChangeEvent