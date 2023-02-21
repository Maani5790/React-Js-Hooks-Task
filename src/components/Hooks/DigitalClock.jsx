import React, { useState } from 'react';
import "./clock.css"
 
 
const Clock = () => {
    let time = new Date().toLocaleTimeString();
    
    const [count, setCount] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCount(time);
    };
    setInterval(UpdateTime,1000)
    return(
        <>
           <h1 className='head'> {count}</h1>
           <button onClick={UpdateTime}>Click Me</button>
           
        </> 
    );
};    
export default Clock;