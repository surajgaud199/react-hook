import React, {useEffect ,useState } from 'react';
 

export default function useEffectHook(){
  const [count,setCount] = useState(4);
  const [count2,setCount2] = useState(4);


  function updata(){
    setCount(count*10)
  }

  function updata1(){
    setCount2(count2+1)
  }

  useEffect(() =>{
    console.log("I am running on render");
  }, [count2])

    return(
        <>
        <center>
          <h1>This is a UseState</h1>
          <h5>value : {count}</h5> 
          <button onClick={updata}>Button</button>

          <h1>This is a UseEffect</h1>
          <h5>value : {count2}</h5> 
          <button onClick={updata1}>Button</button>
          </center>
        </>
        
    )
}