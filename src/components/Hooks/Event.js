import React, {useState} from 'react'

const Event = () => {
    const[name, setName] = useState("Rehman");
     
    function handleChange(e){

        setName(e.target.value);
    }

  return (
    <>


    <section>
        {/* <Row label="name"> */}
            <input 
            value = {name}
            onChange = {handleChange}
            />

        {/* </Row> */}
    </section>
    
    
    </>
  )
}

export default Event