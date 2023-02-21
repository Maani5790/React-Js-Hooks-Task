import React, {useReducer} from 'react';
import reducer from "./reducer";


const initialValue = 0;

const UseReducer = () => {
    const[count, dispatch]  = useReducer(reducer, initialValue);
  return (
    <>
    <div>
        <h1>{count}</h1>
        <button onClick={()=> dispatch({type:"add"})}>Increase</button>
        <button onClick={()=> dispatch({type:"min"})}>Decrease</button>
        
    </div>
    
    </>
  )
}

export default UseReducer;