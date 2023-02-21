import React, {useRef, useState, useEffect } from "react";

const UseRef = () => {
  const [userInput, setUserInput] = useState("");

  const count = useRef(0);
  

  useEffect(() => {

    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <p>{count.current}</p>

      </>
    
  );
};


export default UseRef;