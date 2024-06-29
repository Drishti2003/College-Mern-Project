import React, { useEffect, useState } from "react";

const Rest = () => {
  const [data, SetData] = useState([]);

  const GetData = () => {
    fetch("https://zogy-backend.onrender.com/foods")
      .then((res) => res.json())
      .then((res) => SetData(res));
  };

  useEffect(() => {
    GetData();
  }, []);

  //   POST
  const [postData, setpostData] = useState({
    name: "",
    type: "",
    price: 0,
    available: "",
    category: "",
    currency: "",
    description: "",
    discount: 0,
    duration: 0,
    image: "",
    quantity: 0,
    ratings: 0,
    resturant: "",
    resturant_address: "",
    resturant_distance: 0,
    status: "",
  });

  const Post = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(postData);
    console.log(raw);

    var requestoptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("https://zogy-backend.onrender.com/createfood", requestoptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        GetData();
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Name of food"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ name: e.target.value },
                }))
              }
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter type of food"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ type: e.target.value },
                }))
              }
            />
          </div>
          <div className="col-6">
            <input
              type="number"
              placeholder="Enter price of food"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ price: Number(e.target.value) },
                }))
              }
            />
          </div>
          <div className="col-12">
            <input
              type="textarea"
              placeholder="Enter description of food"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ description: e.target.value },
                }))
              }
            />
          </div>
          <div className="col-6">
            <input
              type="number"
              placeholder="Enter discount of food"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ discount: Number(e.target.value) },
                }))
              }
            />
          </div>
          <div className="col-6">
            <input
              type="number"
              placeholder="Enter duration of food"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ duration: Number(e.target.value) },
                }))
              }
            />
          </div>
          <div className="col-6">
            <input
              type="image"
              placeholder="Enter image of food"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ image: e.target.value },
                }))
              }
            />
          </div>
          <div className="col-6">
            <input
              type="number"
              placeholder="Enter quantity of food"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ quantity: Number(e.target.value) },
                }))
              }
            />
          </div>
          <div className="col-6">
            <input
              type="number"
              placeholder="Enter rating of food"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ ratings: Number(e.target.value) },
                }))
              }
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Name of restraurant"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ resturant: e.target.value },
                }))
              }
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter address of restraurant"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ resturant_address: e.target.value },
                }))
              }
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter distance of restraurant"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ resturant_distance: e.target.value },
                }))
              }
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter status of food"
              onChange={(e) =>
                setpostData((postData) => ({
                  ...postData,
                  ...{ status: e.target.value },
                }))
              }
            />
          </div>
        </div>
      </div>

      <button onClick={() => Post()}>Post</button>
      {data?.map((items, i) => (
        <>
          <p>
            {i + 1}.{items.resturant}
          </p>
        </>
      ))}
    </div>
  );
};

export default Rest;
