import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContext from './RightCardContext'

const RightCard = (props) => {
    return (
        <div className='relative h-full shrink-0 overflow-hidden w-65 rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <RightCardContext id={props.id} color={props.color} tag={props.tag} />
        </div>
    )
}

export default RightCard
