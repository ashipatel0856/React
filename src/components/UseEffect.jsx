import React from 'react'
import { useEffect, useState } from 'react'

const UseEffect = () => {

    const [counter, setCounter] = useState(10)
    useEffect(() => {
        document.title = counter
        console.log("useEffect is run");
    }, [counter])

    return (
        <div>
            <>
                <h1>{counter}</h1>
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
                <button onClick={() => setCounter(counter - 1)}>Decrease</button>
            </>
        </div>
    )
}

export default UseEffect