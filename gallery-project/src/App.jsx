import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Cards';
import './App.css';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])


  let printUserData = <div className='loading-container'><h3 className='loading-text'>Loading...</h3></div>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx} className="card-wrapper">
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='gallery-container'>
      <div className='gallery-grid'>
        {printUserData}
      </div>

      <div className='pagination'>
        <button
          className='pagination-btn'
          disabled={index === 1}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
        >
          Prev
        </button>
        <span className='page-indicator'>Page {index}</span>
        <button
          className='pagination-btn'
          onClick={() => {
            setUserData([])
            setIndex(index + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
