import React, { useEffect, useState } from "react";

const Meme = () => {
  const [data, setState] = useState(null);

  const getMemeData = () => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((res) => setState(res.data));
  };
  useEffect(() => {
    getMemeData();
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {data?.memes?.map((item, i) => (
        <>
          <div style={{ border: "1px solid black" }}>
            <img src={item.url} width={"200px"} height={"200px"} alt="" />
            <h1>{item.name}</h1>
          </div>
        </>
      ))}
    </div>
  );
};

export default Meme;
