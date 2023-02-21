import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <p>U Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click This Button</button>
    </div>
  );
};

export default Hooks;
