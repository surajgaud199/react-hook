import { useEffect } from "react";
import { useState } from "react";

export default function useFecht(url){
    const [data,setData] = useState([]);
    const [status, setStatus] = useState(true);
    const [error,setError] = useState('');

    async function fetchdata(){
        fetch(url)
        .then(res => res.json())
        .then((data) =>{
            setStatus(false);
            setData(data);
        });
        
    }

      useEffect(() =>{
        fetchdata();
      }, [] );


    return(
        [data,status]
    )
}