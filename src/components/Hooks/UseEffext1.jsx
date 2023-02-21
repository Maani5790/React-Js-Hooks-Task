import React, {useEffect, useState} from 'react'

const UseEffext1 = () => {
    let initialValue = 12;
    const [notification, setNotification] = useState(initialValue);

   useEffect(()=>{
    console.log(" U Clicked");
    document.title = `u clicked ${notification} time`
   });

  return (
    <>
    
    <h1>Use Effect</h1>
    <p>{notification}</p>
    <button onClick={()=> setNotification(notification + 1) }>Clicked</button>
    
    </>
  )
}

export default UseEffext1