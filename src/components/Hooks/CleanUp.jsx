import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [width, setWidth] = useState(window.screen.width);

  const setwindow = () => {
    setWidth(()=> window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setwindow);
  });

  return (
    <>
      <div>
        <h1>UseEffect CleanUp</h1>
        <p>the size of window is {width}</p>
      </div>
    </>
  );
};

export default CleanUp;
