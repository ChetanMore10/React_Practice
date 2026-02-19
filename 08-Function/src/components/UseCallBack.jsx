import React, { useCallback } from 'react'

const UseCallBack = () => {

    const handleClick = useCallback(() => {
        console.log("Clicked..!");
    }, []);

    return (
        <div>
            <button onClick={handleClick}>UseCallBack</button>
        </div>
    )
}

export default UseCallBack