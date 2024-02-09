import React, { useMemo, useState } from 'react';

export default function UseMemoHook(){
    const [add, setAdd] = useState(0);
    const [sub,setSub] = useState(50);

    const multiply = useMemo(function Multi(){
        console.log("****** rerender value");
        return(
            add * 10
        )
    }, [sub] )

    return(
        <>
        <center>
        <h1>Today we learn UseMemo hook</h1>

        {multiply} <br/>
        <button onClick={() =>setAdd(add+2)}>Add</button>
        <span>{add}</span> <br/>
        <button onClick={() =>setSub(sub-2)}>Sub</button>
        <span>{sub}</span> 
        </center>
        </>       
    )
}