import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:'royalblue',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: "https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: '',
      color:'lightgreen',
      tag: 'Underserved'
    },
    {
      img: "https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:'orange',
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: '',
      color:'pink',
      tag: 'Fully Banked'
    },
    {
      img: "https://images.unsplash.com/photo-1769069919886-42b327098e41?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: '',
      color:'black',
      tag: 'Unbanked'
    }
  ]

  return (
    <div>
      <Section1 users = {users}/>
      <Section2 />
    </div>
  )
}

export default App