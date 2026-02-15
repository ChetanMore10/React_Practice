import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Virat" num={18} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJv4siZElzD9aDUsVEAf-wTKhqnH_iJkX7Q&s' />
      <Card user="Anushaka" num={18} />
    </div>
  )
}

export default App