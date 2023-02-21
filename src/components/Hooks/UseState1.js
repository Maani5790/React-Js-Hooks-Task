import React, { useState } from "react";

const UseState1 = () => {
  const initialVal = 4;
  const [num, setNum] = useState(initialVal);
  return (
    <>
      <p>U clicked {num} times</p>
      <button onClick={() => setNum(num + 1)}>Click Increment</button>
      <button onClick={() => (num > 0 ? setNum(num - 1) : setNum(0))}>
        Click decrement
      </button>
    </>
  );
};

export default UseState1;
