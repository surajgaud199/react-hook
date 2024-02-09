import { useRef, useState } from "react";

export default function UseRef(){
    const  refElement = useRef('');
    const [name,setName] = useState("suraj");
    console.log(refElement);

    function Reset(){
        setName('');
        refElement.current.focus()
    }

    function HendallInput(){
        refElement.current.style.color="red"
    }

    return(
        <>
        <center>
        <h1>This is  UseRef</h1>
        <h3>Useref ka use hm directly dom manipulation ka liye karte hian</h3>

        <input ref={refElement} type="text" value={name} onChange={(e) =>
        setName(e.target.value)}/>
        <button onClick={Reset}>Click me for reset</button>
        <button onClick={HendallInput}>Input efferct</button>
        </center>
        </>
    )
}