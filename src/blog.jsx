import React, { useState } from "react";
import Cards from "./cards";

const Blog = () => {
  const data = [
    {
      title: "BMW",
      description: "lorem ipsum1",
    },
    {
      title: "KIA",
      description: "lorem ipsum2",
    },
    {
      title: "HYUNDIA",
      description: "lorem ipsum3",
    },
    {
      title: "PUNCH",
      description: "lorem ipsum4",
    },
    {
      title: "THAR",
      description: "lorem ipsum5",
    },
  ];

  const [state, updateState] = useState("Cars");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 onClick={() => updateState("All the cars")}>{state}</h1>
      {data?.map((item, i) => (
        <Cards title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default Blog;
