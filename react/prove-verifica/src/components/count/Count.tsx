import React, { useState, useEffect } from 'react';
import '../../assets/style/count.css';
function Count() {
    
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <>
        <h1>Count</h1>
        <button onClick={() => {setCount(count + 1)}}>+</button>
        <button onClick={() => {setCount(count - 1)}}>-</button>
        <p>{count}</p>
        </>
    )
}

export default Count