import React from 'react'

const RightCardContext = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'>
            <h1 className='bg-white rounded-full text-xl font-semibold h-8 w-8 flex justify-center items-center'>{props.id+1}</h1>
            <div>
                <p className='text-shadow-7xl text-xl leading-midium text-white mb-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptatem cumque eos omnis dolore accusamus.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContext