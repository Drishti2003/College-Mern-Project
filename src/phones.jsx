import React, { useEffect, useState } from "react";

const Phone = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json)
      .then((res) => setData(res));
  };

  const Delete = (id) => {
    fetch("https://api.restful-api.dev/objects/" + id, {
      method: "DELETE",
    });
    getData();
  };

  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);

  const AddData = (id) => {
    fetch("https://api.restful-api.dev/objects/", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        data: {
          price: price,
          color: color,
        },
      }),
      headers: {
        "Content-type": "appllication/json; charset-UTF-8",
      },
    });
    getData();
  };

  console.log(data);
  return (
    <>
      <div className="'container" style={{ marginBottom: "50px" }}>
        <div>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name=""
            id=""
          />
          <input
            type="text"
            onChange={(e) => setColor(e.target.value)}
            name=""
            id=""
          />
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            name=""
            id=""
          />
        </div>
        <button onClick={() => AddData()}>Add Object</button>
      </div>

      <div className="container">
        <div className="row">
          {data?.map((items, i) => (
            <div className="col-4">
              <div
                style={{
                  border: "1px solid black",
                  height: "300px",
                  width: "200px",
                }}
              >
                <h1>{items.name}</h1>
                <p>{items?.data?.Description}</p>
                <p>{items?.data?.capacity}</p>
                <p>{items?.data?.color}</p>
                <p style={{ color: "blue", fontOpticalSizing: "25px" }}>
                  {items?.data?.generation}{" "}
                  {items?.data?.generation ? "generation" : ""}
                </p>
                <p style={{ color: "red" }}>
                  {items?.data?.price} {items?.data?.price ? "$" : ""}
                </p>
                <button onClick={() => Delete(items.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Phone;
