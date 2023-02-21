import React from 'react';
import picture from "./assets/img.jpg"



const Compo = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div>
            <img className=' h-96 w-[100] mx-auto my-4' src={picture} alt="/" />
        
        </div>
    </div>
  )
}

export default Compo