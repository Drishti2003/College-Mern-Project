import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
// import './home.css'

const Home=()=>{
    const[state,setState]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setState(data);

        })
    },[])

    const know = (items)=>{
        navigate("/user/"+items.login)
    }

    return(
        <div class="container">
            {state?.map((items,i)=>(
                <div class="cards">
                <img src={items.avatar_url}/>
                <h1>{items.login}</h1>
                <br />
                <button onClick={()=>know(items)}>know more</button>
                </div>
            ))}
        </div>
    
    )

}
export default Home;