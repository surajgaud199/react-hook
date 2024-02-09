import React, { useState } from 'react';
 

export default function UseStatehook(){
  const [count,setCount] = useState(4);


  function updata(){
    setCount(count*10)
  }

    return(
        <>
        <center>
          <h1>This is a UseState</h1>
          <h5>value : {count}</h5> 
          <button onClick={updata}>Button</button>
          </center>
        </>
        
    )
}