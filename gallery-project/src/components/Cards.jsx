import React from 'react'

const Card = (props) => {

    return (
        <div className="gallery-card">
            <a href={props.elem.url} target='_blank' className="card-link">
                <div className='card-image-container'>
                    <img className='card-image' src={props.elem.download_url} alt="" />
                </div>
                <h2 className='card-author'>{props.elem.author}</h2>
            </a >
        </div>
    )
}

export default Card
