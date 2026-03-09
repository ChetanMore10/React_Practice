import React, { useState } from 'react'
import axios from 'axios'
import './UsingAxios.css'

const UsingAxios = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list')

        setData(response.data);
        
    }
  return (
    <div className="axios-container">
        <button className="fetch-btn" onClick={getData}>Get Data Using Axios...</button>
        <div className="data-grid">
            {data.map(function(elem, idx){
                
                return (
                    <div key={elem.id} className="data-card">
                        <img src={elem.download_url} alt={elem.author} className="data-image" />
                        <div className="data-info">
                            <h3 className="data-author">{elem.author}</h3>
                            <p className="data-details">Width: {elem.width} | Height: {elem.height}</p>
                            <a href={elem.url} target="_blank" rel="noopener noreferrer" className="data-link">
                                View on Picsum
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default UsingAxios
