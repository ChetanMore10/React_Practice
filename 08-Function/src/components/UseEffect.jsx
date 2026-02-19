import React, { useEffect } from 'react'

const UseEffect = () => {

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        console.log("API Calling");
    }

    return (
        <div>
            <h2>Loading Data..!</h2>
        </div>
    )
}

export default UseEffect