import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const User = () =>{
    const params = useParams()
    console.log(params);
    const [state,setState] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/'+params?.id)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setState(data)
        })
    },[params])
    console.log(state);
    return(
        <div>
            <img src={state.avatar_url} alt="" />
            <h1>{state.login}</h1>
            <h1>{state.followers}</h1>
        </div>
    )
}

