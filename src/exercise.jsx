import React, { useState } from "react";

export const Exercise = ()=>{
    const [data,setData] = useState(0)
    const Add = ()=>{setData(data+1)}
    return(
        <div>{data}<button onClick={()=>Add()}>add</button></div>
    )
}