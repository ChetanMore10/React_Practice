import React from 'react'
import LeftContext from './LeftContext'
import RightContext from './RightContext'

const Page1Context = (props) => {
  return (
    <div className='pb-16 pt-6 px-18 flex items-center gap-10 h-screen'>
        <LeftContext />
        <RightContext users = {props.users}/>
    </div>
    
  )
}

export default Page1Context