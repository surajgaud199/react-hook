 import { useState,useCallback } from "react";
 import Chaild1 from "../component/Chaild1";


 export default function UseCallbackhook(){
    const [add, setAdd] = useState(0);
    const learn = useCallback(()=>{

    },[])

    return(
        <>
        <center>
        <h1>How to use Callback hook</h1>
        <span>{add}</span> <br/>
        <button onClick={() => setAdd(add+3)}>Add</button>
        <Chaild1 learn={learn}/>
        </center>
        </>
    )
}